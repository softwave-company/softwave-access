import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { supabase } from "../utils/supabase";

import defaultAvatar from '../assets/default_avatar.jpg'

// Props do Provider
interface AuthProviderProps {
  children: ReactNode;
}

// Tipo do usuário
interface AuthUser {
  id: number;
  nome: string;
  email: string;
  cpf: string | null;
  data_nascimento: string | null;
  telefone: string | null;
  photoURL: string | null;
}

// Tipo do contexto
interface AuthContextType {
  user: AuthUser | null;
  login: (userData: AuthUser) => void;
  logout: () => void;
  updateUser: () => void;
}

// Contexto com valor inicial null
export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const updateUser = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser: AuthUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }

  const login = async (userData: AuthUser) => {
    let photoURL: string = defaultAvatar;

    try {
      const { data, error } = await supabase.storage
        .from("profile-images")
        .createSignedUrl(`avatars/${userData.id}.png`, 7200);

      if (!error && data?.signedUrl) {
        photoURL = data.signedUrl;
      }

    } catch (err) {
      console.log("Usuário não tem foto ainda, usando default");
    }

    const userWithPhoto = { ...userData, photoURL };
    setUser(userWithPhoto);
    localStorage.setItem("user", JSON.stringify(userWithPhoto));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}
