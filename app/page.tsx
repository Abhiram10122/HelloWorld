"use client"
import Accordion from '@/components/Accordion'
import Nav from '@/components/Nav'
import About1 from '@/components/About'
import About2 from '@/components/About2'
import Card from "@/components/SpeakerCard"
import { useState } from 'react'


const about_content = {
  background: "bg-white",
  title: "About Hello World",
  content: "The session is tailored to introduce students to the exciting world of Startups, Design, and Technology, providing firsthand exploration  through real-life experiences of field-experts",
  picture: "/about1.jpeg",
}

const about2_content = {
  background: "bg-gray-100",
  title: "Igniting Innovation",
  content: "This session is strategically crafted with the goal of inspiring students to not only discover their passion but also initiate their transformative journey into the world of innovation.",
  picture: "/discover.png",
}

const innovation_content = {
  background: "bg-white",
  title: "StartUp",
  content: "Explore the startup realm with 'Introduction to Startups and Entrepreneurship!' Covering the life cycle, market research, pitching, and idea generation, this session is your key to unlocking the secrets of entrepreneurial success.",
  picture: "/innovatee.jpg",
}

const design_content = {
  background: "bg-gray-100",
  title: "Design",
  content: "Dive into the world of design and grasp its significance. Explore Graphic Design and UI/UX realms, gaining insights and life lessons through design—an enriching journey beyond visuals.",
  picture: "/designn.jpg",
}

const tech_content = {
  background: "bg-white",
  title: "Tech",
  content: "Explore Computer Science and Engineering, including Software Development, Chat GPT & Generative AI. Dive into Networking, Cloud, and Cyber Security, and embrace the collaborative spirit of Open Source & GitHub. Ready to navigate the tech landscape?",
  picture: "/Techkasvg.svg",
}


export default function Home() {
    const [dark, setDark] = useState(false)
    const handleTheme = () => {
      setDark(!dark)
    }

    return (
        <main>
            {/* NAVBAR */}
            <Nav dark={dark} handleTheme={handleTheme}/>

            {/* Hero Section */}
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
                    {/* <img src="/github.png" alt="Git Hub" height={50} width={50} className='rounded-md'/> */}
                </div>

            </section>

            {/* About Section */}
            <section id="about">

                <section>
                    <About1 contents={about_content} dark={dark}/>
                </section>

                <section>
                    <About2 contents={about2_content} dark={dark}/>
                </section>

            </section>
            


            {/* Course Details */}
            <section id="course">

                <section>
                    <About1 contents={innovation_content} dark={dark}/>
                </section>

                <section>
                    <About2 contents={design_content} dark={dark}/>
                </section>

                <section>
                    <About1 contents={tech_content} dark={dark}/>
                </section>

            </section>



            {/* Speakers Section */}
            <div id= "speakers"className={`flex flex-col justify-center min-h-screen ${dark ? "bg-[url(/bgGrid.jpeg)] bg-contain text-[#627EF3]":"bg-gray-100"}`}>

                <div className='my-4'>
                    <h1 className="text-4xl font-sans text-center font-semibold">Our Speakers</h1>
                </div>

                <div className="flex pb-5 px-5 flex-wrap items-center justify-evenly gap-8 min-h-[80vh] max-md:pt-14 max-md:pb-8 md:px-[8rem]">
                    <Card name={"Afnan Abdul Vasay"} info={"Github Campus Expert"} 
                        source={"/profileImage.jpeg"} dark={dark}/>
                    <Card name={"Dinesh Nalam"} info={"Lead-GDSC Mlrit"} dark={dark}
                        source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBp5Jh1FS7gjMnHJhhV_QDcZvq6Gqkorglw&usqp=CAU"}/>
                    <Card name={"Sri Nikhil"} info={"Creatives Lead"} dark={dark}
                        source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBp5Jh1FS7gjMnHJhhV_QDcZvq6Gqkorglw&usqp=CAU"}/>
                    <Card name={"Adithya Vardhan"} info={"Technical Lead"} dark={dark}
                        source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBp5Jh1FS7gjMnHJhhV_QDcZvq6Gqkorglw&usqp=CAU"}/>
                </div>

            </div>
            


            {/* FAQ's Section */}
            <section id="faqs">
                <Accordion dark={dark}/>
            </section>



            {/* Footer */}
            <footer id="footer" className='bg-[#323232] text-white font-bold text-lg py-10 px-5 flex justify-center items-center'>
                Copyright © 2023. All rights are reserved
            </footer>
        </main>
    )
}
