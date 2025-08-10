import { SERVICES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/services/ServiceCard";

export default function ServicesPage() {
  return (
    <section className="py-16">
      <Container>
        <h1 className="text-4xl font-bold mb-6">Nos services</h1>
        <p className="text-lg mb-12 max-w-3xl">
          Nous proposons une gamme complète de prestations pour répondre à tous vos besoins en construction, rénovation et aménagement.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
