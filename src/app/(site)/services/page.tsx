import { Services } from '@/components/home/Services'

export const metadata = {
  title: 'Mes Offres - Aksou Coaching',
  description: 'Coaching individuel, ateliers collectifs et mentoring pour leaders.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <Services />
    </main>
  )
}
