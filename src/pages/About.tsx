import Navbar from "../components/Navbar"
import FeatureCard from "../components/FeaturesCard"

import aboutMainSlider from '../assets/images/about-main-slider.webp'
import purpleShadow from '../assets/images/purple-shadow-about.webp'
import header from '../assets/images/header-about.webp'
import marketingIcon from '../assets/images/marketing-icon.webp'
import newEnvIcon from '../assets/images/new-env-icon.webp'
import techIcon from '../assets/images/tech-icon.webp'
import bgLines from '../assets/images/background-shadow-about.png'
import bgGrain from '../assets/images/main-background-home.jpg'
import ruleExample from '../assets/images/rule-example.webp'
import cardsExample from '../assets/images/cards-example.webp'
import accessIcon from '../assets/images/accessIcon.png'
import purpleAngel from '../assets/images/purple-angel.webp'

import { CodeXml, WalletCards, Ticket, Camera, Percent, HandCoins, Mail, Github, Instagram, Facebook } from "lucide-react";

type IconKey = 'codeXml' | 'wallet' | 'ticket' | 'scan' | 'securitySale' | 'money';

export default function About() {
  const features = [
    {
      title: 'Venda mais',
      subtitle: 'Marketing',
      description: 'Potencialize as suas ações de marketing automatizando processos na venda de ingressos',
      icon: marketingIcon,
    },
    {
      title: 'Tech',
      subtitle: 'Atendimento',
      description: 'Prioridade no atendimento para personalização de novas funcionalidades e suporte 24/7',
      icon: techIcon,
    },
    {
      title: 'Ambiente',
      subtitle: 'Novas Soluções',
      description: 'Uma empresa focada em desenvolvimento para o cliente. Sempre buscando novas soluções',
      icon: newEnvIcon,
    }
  ]

  const icons = {
    codeXml: <CodeXml className="w-6 h-6 text-[#ab71f4]" />,
    wallet: <WalletCards className="w-6 h-6 text-[#ab71f4]" />,
    ticket: <Ticket className="w-6 h-6 text-[#ab71f4]" />,
    scan: <Camera className="w-6 h-6 text-[#ab71f4]" />,
    securitySale: <Percent className="w-6 h-6 text-[#ab71f4]" />,
    money: <HandCoins className="w-6 h-6 text-[#ab71f4]" />,
  };

  const featuresList: { title: string; desc: string; icon: IconKey; soon?: boolean }[] = [
    { title: 'LOTE', desc: 'Virada de lote automática', icon: 'ticket' },
    { title: 'CARTEIRAS DIGITAS', desc: 'Envio automático para carteiras digitais', icon: 'wallet' },
    { title: 'SCAN', desc: 'Sistema de validação de ingressos', icon: 'scan' },
    { title: 'ADIANTAMENTO', desc: 'Personalizado por evento', icon: 'money' },
    { title: 'INTELIGÊNCIA ARTIFICIAL', desc: 'Integração com IA', icon: 'codeXml', soon: true },
    { title: 'REVENDA', desc: 'Revenda os ingressos com segurança', icon: 'securitySale', soon: true },
  ];

  return (
    <div className='flex min-h-screen flex-col bg-[#1c1c28] relative'>
      <Navbar />
      <main className='bg-[#1c1c28] text-white flex flex-col flex-1 gap-14 md:gap-12 relative'>
        <div className="absolute inset-0 pointer-events-none -z-10">
          <img src={header} alt="Fundo" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl text-center z-10 mx-auto mt-12 px-4 md:mt-16">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Tecnologia em Gestão <br />
            & Controle de <span className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent">Eventos</span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-base md:text-lg">
            Se diferencie no mercado de eventos. Tenha o melhor atendimento e atenda o seu modelo de evento com a nossa tecnologia.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 font-bold text-purple-900 hover:text-white py-3 px-6 rounded-lg transition">
            Entrar em Contato
          </button>
        </div>
        <div className="relative mt-10 md:mt-16 max-w-3xl mx-auto w-full z-10 px-4">
          <img
            src={aboutMainSlider}
            alt="Tela do sistema"
            className="w-full rounded-xl shadow-lg relative z-20"
          />

          {/* Sombra roxa - posicionada atrás */}
          <img
            src={purpleShadow}
            alt="Sombra Roxa"
            className="absolute -top-8 left-20 md:left-80 w-3/4 md:w-full h-auto -z-10 opacity-70"
            style={{ transform: 'scale(1.05)' }}
          />
        </div>

        {/* Inovação */}
        <section
          className="relative mt-16 md:mt-20 px-4 md:px-20 py-10 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${bgLines})` }}
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            <span className="text-white font-extrabold">Inovação</span>{" "}
            <span className="text-gray-400 text-sm md:text-base">//</span>
          </h2>
          <p className="text-gray-400 font-semibold text-base md:text-lg max-w-3xl">
            União de inovação e tecnologia no mercado de eventos. Não tenha
            limitações para as suas criações. <br /> Automatize processos e obtenha
            resultados especiais.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(({ title, subtitle, description, icon }) => (
              <FeatureCard
                key={title}
                title={title}
                subtitle={subtitle}
                description={description}
                icon={icon}
              />
            ))}
          </div>
        </section>

        <section className="relative text-white py-20 px-4 md:px-20 space-y-12 md:space-y-24" style={{ backgroundImage: `url(${bgGrain})` }}>
          {/* Sombra no topo */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-0"></div>

          <div className="relative z-10 pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Lado esquerdo */}
            <div>
              <img src={ruleExample} alt="Regras" className="w-full h-auto rounded-lg" />
            </div>
            {/* Lado direito */}
            <div>
              <span className="text-yellow-500 font-extrabold uppercase text-lg md:text-xl">O SEU EVENTO</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Customização</h2>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                Não adapte o seu evento para a plataforma. A gente se adapta para a sua necessidade.
                Liberdade para customização no processo de venda.
              </p>
            </div>
          </div>

          <div className="relative z-10 pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Lado esquerdo */}
            <div>
              <span className="text-purple-500 font-extrabold uppercase text-lg md:text-xl">VENDAS</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Plataforma Completa</h2>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                Todas as ferramentas para criação e venda dos ingressos do seu evento. <br />
                Fluxo Completo da criação ao recebimento.
              </p>
            </div>
            {/* Lado direito */}
            <div>
              <img src={cardsExample} alt="Cards" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </section>

        <section className="text-white py-20 px-4 md:px-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">O <span className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent">Access</span> <span className="text-gray-400">//</span></h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Todas as nossas ferramentas atuais e futuras planejadas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {featuresList.map((item, i) => (
              <div key={i} className="relative bg-black rounded-2xl p-6 flex items-center gap-4 transition duration-300 hover:-translate-y-2 hover:shadow-lg">
                {item.soon && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-50 bg-purple-700 text-xs px-3 py-1 rounded-full uppercase font-extrabold text-purple-300">
                    Em breve
                  </span>
                )}
                <div className="bg-gray-900 p-3 rounded-full text-lg">{icons[item.icon]}</div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl">{item.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden px-4 md:px-0">
          <img src={purpleAngel} alt="Anjos" className="absolute bottom-0 left-0 w-40 md:w-auto" />

          <div className="relative z-10 max-w-xl ml-auto mr-0 md:mr-20 text-white text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold">Aproveite os benefícios</h2>
            <p className="mt-4 text-gray-300 text-base md:text-lg">
              O Access está formando a sua estrutura. Estamos oferecendo parcerias com descontos e implementações gratuitas. Além de termos um longo roadmap e foco nas dores do usuário.
            </p>
            <button className="mt-6 px-6 py-3 bg-gray-800 rounded-lg font-bold transition duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              Entrar em Contato
            </button>
          </div>
        </section>
      </main>

      <div className="w-full h-1 bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600"></div>

      <footer className="min-h-full pb-4 px-4 md:px-20" style={{ backgroundImage: `url(${bgGrain})` }}>
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
    </div>
  )
}
