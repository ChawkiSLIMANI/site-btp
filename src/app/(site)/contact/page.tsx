export default function ContactPage() {
  return (
    <div className="py-16 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>

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

        <button type="submit" className="bg-cyan-700 text-white px-6 py-2 rounded">
          Envoyer
        </button>
      </form>
    </div>
  );
}
