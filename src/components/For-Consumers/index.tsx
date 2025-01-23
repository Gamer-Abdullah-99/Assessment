import Image from "next/image"

export default function ForConsumers() {
    return (
        <section className="bg-green-50 py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div className="relative max-lg:order-2">
                        <Image
                            src="/for-consumers.png"
                            alt="Home cooks and chefs platform interface"
                            width={600}
                            height={400}
                            className="w-full rounded-lg"
                            priority
                        />
                    </div>

                    <div className="space-y-6 max-lg:order-1">
                        <span className="text-sm font-medium text-green-600">For Consumers</span>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Home <span className="text-green-500">Cooks</span> &<br />
                            Chefs
                        </h2>

                        <p className="text-lg text-gray-600">
                            Find local producers in your area, get reminders to go to market, know what&apos;s available each week. Learn
                            about ingredients and growing practices, be inspired by new recipes.
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
                                <span className="text-gray-600">Easier access to local ingredients.</span>
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
                                <span className="text-gray-600">Improved eating habits and confidence in food quality.</span>
                            </li>
                        </ul>

                        <div
                            className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                        >
                            Join the Culinary Community
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

