// src/components/home/HeroCarousel.tsx
'use client'

import { useKeenSlider } from 'keen-slider/react'
import type { KeenSliderPlugin } from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import { REALISATIONS } from '@/lib/constants'

const HERO_LEAD = '/images/placeholders/Carroussel_1.png'

/** Autoplay 3s, pause drag/survol/onglet inactif */
const autoplay: KeenSliderPlugin = (slider) => {
  let timeout: ReturnType<typeof setTimeout> | undefined
  let mouseOver = false
  const clear = () => timeout && clearTimeout(timeout)
  const next = () => {
    clear()
    if (mouseOver) return
    timeout = setTimeout(() => slider.next(), 3000)
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

/* ===== Types sûrs ===== */
type SlideLead = { kind: 'lead'; src: string }
type SlideReal = {
  kind: 'real'
  src: string
  slug: string
  title: string
  city: string
  year: number
  type: 'Construction' | 'Rénovation'
}
type Slide = SlideLead | SlideReal

export function HeroCarousel() {
  // 1) Construit les slides "réalisations" seulement si on a un visuel
  const realCovers: SlideReal[] = REALISATIONS.reduce<SlideReal[]>((acc, r) => {
    const src = r.cover || r.gallery?.[0]
    if (!src) return acc
    acc.push({
      kind: 'real',
      src,
      slug: r.slug,
      title: r.title,
      city: r.city,
      year: r.year,
      type: r.type,
    })
    return acc
  }, [])

  // 2) Slide d’ouverture + déduplication
  const lead: SlideLead = { kind: 'lead', src: HERO_LEAD }
  const seen = new Set<string>()
  const slides: Slide[] = [lead, ...realCovers].filter((s) => {
    if (seen.has(s.src)) return false
    seen.add(s.src)
    return true
  })

  // 3) Keen slider
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    { loop: true, mode: 'snap', drag: true, slides: { perView: 1 } },
    [autoplay]
  )

  return (
    <div ref={sliderRef} className="keen-slider h-[80vh] md:h-[90vh]">
      {slides.map((s, i) => (
        <div key={('slug' in s ? s.slug : s.src)} className="keen-slider__slide relative">
          <Image
            src={s.src}
            alt={'title' in s ? s.title : 'AKSO — Hero'}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Légende uniquement pour les réalisations */}
          {'kind' in s && s.kind === 'real' && (
            <div className="absolute bottom-10 left-6 md:left-16 text-white max-w-lg">
              <div className="border-l-4 pl-4 border-white">
                <h2 className="text-2xl md:text-4xl font-semibold">{s.title}</h2>
                <p className="mt-1 text-sm md:text-base opacity-80">
                  {s.city} ({s.year})
                </p>
                <p className="mt-1 text-sm md:text-base uppercase tracking-wide">{s.type}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
