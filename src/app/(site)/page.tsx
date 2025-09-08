import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { ServicesTeaser } from '@/components/home/ServicesTeaser'
import { RefsTeaser } from '@/components/home/RefsTeaser'
import { ContactCta } from '@/components/home/ContactCta'


export default function HomePage() {
return (
<>
{/* HERO */}
<section className="relative">
<div className="absolute inset-0 -z-10">
<Image src="/images/placeholders/hero.jpg" alt="Chantier BTP" fill sizes="100vw" className="object-cover" priority />
<div className="absolute inset-0 bg-black/40" />
</div>
<Container className="py-16 md:py-28 text-white">
<h1 className="text-3xl md:text-5xl font-semibold leading-tight max-w-3xl">Construire durablement, rénover avec exigence.</h1>
<p className="mt-4 text-white/90 md:text-lg max-w-2xl">Gros œuvre, rénovation et second œuvre pour particuliers et professionnels. Devis sous 48h.</p>
<div className="mt-8 flex flex-wrap gap-3">
<a href="/services" className="inline-flex items-center rounded-2xl border border-white/30 px-5 py-3 font-medium text-white hover:bg-white/10">Nos services</a>
</div>
</Container>
</section>


<ServicesTeaser />
<RefsTeaser />
<ContactCta />
</>
)
}

