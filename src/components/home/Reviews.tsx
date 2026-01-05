'use client'

export function Reviews() {
    const reviews = [
        {
            author: "Pascale B.",
            role: "Avis Google",
            content: "Bonjour, Je remercie vivement Hassan pour son écoute, sa disponibilité, son ouverture d'esprit et sa pertinence. Il ne compte pas son temps, il est efficace et surtout très humain. Je le recommande vivement !!!",
        },
        {
            author: "Aurélie KOYTCHA",
            role: "Avis Google",
            content: "Je suis ravie d'avoir pu être accompagnée durant plusieurs mois par Hassan qui est naturellement à l'écoute, d'une grande bienveillance et très professionnel. Il a à cœur de nous faire avancer et n'hésite pas à s'investir pour cela. Merci beaucoup !",
        },
    ]

    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-4">
                <h2 className="font-serif mb-16 text-center text-4xl font-bold text-white md:text-5xl">
                    Ils témoignent
                </h2>
                <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-16">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl border border-white/10 bg-white/5 p-8 italic text-gray-200 backdrop-blur-sm shadow-xl"
                        >
                            <div className="mb-4 flex gap-1 text-brand">
                                {'★'.repeat(5)}
                            </div>
                            <p className="mb-6 leading-relaxed">"{review.content}"</p>
                            <div>
                                <p className="font-bold text-white not-italic">{review.author}</p>
                                <p className="text-sm text-gray-400 not-italic font-medium">Avis Google</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <a
                        href="https://g.page/r/CbCgWA1XVVUeEBM/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-white transition-all hover:bg-white/10 hover:border-brand/50"
                    >
                        <span className="font-bold text-lg">Voir tous les avis sur Google</span>
                        <svg className="h-5 w-5 text-brand" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12.545,10.539v3.076h4.37c-0.198,1.261-1.396,2.279-2.735,2.279c-1.636,0-2.96-1.324-2.96-2.96s1.324-2.96,2.96-2.96 c0.749,0,1.425,0.279,1.94,0.735l2.227-2.228C17.062,7.279,14.925,6.42,12.18,6.42c-3.238,0-5.875,2.637-5.875,5.875 c0,3.238,2.637,5.875,5.875,5.875c2.936,0,5.432-2.091,5.836-5.039h-5.471V10.539z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
