'use client'

import Link from 'next/link'

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
            {/* Background with cinematic gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111] to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-rich/20 via-transparent to-transparent opacity-40" />

            {/* Decorative Metallic Circles */}
            <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-brand-dark/10 blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[80px]" />

            <div className="container relative z-10 mx-auto px-4 text-center">
                <h1 className="font-serif mb-8 text-5xl font-bold leading-tight md:text-8xl drop-shadow-2xl">
                    <span className="block bg-gradient-gold bg-clip-text text-transparent py-2">
                        Coach des leaders
                    </span>
                    <span className="block text-white">sous pression</span>
                </h1>

                <p className="mx-auto mb-12 max-w-3xl text-lg font-light tracking-wide text-gray-300 md:text-2xl">
                    Apprenez à vous maîtriser ! Gagnez en <span className="text-brand-light">lucidité</span>, en <span className="text-brand-light">performance</span> et en <span className="text-brand-light">leadership</span> quand tout s’accélère.
                </p>

                <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                    <Link
                        href="/contact"
                        className="group relative overflow-hidden rounded-full border border-brand bg-black/50 px-10 py-5 text-lg font-medium text-white shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all hover:bg-black/70 hover:text-white hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:border-brand-light"
                    >
                        <span className="relative z-10">Prendre rendez-vous</span>
                    </Link>
                    <Link
                        href="/a-propos"
                        className="group relative px-10 py-5 text-lg font-medium text-gray-300 transition-colors hover:text-white"
                    >
                        <span className="relative z-10">En savoir plus</span>
                        <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
