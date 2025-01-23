import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    const stats = [
        { number: "200+", label: "Local Producers" },
        { number: "199+", label: "Happy Customers" },
    ]

    return (
        <section className="relative overflow-hidden bg-white py-20">

            <div className="absolute inset-0 z-0">
                <div className="absolute -left-4 top-20 md:left-20">
                    <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Producer avatar"
                        width={48}
                        height={48}
                        className="rounded-full border-2 border-white shadow-lg"
                    />
                    <span className="absolute -bottom-6 left-12 text-sm text-gray-600">Producer</span>
                </div>
                <div className="absolute -right-4 top-12 md:right-24">
                    <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Home cook avatar"
                        width={48}
                        height={48}
                        className="rounded-full border-2 border-white shadow-lg"
                    />
                    <span className="absolute -top-6 right-12 text-sm text-gray-600">Home Cook</span>
                </div>
                <div className="absolute bottom-20 left-1/4 hidden md:block">
                    <Image
                        src="/placeholder.svg?height=120&width=120"
                        alt="Beets illustration"
                        width={120}
                        height={120}
                        className="object-contain"
                    />
                </div>
                <div className="absolute bottom-20 right-1/4 hidden md:block">
                    <Image
                        src="/placeholder.svg?height=120&width=120"
                        alt="Lettuce illustration"
                        width={120}
                        height={120}
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        Discover and <span className="text-green-500">Support</span> Your{" "}
                        <span className="text-green-500">Local Food</span> Heroes
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
                        Connecting consumers with local food producers for a healthier, sustainable future.
                    </p>

                    <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/join"
                            className="rounded-full bg-green-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                        >
                            Join as a Consumer
                        </Link>
                        <Link
                            href="/upgrade"
                            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-green-500 shadow-sm ring-1 ring-green-500 hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                        >
                            Upgrade Your Business
                        </Link>
                    </div>

                    <div className="flex justify-center gap-12">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-3xl font-bold text-gray-900">{stat.number}</p>
                                <p className="text-sm text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat interface preview */}
                <div className="mx-auto mt-16 max-w-3xl rounded-lg bg-white p-4 shadow-lg">
                    <div className="flex items-center gap-3 border-b pb-4">
                        <Image
                            src="/placeholder.svg?height=40&width=40"
                            alt="User avatar"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div>
                            <p className="font-semibold">Good Morning Jeff!</p>
                            <p className="text-sm text-gray-600">Let&quot;s explore what&quot;s fresh today</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

