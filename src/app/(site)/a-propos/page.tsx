import { About } from '@/components/home/About'

export const metadata = {
  title: 'À propos - Aksou Coaching',
  description: 'Coach spécialisé pour les leaders sous pression.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <About />
    </main>
  )
}
