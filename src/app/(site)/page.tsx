import { Hero } from '@/components/home/Hero'
import { Features } from '@/components/home/Features'
import { Incarnation } from '@/components/home/Incarnation'
import { Reviews } from '@/components/home/Reviews'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Incarnation />
      <Reviews />
    </>
  )
}
