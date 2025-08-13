import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useAuth } from "../context/useAuth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import accessIcon from '../assets/images/accessIcon.png';
import signInBg from '../assets/images/sign-in-bg.jpg';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState<string | null>(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMensagem(null);

    try {
      const query = new URLSearchParams({ email, senha });
      const res = await fetch(`/php/auth.php?${query.toString()}`, {
        method: "GET",
      });

      const data = await res.json();

      if (res.ok && data.user) {
        login(data.user);   // salva usuário no contexto
        navigate("/");      // redireciona pra home
      } else {
        setMensagem(data.error || "Erro no login");
      }
    } catch (err) {
      setMensagem("Erro na requisição");
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#1c1c28]">
      <Navbar />
      <img src={signInBg} alt="Bg" className="w-full" />
      <div className="mx-auto flex flex-col items-center gap-6 p-10 w-full max-w-2xl -mt-48">
        <div className="flex items-center gap-2 mb-14">
          <img src={accessIcon} alt="Access Logo" className="h-20" />
          <p className="font-bold text-5xl text-white">
            Softwave{" "}
            <span className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Access
            </span>
          </p>
        </div>

        <button className="flex items-center justify-center gap-3 w-full rounded-lg bg-white py-2 text-black shadow hover:bg-gray-300 transition cursor-pointer font-bold">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google logo"
            className="h-6 w-6"
          />
          Entrar com o Google (Em breve...)
        </button>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <label className="text-md text-white font-bold">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              placeholder="Digite seu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-md text-white font-bold">Senha <span className="text-red-500">*</span></label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 py-2 cursor-pointer font-medium text-white hover:bg-purple-700 transition"
          >
            Entrar
          </button>

          {mensagem && <p className="mt-2 text-center text-red-500 font-semibold">{mensagem}</p>}

          <p className="text-center text-sm text-gray-400 mt-2">
            Novo no Access?{" "}
            <a href="/auth/sign-up" className="text-purple-400 hover:underline">
              Criar Conta
            </a>
          </p>
        </form>
      </div>
      <div className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 h-1"></div>
      <Footer />
    </div>
  );
}
