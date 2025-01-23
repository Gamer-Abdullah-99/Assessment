import Image from "next/image"
import Link from "next/link"

export default function ForBusiness() {
    return (
        <section className="bg-green-50 py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

                    <div className="space-y-6 lg:order-1">
                        <span className="text-sm font-medium text-green-600">For Business</span>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            <span className="text-green-500">Producers</span>
                            <br />& Markets
                        </h2>

                        <p className="text-lg text-gray-600">
                            Capture leads, engage customers and track your marketing efforts with limited to no marketing expertise.
                            Cookrace makes it growing your business easy!
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 flex-none text-green-500" stroke="currentColor">
                                    <path d="M9 12.75L11.25 15 15 9.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="text-gray-600">Increase sales and improve profits.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 flex-none text-green-500" stroke="currentColor">
                                    <path d="M9 12.75L11.25 15 15 9.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="text-gray-600">Streamlined marketing and data insights.</span>
                            </li>
                        </ul>

                        <Link
                            href="/upgrade-account"
                            className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                        >
                            Upgrade to a Professional Account
                        </Link>
                    </div>

                    <div className="relative lg:order-2">
                        <Image
                            src="/for-business.png"
                            alt="Producers and markets platform interface"
                            width={600}
                            height={400}
                            className="w-full rounded-lg"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

