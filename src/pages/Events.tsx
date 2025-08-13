import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard"
import Footer from "../components/Footer";

// Imagens
import teste from '../assets/images/teste.webp'
import arenarock from '../assets/images/arenarock.webp'
import ggcon from '../assets/images/ggcon.webp'
import roupanova from '../assets/images/roupanova.webp'

export default function Events() {
  const events = [
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
    {
      date: { day: 15, month: "setembro", year: 2025 },
      title: "Festival Jazz na Praça",
      producer: "Jazz Corp",
      time: "18:30",
      location: { cidade: "Belo Horizonte", estado: "Minas Gerais" },
      image: roupanova,
      tags: ["MÚSICA", "JAZZ", "FESTIVAL"],
    },
    {
      date: { day: 21, month: "setembro", year: 2025 },
      title: "Feira de Artesanato Local",
      producer: "Cultura Viva",
      time: "09:00",
      location: { cidade: "Recife", estado: "Pernambuco" },
      image: ggcon,
      tags: ["FEIRAS", "ARTESANATO", "CULTURA"],
    },
    {
      date: { day: 30, month: "outubro", year: 2025 },
      title: "Maratona Tech 2025",
      producer: "Dev Network",
      time: "07:00",
      location: { cidade: "São Paulo", estado: "São Paulo" },
      image: teste,
      tags: ["TECNOLOGIA", "MARATONA", "INOVAÇÃO"],
    },

    // --- Novos Eventos ---
    {
      date: { day: 5, month: "novembro", year: 2025 },
      title: "Expo Café Brasil",
      producer: "Agro Eventos",
      time: "08:00",
      location: { cidade: "Campinas", estado: "São Paulo" },
      image: ggcon,
      tags: ["FEIRA", "GASTRONOMIA", "NEGÓCIOS"],
    },
    {
      date: { day: 12, month: "novembro", year: 2025 },
      title: "Rock Solid Festival",
      producer: "Dux Produções",
      time: "17:00",
      location: { cidade: "Fortaleza", estado: "Ceará" },
      image: arenarock,
      tags: ["SHOW", "FESTIVAL", "MÚSICA"],
    },
    {
      date: { day: 20, month: "dezembro", year: 2025 },
      title: "Natal Iluminado",
      producer: "Cultura Viva",
      time: "18:00",
      location: { cidade: "Gramado", estado: "Rio Grande do Sul" },
      image: roupanova,
      tags: ["NATAL", "ARTE & CULTURA", "FAMÍLIA"],
    },
    {
      date: { day: 31, month: "dezembro", year: 2025 },
      title: "Virada Tech 2025",
      producer: "Dev Network",
      time: "22:00",
      location: { cidade: "São Paulo", estado: "São Paulo" },
      image: teste,
      tags: ["TECNOLOGIA", "SHOW", "INOVAÇÃO"],
    },
    {
      date: { day: 14, month: "janeiro", year: 2026 },
      title: "Summer Beats",
      producer: "Planeta Brasil",
      time: "15:00",
      location: { cidade: "Rio de Janeiro", estado: "Rio de Janeiro" },
      image: arenarock,
      tags: ["MÚSICA", "SHOW", "VERÃO"],
    },
    {
      date: { day: 2, month: "fevereiro", year: 2026 },
      title: "Carnaval das Cores",
      producer: "LS Entretenimento",
      time: "12:00",
      location: { cidade: "Salvador", estado: "Bahia" },
      image: roupanova,
      tags: ["CARNAVAL", "FESTA", "MÚSICA"],
    },
  ];

  return (
    <div className='flex min-h-screen flex-col bg-[#1c1c28]'>
      <Navbar />
      <main className="px-10">
        <h1 className="text-white text-3xl font-bold mb-4 mt-6">Pesquisar por Eventos</h1>
        <div className="flex items-center gap-2 rounded-lg text-white bg-transparent border-2 border-gray-700 px-4 py-3 max-w-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            className="h-full w-full bg-transparent outline-none placeholder:text-text-600 text-base md:text-lg"
            placeholder="Pesquise qualquer evento..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="py-2 px-16 cursor-pointer hover:bg-gray-300 transition duration-300 rounded-md font-bold bg-white">
            Carregar mais
          </button>
        </div>

      </main>
      <div className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 h-1 mt-10"></div>
      <Footer />
    </div>
  );
}