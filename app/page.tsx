import NavBar from '@/components/Navbar'
import Accordion from '@/components/Accordion'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Speakers from '@/components/Speakers'

export default function Home() {
  return (
    <main className="">
      <Nav />

      {/* <section className='bg-[url("/heroImage.jpeg")] bg-auto bg-center pt-10 mt-[5rem]'>
        <img src="/heroImage.jpeg" alt="" />
        pass
      </section> */}
      {/* <section className='h-auto w-full pt-20'>
        <img src="/heroImage.jpeg" alt="Hero Image"/>
      </section> */}
      <section className='flex min-h-[100vh] justify-center items-start flex-col pt-10 bg-white-400 md:px-20 md:mx-20 px-10'>
        <div className='flex md:flex-row flex-col justify-between'>

            <div className='flex flex-col gap-5 justify-center md:w-[50%] w-full px-5'>
              <h1 className='text-6xl font-bold font-poppins'>Hello World</h1>
              <p className='info-text text-xl font-medium'>Dive into the world of Tech, 
              Design and StartUps. Learn from the best and begin your journey!!</p>
              <br />
              <p className='text-2xl font-medium'>Ideate | Design | Code</p>
            </div>

            <div>
              <img src="/HeroImage2.png" alt="Hello World" height={400} width={600}/>
            </div>
        </div>
        <div className='flex mt-20 px-5 gap-10 items-center '>
          <p className='text-2xl font-semibold font-montserrat'>Sponsers | </p>
          <img src="/studentTribe.png" alt="Student Tribe" height={50} width={50} className='rounded-md'/>
          <img src="/github.png" alt="Git Hub" height={50} width={50} className='rounded-md'/>
        </div>
      </section>

      <section className='pt-16 pb-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-col-1 sm:gap-4 gap-14 bg-[#d0d0d0]'>
        <Speakers name="Dinesh" pic="/profileImage.jpeg"/>
        <Speakers name="Sherlock" pic="/profileImage.jpeg"/>
        <Speakers name="Aditya" pic="/profileImage.jpeg"/>
      </section>

      <section className='px-0 py-8'>
        <Accordion/>
      </section>

      <footer id="footer" className='bg-[#323232] text-white font-bold text-lg py-10 px-5 flex justify-center items-center'>
        Copyright © 2023. All rights are reserved
      </footer>
    </main>
  )
}
