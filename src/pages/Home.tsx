import Navbar from "../components/Navbar"
import FeaturedEvent from "../components/FeaturedEvent"
import EventCard from "../components/EventCard"

import { Mail, Github, Instagram, Facebook } from 'lucide-react';

// Imagens
import teste from '../assets/images/teste.webp'
import arenarock from '../assets/images/arenarock.webp'
import ggcon from '../assets/images/ggcon.webp'
import roupanova from '../assets/images/roupanova.webp'
import footerBg from '../assets/images/main-background-home.jpg'
import accessIcon from '../assets/images/accessIcon.png'

export default function Home() {
    const eventOfTheDay = {
        image: teste,
        title: 'Guy J @ Ópera de Arame',
        location: 'Curitiba',
        venue: 'Planeta Brasil',
        date: '06/09/25',
    }

    const popularEvents = [
        {
            date: { day: 8, month: "agosto", year: 2025 },
            title: "Simplesmente Roupa Nova em Teresina",
            producer: "LS Entretenimento",
            time: "20:00",
            location: { cidade: "Teresina", estado: "Piauí" },
            image: roupanova,
            tags: ["SHOW"],
        },
        {
            date: { day: 9, month: "agosto", year: 2025 },
            title: "GGCON 2025",
            producer: "Pé de Música Produções",
            time: "10:00",
            location: { cidade: "Natal", estado: "Rio Grande do Norte" },
            image: ggcon,
            tags: ["ARTE & CULTURA", "FEIRAS", "GAMES"],
        },
        {
            date: { day: 9, month: "agosto", year: 2025 },
            title: "Arena Rock",
            producer: "Dux Produções",
            time: "19:00",
            location: { cidade: "São Luís", estado: "Maranhão" },
            image: arenarock,
            tags: ["SHOW", "ARTE & CULTURA", "FESTIVAL"],
        },

        // Mais 3 eventos novos:
        {
            date: { day: 15, month: "setembro", year: 2025 },
            title: "Festival Jazz na Praça",
            producer: "Jazz Corp",
            time: "18:30",
            location: { cidade: "Belo Horizonte", estado: "Minas Gerais" },
            image: roupanova, // substitui pela imagem real
            tags: ["MÚSICA", "JAZZ", "FESTIVAL"],
        },
        {
            date: { day: 21, month: "setembro", year: 2025 },
            title: "Feira de Artesanato Local",
            producer: "Cultura Viva",
            time: "09:00",
            location: { cidade: "Recife", estado: "Pernambuco" },
            image: ggcon, // substitui pela imagem real
            tags: ["FEIRAS", "ARTESANATO", "CULTURA"],
        },
        {
            date: { day: 30, month: "outubro", year: 2025 },
            title: "Maratona Tech 2025",
            producer: "Dev Network",
            time: "07:00",
            location: { cidade: "São Paulo", estado: "São Paulo" },
            image: teste, // substitui pela imagem real
            tags: ["TECNOLOGIA", "MARATONA", "INOVAÇÃO"],
        },
    ];


    return (
        <div className='flex min-h-screen flex-col bg-[#1c1c28]'>
            <Navbar />
            <main className='bg-[#1c1c28] flex flex-1'>
                <div className="flex flex-col flex-1 gap-14 md:gap-12">
                    <div className="container mx-auto flex flex-col gap-10 px-3 pt-4 md:flex-row md:px-0 md:pt-20 xl:gap-40">
                        <FeaturedEvent
                            image={eventOfTheDay.image}
                            title={eventOfTheDay.title}
                            location={eventOfTheDay.location}
                            venue={eventOfTheDay.venue}
                            date={eventOfTheDay.date}
                        />
                        <div className="flex flex-1 flex-col gap-4 md:self-center">
                            <div className="flex flex-col text-4-xl font-medium xl:gap-2 xl:text-5xl">
                                <p className="text-white">Suas experiências</p>
                                <p className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent leading-16">em um só lugar?</p>
                                <p className="text-white">É na Softwave Access.</p>
                            </div>
                            <main className="relative flex w-full flex-col gap-2">
                                <div className="flex h-10 items-center gap-2 rounded-lg bg-white px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-6 w-6 text-custom-400"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>
                                    <input className="h-full w-full bg-transparent outline-none placeholder:text-text-600" placeholder="Pesquise qualquer evento..."></input>
                                </div>
                            </main>
                        </div>
                    </div>

                    {/* Populares */}
                    <section className="container mx-auto px-3 md:px-0">
                        <h2 className="text-2xl font-bold text-white mb-6">Populares</h2>
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {popularEvents.map((event, index) => (
                                <EventCard key={index} {...event} />
                            ))}
                        </div>
                    </section>

                    <a className="bg-purple-400 w-[20%] text-center rounded-lg mx-auto py-2 font-bold hover:bg-purple-500 transition-all duration-100 cursor-pointer">Ver todos os eventos</a>

                    <div className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 h-2"></div>
                </div>
            </main>

            <footer className="min-h-full pb-4" style={{ backgroundImage: `url(${footerBg})` }}>
                {/* Logo */}
                <div className="mb-6 flex justify-center items-center gap-2">
                    <img src={accessIcon} alt="Access Logo" className="h-20" />
                    <p className="font-bold text-xl text-white">Softwave <span className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent">Access</span></p>
                </div>

                {/* Menu de links */}
                <nav className="mb-6 flex justify-center gap-8 text-sm font-semibold text-white">
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
