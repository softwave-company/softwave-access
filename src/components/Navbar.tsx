import { Link, NavLink } from 'react-router-dom'
import accessIcon from '../assets/images/accessIcon.png'

export default function Navbar() {
  return (
    <nav className="bg-[#0d0d13]">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between sm:items-stretch">
            <div className="h-10 w-10 md:hidden"></div>
            <div className="flex items-center">
              <div className="flex flex-shrink-0 items-center">
                <img
                  src={accessIcon}
                  alt="Softwave Access"
                  className="block h-16 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 md:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `font-bold rounded-md px-3 py-2 text-sm ${isActive
                        ? 'bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent'
                        : 'text-gray-300 hover:text-white'
                      }`
                    }
                  >
                    Início
                  </NavLink>
                  <NavLink
                    to="/events"
                    className={({ isActive }) =>
                      `font-bold rounded-md px-3 py-2 text-sm ${isActive
                        ? 'bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent'
                        : 'text-gray-300 hover:text-white'
                      }`
                    }
                  >
                    Buscar
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `font-bold rounded-md px-3 py-2 text-sm ${isActive
                        ? 'bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent'
                        : 'text-gray-300 hover:text-white'
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
                <div className="flex gap-2">
                  <Link
                    to="/auth/sign-in"
                    className="flex items-center justify-center rounded-md px-4 py-2 font-semibold transition duration-200 bg-transparent text-white hover:cursor-pointer"
                  >
                    Entrar
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center justify-center rounded-md px-4 py-2 font-semibold transition duration-200 hover:bg-[#e4e2e2] text-text-900 bg-white hover:cursor-pointer"
                  >
                    Criar Conta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
