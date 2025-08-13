import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import signUpBg from "../assets/images/sign-up-bg.jpg";
import Footer from "../components/Footer";
import { useAuth } from "../context/useAuth";

export default function Signup() {
  type Mensagem = {
    tipo: "erro" | "sucesso";
    texto: string;
  } | null;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [mensagem, setMensagem] = useState<Mensagem>(null);
  const [aceitaTermos, setAceitaTermos] = useState(false);
  const { login } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!aceitaTermos) {
      setMensagem({ tipo: "erro", texto: "Você precisa aceitar os Termos de Uso." });
      return;
    }

    // Confere se as senhas batem
    if (senha !== confirmSenha) {
      setMensagem({ tipo: "erro", texto: "As senhas não coincidem" });
      return;
    }

    const body = new URLSearchParams({
      nome,
      email,
      senha,
    });

    try {
      const res = await fetch("/php/auth.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMensagem({ tipo: "sucesso", texto: data.message });
        login(data.user);
        navigate("/");
      } else {
        setMensagem({ tipo: "erro", texto: data.error || "Erro desconhecido" });
      }
    } catch (error) {
      setMensagem({ tipo: "erro", texto: "Erro na requisição" });
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#1c1c28]">
      <Navbar />
      <img src={signUpBg} alt="Bg" className="w-full" />
      <div className="mx-auto flex flex-col items-center gap-6 p-10 w-full max-w-3xl -mt-48">
        {/* Title */}
        <div className="flex flex-col items-center gap-2 mb-14">
          <p className="font-bold text-6xl text-white">Criar conta</p>
          <p className="text-white text-lg font-semibold">
            Crie sua conta para comprar ingressos
          </p>
        </div>

        {/* Botão Google */}
        <button className="flex items-center justify-center gap-3 w-full rounded-lg bg-white py-2 text-black shadow hover:bg-gray-300 transition cursor-pointer font-bold">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google logo"
            className="h-6 w-6"
          />
          Entrar com o Google (Em breve...)
        </button>
        <p className="text-gray-300 font-semibold">
          Ao continuar com os logins sociais você aceita os{" "}
          <span className="underline cursor-pointer">Termos de Uso</span> &{" "}
          <span className="underline cursor-pointer">Política de Privacidade</span>
        </p>

        {/* Divider */}
        <div className="flex items-center w-full gap-4">
          <span className="h-px flex-1 bg-gray-600"></span>
          <span className="text-gray-400 text-sm">OU</span>
          <span className="h-px flex-1 bg-gray-600"></span>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          {/* Nome */}
          <div className="flex flex-col gap-1">
            <label className="text-md text-white font-bold">
              Nome <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-md text-white font-bold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
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
          </div>

          {/* Confirmar Senha */}
          <div className="flex flex-col gap-1">
            <label className="text-md text-white font-bold">
              Confirmar Senha <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirme sua senha"
                required
                value={confirmSenha}
                onChange={(e) => setConfirmSenha(e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
              >
                {showConfirmPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Checkbox termos */}
          <div className="flex items-start gap-2 text-white text-sm">
            <input
              type="checkbox"
              checked={aceitaTermos}
              onChange={(e) => setAceitaTermos(e.target.checked)}
              className="mt-1 h-4 w-4 cursor-pointer accent-purple-600"
            />
            <span>
              Li e aceito os{" "}
              <a href="#" className="underline hover:text-purple-400">
                Termos de Uso
              </a>{" "}
              e a{" "}
              <a href="#" className="underline hover:text-purple-400">
                Política de Privacidade
              </a>
              .
            </span>
          </div>

          {/* Botão de envio */}
          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 py-2 cursor-pointer font-medium text-white hover:bg-purple-700 transition"
          >
            Criar Conta
          </button>

          {/* Mensagem */}
          {mensagem && (
            <p
              className={`mt-4 text-center ${mensagem.tipo === "erro" ? "text-red-500" : "text-green-500"
                } font-semibold`}
            >
              {mensagem.texto}
            </p>
          )}

          {/* Link Login */}
          <p className="text-center text-sm text-gray-400">
            Já tem uma conta?{" "}
            <a href="/auth/sign-in" className="text-purple-400 hover:underline">
              Entrar
            </a>
          </p>
        </form>
      </div>
      <div className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 h-1"></div>
      <Footer />
    </div>
  );
}
