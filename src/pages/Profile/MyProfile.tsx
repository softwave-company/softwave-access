import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useAuth } from "../../context/useAuth";
import { Link } from "react-router-dom";
import EditableAvatar from "../../components/EditableAvatar";

import { CalendarClock, ClockFading, UserPen } from "lucide-react";
import { useState } from "react";

export default function MyProfile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"passados" | "emBreve">("emBreve");

  return (
    <div className='flex min-h-screen flex-col bg-[#1c1c28]'>
      <Navbar />
      <main className="w-full flex-1">
        <div className="mt-6 flex flex-col justify-center">
          <EditableAvatar />
          <p className="text-white text-center font-bold text-3xl mt-4">{user?.nome}</p>
          <Link to="/profile/edit" className="flex justify-center items-center">
            <span className="text-blue-300 mt-2">Editar perfil</span>
            <UserPen className="w-4 h-4 mt-2 ml-2 text-blue-300" />
          </Link>
        </div>

        <div className="flex gap-2 mt-4 w-full max-w-sm mx-auto">
          <button
            className={`flex-1 flex items-center justify-center gap-2 font-bold py-2 rounded-lg transition duration-300 ${activeTab === "emBreve" ? "bg-purple-500 text-white" : "bg-gray-200"
              }`}
            onClick={() => setActiveTab("emBreve")}
          >
            <CalendarClock /> Em breve
          </button>
          <button
            className={`flex-1 flex items-center justify-center gap-2 font-bold py-2 rounded-lg transition duration-300 ${activeTab === "passados" ? "bg-purple-500 text-white" : "bg-gray-200"
              }`}
            onClick={() => setActiveTab("passados")}
          >
            <ClockFading /> Passados
          </button>
        </div>

        <div className="mt-8">
          {activeTab === "emBreve" && 
            <div>
              <p className="text-white text-center font-bold text-3xl">Nenhum evento encontrado</p>
              <p className="text-white text-center text-md">Procure alguns eventos pelo Access</p>
            </div>
          }
          {activeTab === "passados" && 
            <div>
              <p className="text-white text-center font-bold text-3xl">Nenhum evento encontrado</p>
              <p className="text-white text-center text-md">Vá em algum evento utilizando Access!</p>
            </div>
          }
        </div>
      </main>
      <div className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 h-1 mt-10"></div>
      <Footer />
    </div>
  );
}