import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col bg-[#1c1c28]'>
        <Navbar />
        <main className='bg-[#1c1c28] flex flex-1'>
            {/* main content here */}
        </main>
    </div>
)
}
