import Navbar from "../components/Navbar"
import FeaturedEvent from "../components/FeaturedEvent"
import teste from '../assets/images/teste.webp'

export default function Home() {
    const eventOfTheDay = {
        image: teste,
        title: 'Guy J @ Ópera de Arame',
        location: 'Curitiba',
        venue: 'Planeta Brasil',
        date: '06/09/25',
    }

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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6 text-custom-400"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>
                                    <input className="h-full w-full bg-transparent outline-none placeholder:text-text-600" placeholder="Pesquise qualquer evento..."></input>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
