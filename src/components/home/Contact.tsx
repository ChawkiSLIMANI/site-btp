'use client'

import { useState } from 'react'

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus('idle')

        const formData = new FormData(e.currentTarget)

        try {
            const response = await fetch('/contact-form.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                // @ts-ignore
                body: new URLSearchParams(formData).toString(),
            })

            if (response.ok) {
                setStatus('success')
                e.currentTarget.reset()
            } else {
                setStatus('error')
            }
        } catch (error) {
            setStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

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
                            <div className="text-center">
                                <h3 className="mb-4 text-xl font-bold text-white">
                                    Pour prendre rendez-vous :
                                </h3>
                                <a
                                    href="https://calendly.com/aksoucoaching"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#D4AF37] p-4 text-lg font-bold text-black transition-all hover:bg-[#FCD34D] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                >
                                    <span>📅</span>
                                    <span>Réserver sur Calendly</span>
                                </a>
                            </div>


                        </div>

                        {/* Simple Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="hidden" name="form-name" value="contact-coaching-live" />

                            {status === 'success' && (
                                <div className="rounded-lg bg-green-500/20 p-4 text-center text-green-200 border border-green-500/30">
                                    Message envoyé avec succès ! Je vous répondrai très vite.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="rounded-lg bg-red-500/20 p-4 text-center text-red-200 border border-red-500/30">
                                    Une erreur est survenue. Veuillez réessayer.
                                </div>
                            )}

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">Nom</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                                    placeholder="votre@email.com"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                                    placeholder="Comment puis-je vous aider ?"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="block w-full rounded-lg bg-[#D4AF37] py-4 text-lg font-bold text-black shadow-lg transition-transform hover:scale-[1.02] hover:bg-[#FCD34D] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
