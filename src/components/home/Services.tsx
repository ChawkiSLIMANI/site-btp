'use client'

import { useState, useEffect } from 'react'
import { PopupModal } from 'react-calendly'
import Image from 'next/image'

export function Services() {
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null)

    useEffect(() => {
        setRootElement(document.body)
    }, [])

    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="font-serif mb-16 text-center text-4xl font-bold text-white md:text-5xl">
                    Mes Offres
                </h2>

                {/* Étape 1 : Discovery Call */}
                <div className="mx-auto mb-16 max-w-4xl text-left md:text-center">
                    <div className="mb-8 rounded-2xl border-2 border-brand/20 bg-white/5 p-8 backdrop-blur-sm md:p-10 shadow-xl">
                        <span className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-brand">
                            Étape 1 : Préalable indispensable
                        </span>
                        <h3 className="mb-4 text-2xl font-bold font-serif text-white md:text-3xl">
                            Point ZÉRO (30 à 40 min) - 50€ HT
                        </h3>
                        <div className="mb-6 text-lg text-gray-300 leading-relaxed space-y-4">
                            <p>Avant tout engagement, je vous propose un entretien confidentiel de 30 à 40 minutes.</p>
                            <p>Cet échange est un temps d'analyse et de clarification. Nous explorons votre contexte, vos enjeux actuels, vos zones de tension et vos objectifs réels. L'objectif est double : déterminer si le coaching est la réponse la plus pertinente à votre situation, et vérifier l'alignement entre votre besoin et mon approche.</p>
                        </div>
                        <p className="mb-8 font-serif text-lg italic text-brand">
                            Parce qu'un accompagnement de haut niveau commence par une décision éclairée.
                        </p>
                        <button
                            onClick={() => setIsCalendlyOpen(true)}
                            className="inline-flex items-center gap-3 rounded-xl bg-[#D4AF37] px-8 py-4 text-lg font-bold text-black transition-all hover:bg-[#FCD34D] hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                        >
                            <span>📅</span>
                            <span>Réserver mon appel</span>
                        </button>
                        {rootElement && (
                            <PopupModal
                                url="https://calendly.com/aksoucoaching"
                                onModalClose={() => setIsCalendlyOpen(false)}
                                open={isCalendlyOpen}
                                rootElement={rootElement}
                            />
                        )}
                    </div>
                </div>

                {/* Les offres */}
                <div className="grid gap-8 lg:grid-cols-2 mb-8">
                    {/* Offre 1 */}
                    <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-brand/50 hover:bg-white/10 shadow-lg">
                        <div className="mb-6 border-b border-white/10 pb-6">
                            <h3 className="mb-2 text-3xl font-bold font-serif text-white">IMPACT</h3>
                            <p className="text-xl font-bold text-brand">300€ HT <span className="text-sm text-gray-400 font-normal">| 1 séance individuelle 1h</span></p>
                        </div>

                        <div className="flex-1 space-y-6 text-gray-200">
                            <div>
                                <p className="font-bold text-white mb-2">Pour qui ?</p>
                                <p className="text-sm leading-relaxed">Dirigeants ou managers confrontés à une situation précise : surcharge, décision complexe, tension d’équipe, repositionnement stratégique.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">Objectif :</p>
                                <p className="text-sm leading-relaxed">Apporter clarté, structure et décision concrète en une séance.</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2">Ce que comprend la séance :</p>
                                <ul className="text-sm leading-relaxed space-y-2 list-none">
                                    <li><span className="text-brand mr-2">•</span>Diagnostic rapide de la situation</li>
                                    <li><span className="text-brand mr-2">•</span>Clarification des enjeux réels (et non apparents)</li>
                                    <li><span className="text-brand mr-2">•</span>Mise à plat des priorités</li>
                                    <li><span className="text-brand mr-2">•</span>Plan d’action concret sous 48h</li>
                                    <li><span className="text-brand mr-2">•</span>Synthèse envoyée par email après la séance</li>
                                </ul>
                            </div>
                        </div>
                        <button className="mt-8 w-full rounded-lg bg-white/10 border border-white/10 py-4 text-sm font-bold text-white transition-colors hover:bg-brand hover:text-black hover:border-brand">
                            Me contacter
                        </button>
                    </div>

                    {/* Offre 2 */}
                    <div className="flex flex-col rounded-2xl border border-[#D4AF37]/30 bg-white/5 p-8 transition-all hover:border-[#D4AF37]/60 hover:bg-white/10 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-xs font-bold px-4 py-1 rounded-bl-lg">RECOMMANDÉ</div>
                        <div className="mb-6 border-b border-white/10 pb-6">
                            <h3 className="mb-2 text-3xl font-bold font-serif text-white">LEADERSHIP SOUS PRESSION</h3>
                            <p className="text-xl font-bold text-brand">2 650€ HT <span className="text-sm text-gray-400 font-normal">| 10 séances individuelles (sur 4 à 6 mois)</span></p>
                        </div>

                        <div className="flex-1 space-y-6 text-gray-200">
                            <div>
                                <p className="font-bold text-white mb-2">Pour qui ?</p>
                                <p className="text-sm leading-relaxed mb-2">Dirigeants et entrepreneurs qui :</p>
                                <ul className="text-sm leading-relaxed space-y-1 list-none">
                                    <li><span className="text-brand mr-2">▪</span>Subissent une pression constante</li>
                                    <li><span className="text-brand mr-2">▪</span>Gèrent une croissance rapide</li>
                                    <li><span className="text-brand mr-2">▪</span>Traversent une phase de transformation</li>
                                    <li><span className="text-brand mr-2">▪</span>Souhaitent renforcer leur posture de leader</li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="font-bold text-white mb-2">Objectifs :</p>
                                    <ul className="text-sm leading-relaxed space-y-1 list-none">
                                        <li><span className="text-brand mr-2">▪</span>Stabiliser la charge mentale</li>
                                        <li><span className="text-brand mr-2">▪</span>Structurer la décision</li>
                                        <li><span className="text-brand mr-2">▪</span>Renforcer la posture managériale</li>
                                        <li><span className="text-brand mr-2">▪</span>Développer une performance durable</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-bold text-white mb-2">Inclus :</p>
                                    <ul className="text-sm leading-relaxed space-y-1 list-none">
                                        <li><span className="text-brand mr-2">▪</span>10 séances de 1h</li>
                                        <li><span className="text-brand mr-2">▪</span>Accès prioritaire entre les séances</li>
                                        <li><span className="text-brand mr-2">▪</span>Outils personnalisés</li>
                                        <li><span className="text-brand mr-2">▪</span>Bilan intermédiaire + final</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button className="mt-8 w-full rounded-lg bg-[#D4AF37] border border-[#D4AF37] py-4 text-sm font-bold text-black transition-colors hover:bg-[#FCD34D]">
                            Démarrer l'accompagnement
                        </button>
                    </div>
                </div>

                {/* Offre 3 */}
                <div className="mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-white/30 shadow-lg">
                        <div className="mb-6 md:mb-0 text-center md:text-left">
                            <h3 className="mb-2 text-2xl font-bold font-serif text-white">Le Cercle des Décideurs</h3>
                            <p className="text-gray-300">Renforcez la cohésion et la performance de vos équipes.</p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-xl font-bold text-brand mb-4">Sur Devis</p>
                            <button className="px-8 rounded-lg bg-white/10 border border-white/10 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black hover:border-white">
                                Demander un devis
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
