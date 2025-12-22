import { Contact } from '@/components/home/Contact'

export const metadata = {
  title: 'Contact - Aksou Coaching',
  description: 'Prenez rendez-vous pour un coaching transformateur.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <Contact />
    </main>
  )
}
