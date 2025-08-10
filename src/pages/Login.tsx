import { useState } from "react";
import Navbar from "../components/Navbar";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import accessIcon from "../assets/images/accessIcon.png";
import signInBg from '../assets/images/sign-in-bg.jpg'
import Footer from "../components/Footer";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#1c1c28]">
      <Navbar />
      <img src={signInBg} alt="Bg" className="w-full" />
      <div className="mx-auto flex flex-col items-center gap-6 p-10 w-full max-w-2xl -mt-48">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-14">
          <img src={accessIcon} alt="Access Logo" className="h-20" />
          <p className="font-bold text-5xl text-white">
            Softwave{" "}
            <span className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Access
            </span>
          </p>
        </div>

        {/* Botão Google */}
        <button className="flex items-center justify-center gap-3 w-full rounded-lg bg-white py-2 font-medium text-gray-700 shadow hover:bg-gray-300 transition cursor-pointer">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google logo"
            className="h-6 w-6"
          />
          Entrar com o Google
        </button>

        {/* Divider */}
        <div className="flex items-center w-full gap-4">
          <span className="h-px flex-1 bg-gray-600"></span>
          <span className="text-gray-400 text-sm">OU</span>
          <span className="h-px flex-1 bg-gray-600"></span>
        </div>

        {/* Formulário */}
        <form className="flex flex-col gap-4 w-full">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-md text-white font-bold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              required
              className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Senha */}
          <div className="flex flex-col gap-1">
            <label className="text-md text-white font-bold">
              Senha <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                required
                className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {/* Link Esqueci a senha */}
            <a
              href="#"
              className="text-md font-semibold text-white hover:underline self-start"
            >
              Esqueci a senha
            </a>
          </div>

          {/* Botão de envio */}
          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 py-2 cursor-pointer font-medium text-white hover:bg-purple-700 transition"
          >
            Entrar
          </button>

          {/* Link Criar Conta */}
          <p className="text-center text-sm text-gray-400">
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
