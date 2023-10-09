import NavBar from '@/components/Navbar'
import Accordion from '@/components/Accordion'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Speakers from '@/components/Speakers'
import { SP } from 'next/dist/shared/lib/utils'

export default function Home() {
  return (
    <main className="">
      <Nav />
      <section className='mt-16 mb-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-col-1 sm:gap-4 gap-14'>
        <Speakers name="Dinesh" pic="/profileImage.jpeg"/>
        <Speakers name="Sherlock" pic="/profileImage.jpeg"/>
        <Speakers name="Aditya" pic="/profileImage.jpeg"/>

      </section>
      <section className='px-0 py-8'>
        <Accordion/>
      </section>
      <section className='min-h-screen'>
        pass
      </section>
      <footer id="footer" className='bg-[#323232] text-white font-bold text-lg py-10 px-5 flex justify-center items-center'>
        Copyright © 2023. All rights are reserved
      </footer>
    </main>
  )
}
