"use client"

import { useState } from "react"
import Image from "next/image"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

interface resources {
    id: number;
    title: string;
    date: string;
    category: string;
    image: string;
}

const Resources: resources[] = [
    {
        id: 1,
        title: "Mudassar MD Collection Emerges As A Favorite Among Designers",
        date: "December 5, 2023",
        category: "Life Uncategorized",
        image: "/review-1.png",
    },
    {
        id: 2,
        title: "Mudassar MD Collection Emerges As A Favorite Among Designers",
        date: "December 5, 2023",
        category: "Life Uncategorized",
        image: "/review-1.png",
    },
    {
        id: 3,
        title: "Mudassar MD Collection Emerges As A Favorite Among Designers",
        date: "December 5, 2023",
        category: "Life Uncategorized",
        image: "/review-1.png",
    },
]


export default function ResourcesSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Resources.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Resources.length) % Resources.length)
    }

    return (
        <section className="bg-white py-16 lg:py-24 ">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">

                <div className="mt-8 flex justify-center gap-3 absolute sm:top-4 sm:right-14 max-sm:bottom-10 max-sm:left-6">
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

                <div className="text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Resources & <span className="text-green-500">Education</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">Explore the best reviews we get from our clients</p>
                </div>

                <div className="relative mt-10 pb-24">
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {Resources.map((resource) => (
                                <div className="w-1/3 flex-shrink-0 px-4 max-lg:w-1/2 max-sm:w-full" key={resource.id}>
                                    <div className="relative aspect-[3/4] max-sm:aspect-[1/1.1] overflow-hidden rounded-3xl">
                                        <Image
                                            src={resource.image}
                                            alt={resource.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        />
                                    </div>
                                    <div className="mt-4 space-y-2">
                                        <div className="text-sm text-gray-600">
                                            {resource.date} | {resource.category}
                                        </div>
                                        <h3 className="text-[15px] leading-tight group-hover:text-green-500 transition-colors">{resource.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

