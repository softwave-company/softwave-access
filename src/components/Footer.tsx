import footerBg from '../assets/images/main-background-home.jpg'
import accessIcon from '../assets/images/accessIcon.png'
import { Mail, Github, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="min-h-full pb-4" style={{ backgroundImage: `url(${footerBg})` }}>
      {/* Logo */}
      <div className="mb-6 flex justify-center items-center gap-2">
        <img src={accessIcon} alt="Access Logo" className="h-20" />
        <p className="font-bold text-xl text-white">Softwave <span className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent">Access</span></p>
      </div>

      {/* Menu de links */}
      <nav className="mb-6 flex flex-col items-center gap-4 text-sm font-semibold text-white md:flex-row md:justify-center md:gap-8">
        <a href="#" className="text-gray-300 hover:text-white">Política de Cookies</a>
        <a href="#" className="text-gray-300 hover:text-white">Termos de Uso</a>
        <a href="#" className="text-gray-300 hover:text-white">Política de Privacidade</a>
        <a href="#" className="text-gray-300 hover:text-white">Suporte</a>
      </nav>

      {/* Ícones sociais */}
      <div className="mb-6 flex justify-center gap-6 text-white">
        <a href="mailto:email@exemplo.com" aria-label="Email" className="bg-[#222238] p-3 rounded-full hover:bg-purple-600 transition">
          <Mail size={20} />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="bg-[#222238] p-3 rounded-full hover:bg-purple-600 transition">
          <Github size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="bg-[#222238] p-3 rounded-full hover:bg-purple-600 transition">
          <Instagram size={20} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="bg-[#222238] p-3 rounded-full hover:bg-purple-600 transition">
          <Facebook size={20} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs font-light text-white text-center">
        Softwave Access © Softwave 2025 Todos os direitos reservados
      </p>
    </footer>
  );
}