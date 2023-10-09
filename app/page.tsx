import NavBar from '@/components/Navbar'
import Accordion from '@/components/Accordion'
import Image from 'next/image'
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <main className="">
      <Nav />
      <section>
        <div className="flex flex-col min-h-[50vh]">
            <div className="flex justify-center items-center max-sm:flex-col px-10 py-20">
                <div className='sm:w-[50%] flex justify-center py-5'>
                    <Image src="/profileImage.jpeg" alt="profile" width={250} height={250} className='rounded-[2rem]'/>
                </div>
                <div className='sm:w-[50%]'>
                    <p className='info-text'>
                        This is Dinesh. He is the coolest guy in existense, why !??... Did you 
                        look at his hair? Bro can rizz any one in our college.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center max-sm:flex-col px-10 py-25">
                sherlock
            </div>
            <div className="flex justify-center items-center max-sm:flex-col px-10 py-25">
                aditya
            </div>
        </div>
    </section>
      <section className='px-0 py-8'>
        <Accordion/>
      </section>
      <section className='min-h-screen'>
        pass
      </section>
    </main>
  )
}
