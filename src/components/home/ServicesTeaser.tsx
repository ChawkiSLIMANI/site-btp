import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function ServicesTeaser() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-center">Nos services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-cyan-700 font-medium hover:underline"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
