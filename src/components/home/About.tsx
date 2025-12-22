'use client'

import Image from 'next/image'

export function About() {
    return (
        <section id="about" className="bg-black py-24 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
                    <div className="relative aspect-[3/4] w-full max-w-sm flex-shrink-0 overflow-hidden rounded-2xl border-2 border-brand/20 shadow-2xl">
                        <Image
                            src="/profile.jpg"
                            alt="Coach Aksou"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <p className="font-serif text-3xl font-bold text-white">Aksou</p>
                            <p className="text-brand">Coach Professionnel</p>
                        </div>
                    </div>

                    <div className="flex-1 text-left">
                        <h2 className="font-serif mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                            Qui suis-je ?
                        </h2>
                        <div className="space-y-6 text-lg text-gray-200 leading-relaxed opacity-95">
                            <p>
                                Je suis un coach spécialisé pour les leaders sous pression. Mon approche est directe,
                                pragmatique et orientée résultats.
                            </p>
                            <p>
                                Contrairement aux approches classiques, je considère le stress non pas comme un ennemi,
                                mais comme une ressource inexploitée. Mon expérience terrain dans des environnements
                                à haute intensité me permet de comprendre vos défis quotidiens.
                            </p>
                            <p>
                                Mon objectif : vous aider à transformer l'urgence en opportunité et à maintenir
                                une vision claire quand tout s'accélère autour de vous.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
