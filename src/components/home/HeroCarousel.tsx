// src/components/home/HeroCarousel.tsx
'use client'

import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import type { KeenSliderPlugin } from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import slide1 from '@public/images/placeholders/HeroCarroussel_1.png'
import slide2 from '@public/images/placeholders/HeroCarroussel_2.png'
import slide3 from '@public/images/placeholders/HeroCarroussel_3.jpg'
import slide4 from '@public/images/placeholders/HeroCarroussel_4.png'

const HERO_SLIDES = [
  { src: slide1, alt: 'Construction AKSO — Chantier 1' },
  { src: slide2, alt: 'Construction AKSO — Chantier 2' },
  { src: slide3, alt: 'Construction AKSO — Chantier 3' },
  { src: slide4, alt: 'Construction AKSO — Chantier 4' }
] as const

const autoplay: KeenSliderPlugin = (slider) => {
  let timeout: ReturnType<typeof setTimeout> | undefined
  let mouseOver = false
  const clear = () => timeout && clearTimeout(timeout)
  const next = () => { clear(); if (!mouseOver) timeout = setTimeout(() => slider.next(), 4000) }

  slider.on('created', () => {
    const container = slider.container

    const handleMouseOver = () => { mouseOver = true; clear() }
    const handleMouseOut = () => { mouseOver = false; next() }
    const handleVisibility = () => (document.hidden ? clear() : next())

    container.addEventListener('mouseover', handleMouseOver)
    container.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('visibilitychange', handleVisibility)

    next()

    slider.on('destroyed', () => {
      clear()
      container.removeEventListener('mouseover', handleMouseOver)
      container.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('visibilitychange', handleVisibility)
    })
  })
  slider.on('dragStarted', clear)
  slider.on('animationEnded', next)
  slider.on('updated', next)
}

export function HeroCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: 'snap',
      drag: true,
      slides: { perView: 1, spacing: 0 }, // ✅ pas d’espace entre les slides
      renderMode: 'precision',            // ✅ évite les arrondis qui laissent un filet
    },
    [autoplay]
  )

  return (
    <div
      id="hero"
      ref={sliderRef}
      className="keen-slider h-screen min-h-screen overflow-hidden -mt-px"
      style={{
        width: '100vw',
        marginLeft: 'calc((100vw - 100%) / -2)',
        marginRight: 'calc((100vw - 100%) / -2)',
        minHeight: '100vh',
        height: '100svh',
      }}
    >
      {HERO_SLIDES.map((slide, i) => (
        <div key={slide.src.src} className="keen-slider__slide relative min-h-full">
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="100vw"
            quality={90}
            priority={i === 0}
            placeholder="blur"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}
    </div>
  )
}
