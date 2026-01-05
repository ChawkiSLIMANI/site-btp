'use client'

export function Services() {
    const offers = [
        {
            title: "Offre Spotlight",
            target: "1 Séance",
            description: "Un coaching ciblé pour débloquer une situation immédiate. Prix : 300€ HT.",
        },
        {
            title: "Offre Transformation",
            target: "10 Séances",
            description: "Un accompagnement complet avec bilans mi-parcours et fin. Séances toutes les 2 semaines. Prix : 2650€ HT.",
        },
        {
            title: "Séance en groupe",
            target: "Équipes",
            description: "Renforcez la cohésion et la performance de vos équipes. Sur devis.",
        },
    ]

    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-4">
                <h2 className="font-elegant mb-16 text-center text-4xl font-bold text-white md:text-5xl">
                    Mes Offres
                </h2>
                {/* Étape 1 : Discovery Call */}
                <div className="mx-auto mb-16 max-w-4xl text-center">
                    <div className="mb-8 rounded-2xl border-2 border-brand/20 bg-white/5 p-8 backdrop-blur-sm md:p-10">
                        <span className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-brand">
                            Étape 1 : Préalable indispensable
                        </span>
                        <h3 className="mb-4 text-2xl font-bold font-serif text-white md:text-3xl">
                            Entretien Découverte (30 min) - Offert
                        </h3>
                        <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                            Avant tout accompagnement, nous échangeons lors d'un appel téléphonique pour valider notre "fit".
                            C'est le moment de vérifier si je suis le bon coach pour vous, et si le feeling passe entre nous.
                        </p>
                        <p className="text-sm italic text-gray-400">
                            * Sans engagement. Donne accès ensuite aux formules Spotlight ou Transformation.
                        </p>
                        <a
                            href="https://calendly.com/aksoucoaching"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-lg font-bold text-black transition-transform hover:scale-105 hover:bg-brand-light"
                        >
                            <span>📅</span>
                            <span>Réserver mon appel</span>
                        </a>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {offers.map((offer, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:border-brand/50 hover:bg-white/10"
                        >
                            <h3 className="mb-2 text-2xl font-bold font-serif text-white">{offer.title}</h3>
                            <p className="mb-6 text-sm font-bold uppercase tracking-wider text-brand">
                                {offer.target}
                            </p>
                            <p className="flex-1 text-gray-200 leading-relaxed">{offer.description}</p>
                            <button className="mt-8 w-full rounded-lg bg-white/10 border border-white/10 py-3 text-sm font-bold text-white transition-colors hover:bg-brand hover:text-black hover:border-brand">
                                En savoir plus
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
