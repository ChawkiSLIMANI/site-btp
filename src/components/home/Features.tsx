'use client'

export function Features() {
    const features = [
        {
            title: "Expérience Réelle",
            description: "Mon accompagnement s’appuie sur une expérience opérationnelle réelle.",
        },
        {
            title: "Gestion du Stress",
            description: "Je ne vous aide pas à réduire le stress, mais à le transformer en avantage stratégique.",
        },
        {
            title: "Performance",
            description: "J’aide les professionnels à gagner en lucidité et en leadership dans l'urgence.",
        },
    ]

    return (
        <section className="relative bg-black py-20 text-white">
            {/* Gradient Transition from Hero */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-dark/20 via-black to-black opacity-50" />

            <div className="container relative z-20 mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 transition-all hover:bg-white/10"
                        >
                            <div className="mb-4 text-4xl text-brand group-hover:scale-110 transition-transform duration-300">
                                ✦
                            </div>
                            <h3 className="mb-3 text-2xl font-bold font-serif text-white">
                                {feature.title}
                            </h3>
                            <p className="text-gray-200 leading-relaxed opacity-90">
                                {feature.description}
                            </p>
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
