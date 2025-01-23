"use client"

import { useState } from "react"
import Image from "next/image"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

interface Testimonial {
    id: number
    quote: string
    author: string
    role: string
    image: string
    avatar: string
}

export default function Reviews() {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            quote:
                "Ordering from Culineer is always a breeze. Their website is user-friendly, and my purchases arrive quickly!",
            author: "Ryan Ekstrom Bothman",
            role: "Farmer",
            image: "/review-1.png",
            avatar: "/mission.png",
        },
        {
            id: 2,
            quote:
                "Ordering from Culineer is always a breeze. Their website is user-friendly, and my purchases arrive quickly!",
            author: "Marley Franci",
            role: "Producer",
            image: "/review-1.png",
            avatar: "/mission.png",
        },
        {
            id: 3,
            quote:
                "Ordering from Culineer is always a breeze. Their website is user-friendly, and my purchases arrive quickly!",
            author: "Anika Skythmus",
            role: "Consumer",
            image: "/review-1.png",
            avatar: "/mission.png",
        },
        {
            id: 4,
            quote:
                "Ordering from Culineer is always a breeze. Their website is user-friendly, and my purchases arrive quickly!",
            author: "Anika Skythmus",
            role: "Consumer",
            image: "/review-1.png",
            avatar: "/mission.png",
        },
        {
            id: 5,
            quote:
                "Ordering from Culineer is always a breeze. Their website is user-friendly, and my purchases arrive quickly!",
            author: "Anika Skythmus",
            role: "Consumer",
            image: "/review-1.png",
            avatar: "/mission.png",
        },
        {
            id: 6,
            quote:
                "Ordering from Culineer is always a breeze. Their website is user-friendly, and my purchases arrive quickly!",
            author: "Anika Skythmus",
            role: "Consumer",
            image: "/review-1.png",
            avatar: "/mission.png",
        },
        {
            id: 7,
            quote:
                "Ordering from Culineer is always a breeze. Their website is user-friendly, and my purchases arrive quickly!",
            author: "Anika Skythmus",
            role: "Consumer",
            image: "/review-1.png",
            avatar: "/mission.png",
        },
        {
            id: 8,
            quote:
                "Ordering from Culineer is always a breeze. Their website is user-friendly, and my purchases arrive quickly!",
            author: "Anika Skythmus",
            role: "Consumer",
            image: "/review-1.png",
            avatar: "/mission.png",
        },
        {
            id: 9,
            quote:
                "Ordering from Culineer is always a breeze. Their website is user-friendly, and my purchases arrive quickly!",
            author: "Anika Skythmus",
            role: "Consumer",
            image: "/review-1.png",
            avatar: "/mission.png",
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        See what our <span className="text-green-500">Clients Said</span> about us
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">Explore the best reviews we get from our clients</p>
                </div>

                <div className="relative mt-16">

                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-1/3 flex-shrink-0 px-4 max-lg:w-1/2 max-sm:w-full">
                                    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
                                        <div className="relative h-64">
                                            <Image src={testimonial.image} alt="" fill className="object-cover" />
                                        </div>
                                        <div className="p-6">
                                            <p className="text-lg text-gray-600">&quot;{testimonial.quote}&quot;</p>
                                            <div className="mt-6 flex items-center gap-4">
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt={testimonial.author}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                                <div>
                                                    <h3 className="font-medium text-gray-900">{testimonial.author}</h3>
                                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center gap-3">
                        <button
                            onClick={prevSlide}
                            className="rounded-full bg-white p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            aria-label="Previous slide"
                        >
                            <BsArrowLeft className="h-6 w-6 text-gray-600" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="rounded-full bg-white p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            aria-label="Next slide"
                        >
                            <BsArrowRight className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

