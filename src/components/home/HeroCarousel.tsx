// src/components/home/HeroCarousel.tsx
'use client'

import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import type { KeenSliderPlugin } from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import { SITE_CONFIG } from '@/lib/constants'

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
      slides: { perView: 1, spacing: 0 },
      renderMode: 'precision',
    },
    [autoplay]
  )

  const slides = SITE_CONFIG.home.hero.slides;

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
      {slides.map((slide, i) => (
        <div key={i} className="keen-slider__slide relative min-h-full">
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="100vw"
            quality={90}
            priority={i === 0}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}
    </div>
  )
}
