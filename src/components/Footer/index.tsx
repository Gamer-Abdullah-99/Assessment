import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const navigation = [
    { name: "Home", href: "#" },
    { name: "Farmers Market", href: "#" },
    { name: "Producers", href: "#" },
    { name: "Home Cooks", href: "#" },
    { name: "Directory", href: "#" },
]

const social = [
    { name: "Facebook", icon: FaFacebook, href: "#" },
    { name: "Twitter", icon: FaTwitter, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" },
]

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/logo.png"
                            alt="Cultivar"
                            width={120}
                            height={40}
                            className="h-8 w-auto"
                        />
                    </Link>

                    <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        {social.map((item) => {
                            const Icon = item.icon
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                    aria-label={item.name}
                                >
                                    <Icon className="h-5 w-5" />
                                </Link>
                            )
                        })}
                    </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© 2024 Cultivar. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="hover:text-gray-600 transition-colors">
                            Terms & Conditions
                        </Link>
                        <Link href="/privacy" className="hover:text-gray-600 transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

