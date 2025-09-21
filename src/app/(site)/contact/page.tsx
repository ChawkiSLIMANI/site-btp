import { SITE } from "@/lib/constants";

export default function ContactPage() {
  // On récupère (si présent) uniquement le lien Instagram depuis les constantes
  const instagram =
    (SITE.socials ?? []).find(
      (s) => s.label.toLowerCase() === "instagram"
    )?.url || "";

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Bandeau titre SANS encadrement + police écriture */}
        <section className="mb-10 text-center">
          <h1
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "var(--font-elegant)" }}
          >
            LA PROMESSE D&rsquo;UN PROJET RÉUSSI
          </h1>
        </section>

        <div className="grid gap-10 md:grid-cols-3">
          {/* ===== Colonne gauche : FORMULAIRE (Netlify) ===== */}
          <div className="md:col-span-2 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Contactez-nous</h2>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/merci"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Ne pas remplir: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label className="block mb-1">Nom *</label>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block mb-1">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block mb-1">Sujet *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block mb-1">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="inline-flex items-center text-sm">
                  <input type="checkbox" required className="mr-2" />
                  J&rsquo;accepte que mes données soient utilisées pour me
                  recontacter.
                </label>
              </div>

              <button
                type="submit"
                className="bg-cyan-700 text-white px-6 py-2 rounded"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* ===== Colonne droite : RAPPEL TÉL + MAIL + (Instagram si dispo) ===== */}
          <aside className="md:col-span-1 md:sticky md:top-24">
            <div className="rounded-2xl border p-5 bg-white">
              <h2 className="text-xl font-semibold mb-4">
                Besoin d&rsquo;un échange direct ?
              </h2>

              <div className="space-y-3">
                <a
                  href={`tel:${SITE.phone}`}
                  className="block w-full text-left rounded-xl border px-4 py-3 hover:shadow-sm transition"
                >
                  <div className="text-xs text-gray-500">Téléphone</div>
                  <div className="font-medium">{SITE.phone}</div>
                </a>

                <a
                  href={`mailto:${SITE.email}`}
                  className="block w-full text-left rounded-xl border px-4 py-3 hover:shadow-sm transition"
                >
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="font-medium break-all">{SITE.email}</div>
                </a>
              </div>

              {/* Instagram uniquement (et séparation seulement si présent) */}
              {instagram && <hr className="my-5" />}
              {instagram && <InstagramOnly url={instagram} />}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

/* ===== Bloc Instagram uniquement ===== */
function InstagramOnly({ url }: { url: string }) {
  const ICON_INSTAGRAM =
    "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.6.6.3 1 .7 1.3 1.3.3.4.5 1.1.6 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.3-.3.6-.7 1-1.3 1.3-.4.3-1.1.5-2.3.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.6-.6-.3-1-.7-1.3-1.3-.3-.4-.5-1.1-.6-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.3.3-.6.7-1 1.3-1.3.4-.3 1.1-.5 2.3-.6C8.4 2.2 8.8 2.2 12 2.2m0 2.2c-3.1 0-3.5 0-4.7.1-.9.1-1.4.2-1.7.4-.4.2-.7.4-.9.9-.2.3-.3.8-.4 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1.9.2 1.4.4 1.7.2.4.4.7.9.9.3.2.8.3 1.7.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9-.1 1.4-.2 1.7-.4.4-.2.7-.4.9-.9.2-.3.3-.8.4-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-.9-.2-1.4-.4-1.7-.2-.4-.4-.7-.9-.9-.3-.2-.8-.3-1.7-.4-1.2-.1-1.6-.1-4.7-.1zm0 2.2a5.4 5.4 0 110 10.8A5.4 5.4 0 0112 6.6zm0 2.2a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm5.8-2.6a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6z";

  return (
    <div>
      <h4 className="font-semibold">Retrouvez-nous sur Instagram :</h4>
      <div className="mt-3">
        <a
          href={url}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          title="Instagram"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d={ICON_INSTAGRAM} />
          </svg>
          <span className="sr-only">Instagram</span>
        </a>
      </div>
    </div>
  );
}
