import FiltroAts from '@/components/home/filtroAts'
import Hero from '@/components/home/hero'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen  items-center justify-center ">
      <Hero />
      <FiltroAts/>
    </main>
  )
}
