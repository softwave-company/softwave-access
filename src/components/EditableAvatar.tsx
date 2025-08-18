import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { toast } from "react-toastify";
import { Pencil } from "lucide-react";

import defaultAvatar from '../assets/default_avatar.jpg'
import { useAuth } from "../context/useAuth";

interface ProfileUser {
  id: number;
  nome: string;
  email: string;
  cpf: string | null;
  data_nascimento: string | null;
  telefone: string | null;
  photoURL: string;
}

export default function EditableAvatar() {
  const { updateUser } = useAuth();
  const [user, setUser] = useState<ProfileUser | null>(null);
  const [avatar, setAvatar] = useState<string>(defaultAvatar);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser: ProfileUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setAvatar(parsedUser.photoURL || defaultAvatar);
    }
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user) return;

    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "image/png") {
      toast.warn("Só é permitido PNG!");
      return;
    }

    setAvatar(URL.createObjectURL(file));

    const filePath = `avatars/${user.id}.png`;

    try {
      const { error } = await supabase.storage
        .from("profile-images")
        .upload(filePath, file, { upsert: true, contentType: "image/png" });

      if (error) throw error;

      let photoURL: string = defaultAvatar;

      try {
        const { data, error } = await supabase.storage
          .from("profile-images")
          .createSignedUrl(`avatars/${user.id}.png`, 7200);

        if (!error && data?.signedUrl) {
          photoURL = data.signedUrl;
        }

        const userWithPhoto = { ...user, photoURL };
        localStorage.setItem("user", JSON.stringify(userWithPhoto));
        updateUser();

      } catch (err) {
        console.log("Usuário não tem foto ainda, usando default");
      }
    } catch (err) {
      console.error("Erro no upload:", err);
      toast.error("Erro ao enviar a imagem.");
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <label className="relative cursor-pointer group">
        <img
          src={avatar}
          alt="Avatar"
          className="w-32 h-32 rounded-full object-cover border-2 border-purple-500 transition duration-300 group-hover:blur-sm"
        />

        {/* overlay do hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 rounded-full transition">
          <Pencil className="w-6 h-6 text-white" />
        </div>

        <input
          type="file"
          accept="image/png"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </label>
    </div>
  )
}
