'use client'

import { HeroCarousel } from '@/components/home/HeroCarousel'
import { ServicesTeaser } from '@/components/home/ServicesTeaser'
import { ProjectsGallery } from '@/components/home/ProjectsGallery'

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ServicesTeaser />
      <ProjectsGallery />
    </>
  )
}
