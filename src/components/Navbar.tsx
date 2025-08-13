import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from '../context/useAuth';
import accessIcon from "../assets/images/accessIcon.png";
import testAvatar from '../assets/teste_avatar.jpg'
import { ChevronDown, User, Edit, LogOut, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#0d0d13]">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between sm:items-stretch">
            <div className="h-10 w-10 md:hidden"></div>
            <div className="flex items-center">
              <div className="flex flex-shrink-0 items-center">
                <img src={accessIcon} alt="Softwave Access" className="block h-16 w-auto" />
              </div>
              <div className="hidden sm:ml-6 md:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `font-bold rounded-md px-3 py-2 text-sm ${isActive
                        ? "bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent"
                        : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    Início
                  </NavLink>
                  <NavLink
                    to="/events"
                    className={({ isActive }) =>
                      `font-bold rounded-md px-3 py-2 text-sm ${isActive
                        ? "bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent"
                        : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    Buscar
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `font-bold rounded-md px-3 py-2 text-sm ${isActive
                        ? "bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent"
                        : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    Sobre
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden md:flex md:flex-col">
                {user ? (
                  <div className="flex items-center gap-4">
                    <Link to="/channels" className="flex items-center gap-2 text-gray-400 transition duration-100 hover:text-white text-sm">Área do produtor <ArrowUpRight className="w-4 h-4 mb-4" /></Link>
                    <p className="text-white">|</p>
                    <div className="relative">
                      <button
                        className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition duration-300"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        <div className="flex gap-3 items-center">
                          <img src={testAvatar} alt="Avatar" className="h-10 rounded-full" />
                          <div className="flex flex-col">
                            <p className="text-gray-400 text-sm">Meu perfil</p>
                            <p className="text-white text-md">{user.nome}</p>
                          </div>
                          <ChevronDown className="text-gray-400 w-5 h-5 transition-transform duration-200" style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                        </div>
                      </button>

                      {/* Dropdown */}
                      {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-700 rounded-lg shadow-lg z-50">
                          {/* Topo do dropdown com avatar e nome */}
                          <div className="flex items-center gap-3 px-4 py-3">
                            <img src={testAvatar} alt="Avatar" className="h-10 w-10 rounded-full" />
                            <div className="flex flex-col">
                              <span className="text-black font-bold">{user.nome}</span>
                            </div>
                          </div>

                          {/* Opções */}
                          <Link
                            to="/profile"
                            className="flex items-center gap-2 px-4 py-2 text-gray-500 font-semibold text-lg hover:bg-blue-200"
                          >
                            <User className="w-4 h-4" />
                            <span>Minha Conta</span>
                          </Link>

                          <Link
                            to="/profile/edit"
                            className="flex items-center gap-2 px-4 py-2 text-gray-500 font-semibold text-lg hover:bg-blue-200"
                          >
                            <Edit className="w-4 h-4" />
                            <span>Editar Perfil</span>
                          </Link>

                          <button
                            onClick={logout}
                            className="cursor-pointer flex items-center gap-2 w-full text-left px-4 py-2 text-red-500 font-semibold text-lg hover:bg-blue-200"
                          >
                            <LogOut className="w-4 h-4" />
                            <span>Sair</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Link
                      to="/auth/sign-in"
                      className="rounded-md px-4 py-2 font-semibold bg-transparent text-white"
                    >
                      Entrar
                    </Link>
                    <Link
                      to="/auth/sign-up"
                      className="rounded-md px-4 py-2 font-semibold bg-white text-black hover:bg-gray-200"
                    >
                      Criar Conta
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
