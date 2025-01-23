import Image from "next/image"
import LogoCarousel from "./logo-caarousel"


const brands = [
    { name: "Circooles", icon: "/logo.png" },
    { name: "Quotient", icon: "/logo.png" },
    { name: "Hourglass", icon: "/logo.png" },
    { name: "Command+R", icon: "/logo.png" },
    { name: "Catalog", icon: "/logo.png" },
    { name: "Layers", icon: "/logo.png" },
]

const tabs = ["Producer", "Farmer", "Home Cook"]

export default function ConnectionSection() {
    return (
        <section className="py-16 px-4 md:px-6 overflow-hidden">
            <div className="max-w-[1200px] mx-auto">

                <div className="mb-16">
                    <LogoCarousel logos={brands} speed={30000} />
                </div>

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
                        <span className="text-[#7AB742]">Connecting Farmers</span> and Home Cooks
                        <br />
                        for a Thriving Food <span className="text-[#7AB742]">Community!</span>
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                        A platform that connects farmers, producers, and home cooks alike to promote local, sustainable food.
                    </p>
                </div>

                <div className="relative">

                    <div className="flex justify-center gap-8 mb-8">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 text-sm font-medium transition-colors
                  ${index === 2 ? "text-[#7AB742] border-b-2 border-[#7AB742]" : "text-gray-600"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="relative aspect-[16/9] max-w-[900px] mx-auto">
                        <Image
                            src="/review-1.png"
                            alt="Platform Interface"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#7AB742]/5 rounded-[40px] -z-10 transform -rotate-1" />
                </div>
            </div>
        </section>
    )
}

