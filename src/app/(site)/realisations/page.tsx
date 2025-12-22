import { Reviews } from '@/components/home/Reviews'

export const metadata = {
  title: 'Réalisations & Témoignages - Aksou Coaching',
  description: 'Ce que disent les leaders accompagnés par Aksou.',
}

export default function RealisationsPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <Reviews />
    </main>
  )
}
