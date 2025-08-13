import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import editProfileBg from '../../assets/images/edit-profile-bg.jpg'
import { Info, ShieldCheck } from "lucide-react";
import { useAuth } from "../../context/useAuth";

export default function ProfileEdit() {
    const { user } = useAuth();

    // estados locais para o form
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNascimento, setDataNasc] = useState("");

    useEffect(() => {
        if (user) {
            setEmail(user.email || "");
            setCpf(user.cpf || "");
            setNome(user.nome || "");
            setTelefone(user.telefone || "");
            setDataNasc(user.data_nascimento || "");
        }
    }, [user]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aqui você chamaria sua função de update do user
        console.log({ email, cpf, telefone, dataNascimento });
    }

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
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
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
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
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

                <form className="mt-6 flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label className="font-semibold">Senha antiga <span className="text-red-500">*</span></label>
                        <div className="flex w-full items-center gap-1 rounded-md border bg-[#1c1c2880] bg-opacity-50 transition duration-200 focus-within:border-white focus-within:border-opacity-60 border-[#2e2b47] max-h-10">
                            <input type="password" placeholder="Digite sua senha antiga..." className="text-text-200 flex flex-1 bg-transparent p-2 font-normal placeholder-text-500 placeholder:italic focus:outline-none" />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold">Senha nova <span className="text-red-500">*</span></label>
                        <div className="flex w-full items-center gap-1 rounded-md border bg-[#1c1c2880] bg-opacity-50 transition duration-200 focus-within:border-white focus-within:border-opacity-60 border-[#2e2b47] max-h-10">
                            <input type="password" placeholder="Digite sua senha nova..." className="text-text-200 flex flex-1 bg-transparent p-2 font-normal placeholder-text-500 placeholder:italic focus:outline-none" />
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
