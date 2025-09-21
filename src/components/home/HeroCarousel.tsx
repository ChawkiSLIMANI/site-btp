'use client'

import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import type { KeenSliderPlugin } from 'keen-slider'
import 'keen-slider/keen-slider.min.css'

import { REALISATIONS } from '@/lib/constants'

/** Images “tête de carrousel” (avant les réalisations) */
const HERO_LEADS: string[] = [
  '/images/placeholders/Carroussel_1.png',
  '/images/placeholders/Carroussel_2.webp',
  '/images/placeholders/Carroussel_3.jpg',
]

/** Autoplay propre (3s), pause au drag/survol/onglet inactif */
const autoplay: KeenSliderPlugin = (slider) => {
  let timeout: ReturnType<typeof setTimeout> | undefined
  let mouseOver = false

  const clear = () => timeout && clearTimeout(timeout)
  const next = () => {
    clear()
    if (mouseOver) return
    timeout = setTimeout(() => slider.next(), 4000)
  }

  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => { mouseOver = true; clear() })
    slider.container.addEventListener('mouseout', () => { mouseOver = false; next() })
    const onVis = () => (document.hidden ? clear() : next())
    document.addEventListener('visibilitychange', onVis)

    next()
    slider.on('destroyed', () => {
      clear()
      document.removeEventListener('visibilitychange', onVis)
    })
  })

  slider.on('dragStarted', clear)
  slider.on('animationEnded', next)
  slider.on('updated', next)
}

/** Slide minimale : les “leads” ont juste un src, les “reals” ajoutent des infos */
type Slide = {
  src: string
  slug?: string
  title?: string
  city?: string
  year?: number
  type?: string
}

export function HeroCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    { loop: true, mode: 'snap', drag: true, slides: { perView: 1 } },
    [autoplay]
  )

  // 1) Slides “leads”
  const leadSlides: Slide[] = HERO_LEADS.map((src) => ({ src }))

  // 2) Slides depuis REALISATIONS (avec métadonnées pour l’overlay)
  const realSlides: Slide[] = REALISATIONS.map((r) => ({
    src: r.cover || r.gallery?.[0] || '',
    slug: r.slug,
    title: r.title,
    city: r.city,
    year: r.year,
    type: r.type,
  })).filter((s) => !!s.src)

  // 3) Concat + déduplication par src
  const seen = new Set<string>()
  const slides: Slide[] = [...leadSlides, ...realSlides].filter((s) =>
    seen.has(s.src) ? false : (seen.add(s.src), true)
  )

  return (
    <div ref={sliderRef} className="keen-slider h-[80vh] md:h-[90vh]">
      {slides.map((s, i) => (
        <div key={`${s.src}-${i}`} className="keen-slider__slide relative">
          <Image
            src={s.src}
            alt={s.title ?? 'AKSO Construction'}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Overlay texte seulement pour les slides “réalisations” (title présent) */}
          {s.title && (
            <div className="absolute bottom-10 left-6 md:left-16 text-white max-w-lg">
              <div className="border-l-4 pl-4 border-white">
                <h2 className="text-2xl md:text-4xl font-semibold">{s.title}</h2>
                <p className="mt-1 text-sm md:text-base opacity-80">
                  {s.city} {s.year ? `(${s.year})` : ''}
                </p>
                {s.type && (
                  <p className="mt-1 text-sm md:text-base uppercase tracking-wide">
                    {s.type}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
