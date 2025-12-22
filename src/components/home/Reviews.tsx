'use client'

export function Reviews() {
    const reviews = [
        {
            author: "Jean Dupont",
            role: "CEO, TechStart",
            content: "Un coaching qui a transformé ma vision du leadership. Aksou m'a aidé à traverser une crise majeure.",
        },
        {
            author: "Marie Curie",
            role: "Directrice, LabCorp",
            content: "Une approche percutante. J'ai gagné en sérénité et en efficacité.",
        },
        {
            author: "Paul Martin",
            role: "Manager, BigBiz",
            content: "Indispensable pour tout leader sous pression.",
        },
    ]

    return (
        <section className="bg-black py-24 text-white">
            <div className="container mx-auto px-4">
                <h2 className="font-serif mb-16 text-center text-4xl font-bold text-white md:text-5xl">
                    Ils témoignent
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl border border-white/10 bg-white/5 p-8 italic text-gray-200 backdrop-blur-sm"
                        >
                            <p className="mb-6 leading-relaxed">"{review.content}"</p>
                            <div>
                                <p className="font-bold text-white not-italic">{review.author}</p>
                                <p className="text-sm text-brand-light not-italic font-medium">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
