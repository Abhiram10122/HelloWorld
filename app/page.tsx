"use client"
import Accordion from '@/components/Accordion'
import Nav from '@/components/Nav'
import Speakers from '@/components/Speakers'
import About1 from '@/components/About'
import About2 from '@/components/About2'
import { useState } from 'react'


const about_content = {
  background: "bg-white",
  title: "What is Hello World?",
  content: "A GDSC-MLRIT's initiate to introduce freshers into the world of Technology, Design, and StartUps during the timeline, scheduled over October-November on a weekly-basis.",
  picture: "/about1.jpeg",
}

const about2_content = {
  background: "bg-gray-100",
  title: "About",
  content: "The world of engineering is so big and vast, there is so much great and also kinda scary stuff, it’s a huge mountain of mess ",
  picture: "/discover.png",
}

const innovation_content = {
  background: "bg-white",
  title: "Innovate",
  content: "The world of engineering is so big and vast, there is so much great and also kinda scary stuff, it’s a huge mountain of mess ",
  picture: "/innovatee.jpg",
}

const design_content = {
  background: "bg-gray-100",
  title: "Design",
  content: "The world of engineering is so big and vast, there is so much great and also kinda scary stuff, it’s a huge mountain of mess ",
  picture: "/designn.jpg",
}

const tech_content = {
  background: "bg-white",
  title: "Technology",
  content: "The world of engineering is so big and vast, there is so much great and also kinda scary stuff, it’s a huge mountain of mess ",
  picture: "/Techkasvg.svg",
}


export default function Home() {
  const [dark, setDark] = useState(false)
  const handleTheme = () => {
    setDark(!dark)
  }

  return (
    <main className="">
      <Nav dark={dark} handleTheme={handleTheme}/>

      {/* <section className='bg-[url("/heroImage.jpeg")] bg-auto bg-center pt-10 mt-[5rem]'>
        <img src="/heroImage.jpeg" alt="" />
        pass
      </section> */}
      {/* <section className='h-auto w-full pt-20'>
        <img src="/heroImage.jpeg" alt="Hero Image"/>
      </section> */}
      <section id="Home" className={`flex min-h-[100vh] justify-center items-start flex-col pt-10 md:px-[10rem] px-10 max-md:pb-10 max-md:pt-40 ${dark ? "bg-[url(/bgGrid.jpeg)] bg-contain text-[#627EF3]":"bg-gray-100"} transition-all duration-700`}>
        <div className='flex md:flex-row flex-col justify-between'>

            <div className='flex flex-col gap-5 justify-center md:w-[50%] w-full px-5'>
              <h1 className='text-6xl font-bold font-poppins'>Hello World</h1>
              <p className='info-text text-xl font-medium'>Dive into the world of Tech, 
              Design and StartUps. Learn from the best and begin your journey!!</p>
              <br />
              <p className='text-2xl font-medium'>Ideate | Design | Code</p>
            </div>

            <div>
              <img src="/Hero.png" alt="Hello World" height={400} width={600}/>
            </div>
        </div>
        <div className='flex mt-20 px-5 gap-10 items-center '>
          <p className='text-2xl font-semibold font-montserrat max-sm:text-xl'>Sponsers <span className='max-sm:hidden'>|</span></p>
          <img src="/studentTribe.png" alt="Student Tribe" height={50} width={50} className='rounded-md'/>
          <img src="/github.png" alt="Git Hub" height={50} width={50} className='rounded-md'/>
        </div>
      </section>

      <section id="about">
        <section>
          <About1 contents={about_content} dark={dark}/>
        </section>

        <section>
          <About2 contents={about2_content} dark={dark}/>
        </section>
      </section>
      

      <section id="course">
        <section>
          <About1 contents={innovation_content}/>
        </section>

        <section>
          <About2 contents={design_content}/>
        </section>

        <section>
          <About1 contents={tech_content}/>
        </section>
      </section>
      

      <section id="speakers" className='pt-16 pb-8 bg-gray-100 flex flex-col justify-center items-center'>
        <h1 className='font-montserrat font-bold text-2xl max-sm:xl '>Meet Our Speakers</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-col-1 sm:gap-4 gap-14'>
          <Speakers name="Dinesh" pic="/profileImage.jpeg"/>
          <Speakers name="Sherlock" pic="/profileImage.jpeg"/>
          <Speakers name="Aditya" pic="/profileImage.jpeg"/>
        </div>
      </section>

      <section id="faqs" className='px-0 py-8'>
        <Accordion/>
      </section>

      <footer id="footer" className='bg-[#323232] text-white font-bold text-lg py-10 px-5 flex justify-center items-center'>
        Copyright © 2023. All rights are reserved
      </footer>
    </main>
  )
}
