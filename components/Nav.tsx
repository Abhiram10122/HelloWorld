"use client"
import { useState } from "react";
import { MobileNav } from "@material-tailwind/react";
import Link from "next/link";

const Nav = () => {
  const [opened, setOpened] = useState(false)
  return (
    <main className="">
        <nav className="max-md:fixed right-0 left-0 top-0 z-[1000] flex justify-between py-10 px-20 pointer-events-auto bg-black max-sm:px-5 max-sm:py-5">
            <h1 className="text-3xl font-[700] font-montserrat from-red-500 via-violet-600 to-green-600 bg-gradient-to-r bg-clip-text text-transparent">
                <a href="/">HelloWorld</a>
            </h1>

            <div className="flex sm:hidden">
                <button
                    id="hamburger"
                    className="p-2 text-gray-700 rounded-md outline-none"
                    onClick={() => setOpened(!opened)}
                >
                    {opened ? (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                            />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}                                
                </button>
            </div>
            <div className={`absolute ${opened ? "block": "hidden"} flex flex-col bg-black text-white right-0 top-full w-full justify-center items-center gap-3 pb-2 text-lg font-bold`}>
                <a href="#Home" className="cursor-pointer">Home</a>
                <a href="#about" className="cursor-pointer">About</a>
                <a href="#speakers" className="cursor-pointer">Speakers</a>
                <a href="#faqs" className="cursor-pointer">FAQs</a>
            </div>

            <div className="md:flex hidden gap-10 text-lg font-bold text-white">
                <a href="#Home" className="cursor-pointer">Home</a>
                <a href="#about" className="cursor-pointer">About</a>
                <a href="#speakers" className="cursor-pointer">Speakers</a>
                <a href="#faqs" className="cursor-pointer">FAQs</a>
            </div>
        </nav>
    </main>
  )
}

export default Nav