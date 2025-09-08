import Image from 'next/image'
import { REALISATIONS } from '@/lib/constants'
import { Container } from '@/components/ui/Container'

export function ProjectsGallery() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <h2 className="text-3xl font-bold mb-10 text-center">Nos projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REALISATIONS.map((r) => (
            <div key={r.slug} className="relative group overflow-hidden rounded-2xl shadow hover:shadow-lg transition">
              <Image src={r.cover} alt={r.title} width={600} height={400} className="w-full h-60 object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="text-sm">{r.city} — {r.type}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
