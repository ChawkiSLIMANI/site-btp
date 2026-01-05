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
