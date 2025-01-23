import Image from "next/image"
import Link from "next/link"

export default function MarketCommunity() {
    const images = [
        {
            src: "/market-community-1.png",
            alt: "Community dining experience",
        },
        {
            src: "/market-community-2.png",
            alt: "Fresh salad greens",
        },
        {
            src: "/market-community-3.png",
            alt: "Organic swiss chard",
        },
        {
            src: "/market-community-4.png",
            alt: "Gourmet salad with toppings",
        },
        {
            src: "/market-community-5.png",
            alt: "Fresh lettuce",
        },
        {
            src: "/market-community-6.png",
            alt: "Grilled specialties",
        },
    ]

    return (
        <section className="relative overflow-hidden bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                    Start building your{" "}
                    <span className="text-green-500">
                        market
                        <br />
                        community
                    </span>{" "}
                    today.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                    Join our community to stay updated with your favorite local producer or market.
                </p>
                <div className="mt-8">
                    <Link
                        href="/get-started"
                        className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            <div className="mt-16 flex w-full overflow-hidden">
                <div className="flex w-full items-end justify-between">
                    {images.map((image, index) => (
                        <div key={`first-${index}`} className="relative ">
                            <Image src={image.src || "/placeholder.svg"} alt={image.alt} width={100} height={100} className="" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

