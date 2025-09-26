// src/components/home/HeroCarousel.tsx
'use client'

import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import type { KeenSliderPlugin } from 'keen-slider'
import 'keen-slider/keen-slider.min.css'

const HERO_SLIDES = [
  '/images/placeholders/Carroussel_1.png',
  '/images/placeholders/Carroussel_2.webp',
  '/images/placeholders/Carroussel_3.jpg',
] as const

const autoplay: KeenSliderPlugin = (slider) => {
  let timeout: ReturnType<typeof setTimeout> | undefined
  let mouseOver = false
  const clear = () => timeout && clearTimeout(timeout)
  const next = () => { clear(); if (!mouseOver) timeout = setTimeout(() => slider.next(), 4000) }

  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => { mouseOver = true;  clear() })
    slider.container.addEventListener('mouseout',  () => { mouseOver = false; next() })
    const onVis = () => (document.hidden ? clear() : next())
    document.addEventListener('visibilitychange', onVis)
    next()
    slider.on('destroyed', () => { clear(); document.removeEventListener('visibilitychange', onVis) })
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
      className="keen-slider h-[80vh] md:h-[90vh] overflow-hidden -mt-px"
      style={{
        width: '100vw',
        marginLeft: 'calc((100vw - 100%) / -2)',
        marginRight: 'calc((100vw - 100%) / -2)',
      }}
    >
      {HERO_SLIDES.map((src, i) => (
        <div key={src} className="keen-slider__slide relative">
          <Image
            src={src}
            alt="AKSO Construction"
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
    </div>
  )
}
