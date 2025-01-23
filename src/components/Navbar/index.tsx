"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { IoChevronDown } from "react-icons/io5"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Farmers Market", href: "/farmers-market" },
        { name: "Producers", href: "/producers" },
        { name: "Home Cooks", href: "/home-cooks" },
        { name: "Directory", href: "/directory" },
    ]

    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/logo.png"
                                alt="Cookrace Logo"
                                width={120}
                                height={40}
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center justify-center flex-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`px-3 py-2 text-sm font-medium ${item.name === "Home" ? "text-green-600" : "text-black hover:text-green-600"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center">
                        <button className="ml-8 px-4 py-1.5 text-sm font-medium text-black hover:text-green-600 flex items-center gap-1 border border-gray-300 rounded-full">Sign up <IoChevronDown className="mt-1" /> </button>
                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                        <button className="px-4 py-2 text-sm font-medium text-black hover:text-green-600 flex items-center gap-1 border border-gray-300 rounded-full">Sign up <IoChevronDown className="mt-1" /></button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${item.name === "Home"
                                ? "text-green-600 bg-green-50"
                                : "text-black hover:text-green-600 hover:bg-green-50"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar

