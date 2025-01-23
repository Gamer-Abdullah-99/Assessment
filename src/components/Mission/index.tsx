import Image from "next/image"

export default function Mission() {
    return (
        <section className="relative overflow-hidden bg-white py-24">

            <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
                <div className="text-[200px] font-serif text-green-50">&quot;</div>
            </div>

            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Culineer is on a <span className="font-normal text-gray-600">mission to build</span> a more sustainable{" "}
                        <span className="text-green-500">world by making</span> it easy{" "}
                        <span className="font-normal text-gray-600">for people to eat locally-produced foods.</span>
                    </h2>

                    <div className="mt-8 flex items-center justify-center gap-3">
                        <Image
                            src="/mission.png"
                            alt="John Doe"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <div className="text-left">
                            <div className="font-semibold text-gray-900">John Doe</div>
                            <div className="text-sm text-gray-600">CEO and Founder</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

