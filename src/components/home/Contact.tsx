'use client'

export function Contact() {
    return (
        <section id="contact" className="bg-black py-24 text-white">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl rounded-2xl bg-black/50 p-8 shadow-2xl backdrop-blur-sm md:p-12">
                    <h2 className="font-elegant mb-8 text-center text-3xl font-bold text-brand md:text-4xl">
                        Travaillons ensemble
                    </h2>
                    <p className="mb-12 text-center text-gray-300">
                        Prêt à passer au niveau supérieur ? Réservez un créneau ou envoyez-moi un message.
                    </p>

                    <div className="grid gap-12 md:grid-cols-2">
                        {/* Calendly / Direct Contact */}
                        <div className="flex flex-col justify-center space-y-6">
                            <a
                                href="https://calendly.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 rounded-xl bg-brand p-6 text-xl font-bold text-black transition-all hover:bg-brand-light"
                            >
                                📅 Réserver un entretien
                            </a>
                            <div className="text-center text-gray-400">
                                <p>ou contactez-moi directement :</p>
                                <p className="mt-2 text-white">contact@aksou-coaching.com</p>
                            </div>
                        </div>

                        {/* Simple Form */}
                        <form className="space-y-4">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">Nom</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                                    placeholder="votre@email.com"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                                    placeholder="Comment puis-je vous aider ?"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-brand py-3 font-bold text-black shadow-lg transition-transform hover:scale-[1.02] hover:bg-brand-light"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
