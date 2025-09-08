import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function ContactCta() {
  return (
    <section className="bg-cyan-700 text-white py-16">
      <Container className="text-center">
        <h2 className="text-3xl font-bold mb-4">Un projet ? Parlons-en</h2>
        <p className="mb-6">
          Contactez-nous dès aujourd’hui pour obtenir un devis gratuit et personnalisé.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href={`tel:${SITE.phone}`}
            className="bg-white text-cyan-700 font-medium px-6 py-3 rounded-2xl hover:bg-gray-100 transition"
          >
            📞 {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="bg-white text-cyan-700 font-medium px-6 py-3 rounded-2xl hover:bg-gray-100 transition"
          >
            ✉️ {SITE.email}
          </a>
        </div>
        {/* <Link
          href="/contact"
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-2xl shadow-md"
        >
          Demander un devis
        </Link> */}
      </Container>
    </section>
  );
}
