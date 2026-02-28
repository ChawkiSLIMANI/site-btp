'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Incarnation() {
    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20 max-w-6xl mx-auto">
                    {/* Image à gauche */}
                    <div className="relative aspect-[3/4] w-full max-w-md flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                        <Image
                            src="/images/P1349374.JPG"
                            alt="Hassan - Coach en Leadership et Décision"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <h3 className="font-serif text-3xl font-bold text-white">Hassan</h3>
                            <p className="text-brand font-medium">Coach en Leadership</p>
                        </div>
                    </div>

                    {/* Texte à droite */}
                    <div className="flex-1 text-left">
                        <h2 className="font-serif mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
                            Accompagner ceux qui portent beaucoup
                        </h2>
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-8">
                            <p>
                                Je suis coach spécialisé dans l'accompagnement des dirigeants, managers et entrepreneurs sous pression.
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="text-brand mr-3 mt-1">✓</span>
                                    <span><strong>Une expérience terrain :</strong> 14 ans de gestion des imprévus et de coordination d'équipes sous tension dans l'événementiel de haut niveau.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-brand mr-3 mt-1">✓</span>
                                    <span><strong>Une approche directe :</strong> Du coaching pragmatique, exigeant et concret. Zéro théorie superflue.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-brand mr-3 mt-1">✓</span>
                                    <span><strong>Un objectif clair :</strong> Vous aider à garder la tête froide quand tout s'accélère, décider vite sans perdre en discernement et rester aligné avec votre vision.</span>
                                </li>
                            </ul>
                            <p>
                                Je ne considère pas le stress comme un ennemi à éliminer, mais comme une énergie à canaliser intelligemment.
                            </p>
                        </div>

                        <Link
                            href="/a-propos"
                            className="inline-flex items-center gap-3 rounded-xl border-2 border-brand px-8 py-4 text-lg font-bold text-white transition-all hover:bg-brand hover:text-black"
                        >
                            <span>Découvrir mon parcours</span>
                            <span className="text-xl">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
