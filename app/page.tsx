import NavBar from '@/components/Navbar'
import Accordion from '@/components/Accordion'

export default function Home() {
  return (
    <main className="">
      <NavBar/>
      <section className='px-0 py-8'>
        <Accordion/>
      </section>
    </main>
  )
}
