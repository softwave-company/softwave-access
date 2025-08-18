import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { toast } from "react-toastify";

import editProfileBg from '../../assets/images/edit-profile-bg.jpg'
import { Info, ShieldCheck } from "lucide-react";
import { useAuth } from "../../context/useAuth";

export default function ProfileEdit() {
    const { user } = useAuth();

    // estados locais para o form
    const [nome, setNome] = useState("");
    const [id, setId] = useState(0);
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNascimento, setDataNasc] = useState("");

    const [senhaNova, setSenhaNova] = useState("");
    const [senhaAntiga, setSenhaAntiga] = useState("");

    function formatarCPF(valor: string) {
        const apenasNumeros = valor.replace(/\D/g, ""); // tira tudo que não é número
        if (apenasNumeros.length <= 3) return apenasNumeros;
        if (apenasNumeros.length <= 6) return apenasNumeros.replace(/(\d{3})(\d+)/, "$1.$2");
        if (apenasNumeros.length <= 9) return apenasNumeros.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
        return apenasNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
    }

    function formatarTelefone(valor: string) {
        const apenasNumeros = valor.replace(/\D/g, ""); // tira tudo que não é número

        if (apenasNumeros.length <= 2) return `(${apenasNumeros}`;
        if (apenasNumeros.length <= 6) return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2)}`;
        if (apenasNumeros.length <= 10)
            return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 6)}-${apenasNumeros.slice(6)}`;

        // números com 11 dígitos
        return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7, 11)}`;
    }



    useEffect(() => {
        if (user) {
            setEmail(user.email || "");
            setCpf(user.cpf || "");
            setNome(user.nome || "");
            setTelefone(user.telefone || "");
            setDataNasc(user.data_nascimento || "");
            setId(user.id || 0);
        }
    }, [user]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch("/php/userEdit.php", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                    nome,
                    email,
                    cpf,
                    telefone,
                    data_nascimento: dataNascimento,
                }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Erro ao atualizar perfil");

            toast.success("Perfil atualizado com sucesso!");
        } catch (err: any) {
            toast.error(err.message);
        }
    };


    const handlePasswordUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!senhaAntiga || !senhaNova) {
            toast.warning("Preencha a senha antiga e a nova!");
            return;
        }

        try {
            const res = await fetch("/php/auth.php", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id,
                    senha_antiga: senhaAntiga,
                    senha_nova: senhaNova,
                    action: "passwordUpdate"
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Erro ao atualizar a senha");

            toast.success("Senha atualizada com sucesso!");
            setSenhaAntiga("");
            setSenhaNova("");
        } catch (err: any) {
            toast.error(err.message);
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-[#1c1c28]">
            <Navbar />
            <img src={editProfileBg} alt="Bg" className="w-full" />
            <div className="mx-auto flex flex-col items-center gap-6 p-10 w-full max-w-2xl -mt-48">
                <div className="flex flex-col items-center gap-2 mb-14">
                    <p className="font-bold text-5xl text-white">Editar Perfil</p>
                    <p className="text-white font-semibold">Altere as informações da sua conta</p>
                </div>
            </div>

            <div className="w-2xl mx-auto p-10 bg-[#0d0d13] rounded-lg text-white shadow-md">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Info /> Minhas informações
                </h2>
                <p className="text-gray-300">Informações Pessoais</p>

                <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label className="font-semibold">Nome <span className="text-red-500">*</span></label>
                        <div className="flex w-full items-center gap-1 rounded-md border bg-[#1c1c28] bg-opacity-50 transition duration-200 focus-within:border-white focus-within:border-opacity-60 border-[#2e2b47] max-h-10">
                            <input
                                type="text"
                                placeholder="Digite seu nome..."
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="text-text-200 flex-1 bg-transparent p-2 font-normal placeholder:text-text-500 placeholder:italic focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold">E-mail <span className="text-red-500">*</span></label>
                        <div className="flex w-full items-center gap-1 rounded-md border bg-[#1c1c28] bg-opacity-50 transition duration-200 focus-within:border-white focus-within:border-opacity-60 border-[#2e2b47] max-h-10">
                            <input
                                type="email"
                                placeholder="Digite seu email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="text-text-200 flex-1 bg-transparent p-2 font-normal placeholder:text-text-500 placeholder:italic focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold">CPF <span className="text-red-500">*</span></label>
                        <div className="flex w-full items-center gap-1 rounded-md border bg-[#1c1c28] bg-opacity-50 transition duration-200 focus-within:border-white focus-within:border-opacity-60 border-[#2e2b47] max-h-10">
                            <input
                                type="text"
                                placeholder="Digite o CPF..."
                                value={formatarCPF(cpf)}
                                onChange={(e) => setCpf(e.target.value.replace(/\D/g, ""))}
                                className="text-text-200 flex-1 bg-transparent p-2 font-normal placeholder:text-text-500 placeholder:italic focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold">Telefone <span className="text-red-500">*</span></label>
                        <div className="flex w-full items-center gap-1 rounded-md border bg-[#1c1c28] bg-opacity-50 transition duration-200 focus-within:border-white focus-within:border-opacity-60 border-[#2e2b47] max-h-10">
                            <div className="w-full flex items-center">
                                <div className="flex items-center border-r border-gray-500 bg-transparent w-10 h-full justify-center text-xl">
                                    🇧🇷
                                </div>

                                <input
                                    type="tel"
                                    placeholder="Digite o telefone..."
                                    value={formatarTelefone(telefone)}
                                    onChange={(e) => setTelefone(e.target.value.replace(/\D/g, ""))}
                                    className="text-text-200 flex-1 bg-transparent p-2 font-normal placeholder:text-text-500 placeholder:italic focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold">Data de nascimento <span className="text-red-500">*</span></label>
                        <div className="flex w-full items-center gap-1 rounded-md border bg-[#1c1c28] bg-opacity-50 transition duration-200 focus-within:border-white focus-within:border-opacity-60 border-[#2e2b47] max-h-10">
                            <input
                                type="date"
                                value={dataNascimento}
                                onChange={(e) => setDataNasc(e.target.value)}
                                className="text-text-200 flex-1 bg-transparent p-2 font-normal placeholder:text-text-500 placeholder:italic focus:outline-none"
                            />
                        </div>
                    </div>

                    <button className="w-full bg-purple-600 hover:bg-purple-900 transition duration-200 cursor-pointer rounded-md text-black font-bold py-3">
                        Salvar
                    </button>
                </form>
            </div>

            <div className="w-2xl mx-auto p-10 bg-[#0d0d13] rounded-lg text-white shadow-md mt-10 mb-10">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span><ShieldCheck /></span> Segurança
                </h2>
                <p className="text-gray-300">Alterar a senha</p>

                <form onSubmit={handlePasswordUpdate} className="mt-6 flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label className="font-semibold">Senha antiga <span className="text-red-500">*</span></label>
                        <div className="flex w-full items-center gap-1 rounded-md border bg-[#1c1c2880] bg-opacity-50 transition duration-200 focus-within:border-white focus-within:border-opacity-60 border-[#2e2b47] max-h-10">
                            <input
                                type="password"
                                placeholder="Digite sua senha antiga..."
                                value={senhaAntiga}
                                onChange={(e) => setSenhaAntiga(e.target.value)}
                                className="text-text-200 flex flex-1 bg-transparent p-2 font-normal placeholder-text-500 placeholder:italic focus:outline-none" />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold">Senha nova <span className="text-red-500">*</span></label>
                        <div className="flex w-full items-center gap-1 rounded-md border bg-[#1c1c2880] bg-opacity-50 transition duration-200 focus-within:border-white focus-within:border-opacity-60 border-[#2e2b47] max-h-10">
                            <input
                                type="password"
                                placeholder="Digite sua senha nova..."
                                value={senhaNova}
                                onChange={(e) => setSenhaNova(e.target.value)}
                                className="text-text-200 flex flex-1 bg-transparent p-2 font-normal placeholder-text-500 placeholder:italic focus:outline-none" />
                        </div>
                    </div>

                    <button className="w-full bg-gray-200 hover:bg-gray-400 transition duration-200 cursor-pointer rounded-md text-black font-bold py-3">Salvar</button>
                </form>
            </div>
            <div className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 h-1"></div>
            <Footer />
        </div>
    );
}
