"use client";

import { useState } from "react";

export default function ContactPage() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // IMPORTANT: Netlify Forms exige form-name
      if (!formData.get("form-name")) {
        formData.set("form-name", "contact");
      }

      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!res.ok) throw new Error("Échec de l’envoi");
      // Redirection “merci” côté client
      window.location.href = "/merci";
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="py-16 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Hidden fields requis par Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Ne pas remplir: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label className="block mb-1">Nom *</label>
          <input type="text" name="name" required className="w-full border p-2" />
        </div>

        <div>
          <label className="block mb-1">Email *</label>
          <input type="email" name="email" required className="w-full border p-2" />
        </div>

        <div>
          <label className="block mb-1">Téléphone</label>
          <input type="tel" name="phone" className="w-full border p-2" />
        </div>

        <div>
          <label className="block mb-1">Sujet *</label>
          <input type="text" name="subject" required className="w-full border p-2" />
        </div>

        <div>
          <label className="block mb-1">Message *</label>
          <textarea name="message" required className="w-full border p-2" rows={4} />
        </div>

        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" required className="mr-2" />
            J’accepte que mes données soient utilisées pour me recontacter.
          </label>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="bg-cyan-700 text-white px-6 py-2 rounded disabled:opacity-60"
        >
          {pending ? "Envoi…" : "Envoyer"}
        </button>

        {error && <p className="text-red-600 text-sm">{error}</p>}
      </form>
    </div>
  );
}
