"use client"

import { useEffect, useRef } from "react"

interface LogoCarouselProps {
    logos: { name: string; icon: string }[]
    speed?: number
}

export function LogoCarousel({ logos, speed = 20000 }: LogoCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const resetAnimation = () => {
            container.style.animation = "none"
            container.offsetHeight
            container.style.animation = `slide ${speed}ms linear infinite`
        }

        resetAnimation()

        container.addEventListener("animationend", resetAnimation)

        return () => {
            if (container) {
                container.removeEventListener("animationend", resetAnimation)
            }
        }
    }, [speed])

    return (
        <div className="overflow-hidden">
            <div
                ref={containerRef}
                className="flex"
                style={{
                    animation: `slide ${speed}ms linear infinite`,
                }}
            >
                {[...logos, ...logos].map((logo, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600 whitespace-nowrap mx-4">
                        <div className="w-5 h-5 bg-[#7AB742] rounded-full" />
                        {logo.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

