'use client'

import Image from 'next/image'

export function About() {
    return (
        <section id="about" className="bg-black py-24 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
                    <div className="relative aspect-[3/4] w-full max-w-sm flex-shrink-0 overflow-hidden rounded-2xl border-2 border-brand/20 shadow-2xl lg:sticky lg:top-32">
                        <Image
                            src="/images/P1349374.JPG"
                            alt="Hassan Aksou - Coach en Leadership sous pression"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 400px"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <p className="font-serif text-3xl font-bold text-white">Hassan</p>
                            <p className="text-brand">Coach Professionnel</p>
                        </div>
                    </div>

                    <div className="flex-1 text-left space-y-12">
                        {/* Section 1 */}
                        <div>
                            <h2 className="font-serif mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                                Accompagner ceux qui portent beaucoup
                            </h2>
                            <div className="space-y-4 text-lg text-gray-200 leading-relaxed opacity-95">
                                <p>
                                    Je suis coach spécialisé dans l'accompagnement des dirigeants, managers et entrepreneurs sous pression.
                                </p>
                                <p>
                                    J'interviens lorsque la charge mentale devient envahissante, que les décisions s'enchaînent sans pause et que la responsabilité repose essentiellement sur vous. Quand vous devez continuer à délivrer, fédérer et incarner la solidité… même lorsque la pression s'intensifie.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-brand mb-4">Une expérience forgée sur le terrain</h3>
                            <div className="space-y-4 text-lg text-gray-200 leading-relaxed opacity-95">
                                <p>
                                    Avant de devenir coach, j'ai passé 14 ans en régie événementielle et coordination internationale sur des événements corporate, politiques et sportifs. Mon quotidien consistait à :
                                </p>
                                <ul className="list-inside list-disc space-y-2 text-gray-300 ml-4">
                                    <li>Gérer des imprévus de dernière minute</li>
                                    <li>Tenir des délais serrés voire impossibles</li>
                                    <li>Coordonner des équipes sous tension</li>
                                    <li>Garantir une expérience fluide et irréprochable pour le client</li>
                                </ul>
                                <p>
                                    Cette réalité m'a appris à rester lucide lorsque tout s'accélère, à décider vite sans perdre en discernement et à transformer la pression en moteur d'action plutôt qu'en source d'épuisement.
                                </p>
                            </div>
                        </div>



                        {/* Section 3 */}
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-brand mb-4">Une approche directe et orientée résultats</h3>
                            <div className="space-y-4 text-lg text-gray-200 leading-relaxed opacity-95">
                                <p>
                                    Mon coaching est pragmatique, exigeant et concret. Je ne propose ni théorie superflue, ni développement personnel hors-sol.
                                </p>
                                <p>Nous travaillons uniquement sur ce qui vous permet de :</p>
                                <ul className="list-inside list-[circle] space-y-2 text-gray-300 ml-4">
                                    <li>Clarifier vos priorités</li>
                                    <li>Prendre des décisions alignées</li>
                                    <li>Ajuster votre posture de leader</li>
                                    <li>Retrouver de la stabilité intérieure</li>
                                    <li>Maintenir une performance durable</li>
                                </ul>
                                <p>
                                    Je ne considère pas le stress comme un ennemi à éliminer, mais comme une énergie à canaliser. Mal maîtrisé, il use. Structuré intelligemment, il devient un levier puissant.
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div className="rounded-2xl border border-brand/20 bg-white/5 p-8 backdrop-blur-sm shadow-xl">
                            <h3 className="font-serif text-2xl font-bold text-white mb-6">Ce que je vous propose</h3>
                            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                                <p className="font-bold text-brand text-xl">Un espace exigeant mais sécurisé.</p>
                                <ul className="space-y-3">
                                    <li className="flex gap-3"><span className="text-brand">▪</span> Un lieu où vous pouvez déposer la pression sans jugement.</li>
                                    <li className="flex gap-3"><span className="text-brand">▪</span> Un temps pour remettre de l'ordre dans vos responsabilités.</li>
                                    <li className="flex gap-3"><span className="text-brand">▪</span> Un cadre pour prendre des décisions claires et assumées.</li>
                                </ul>
                                <div className="mt-8 border-t border-white/10 pt-6">
                                    <p className="font-bold text-white text-xl mb-3">Mon objectif :</p>
                                    <p className="italic text-gray-200">
                                        "Vous aidez à garder la tête froide quand tout s'accélère, transformer l'urgence en opportunité et rester aligné avec votre vision — sans vous perdre dans le chaos du quotidien."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
