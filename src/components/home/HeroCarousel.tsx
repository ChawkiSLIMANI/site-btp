'use client'

import { useKeenSlider } from 'keen-slider/react'
import type { KeenSliderPlugin } from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import { REALISATIONS } from '@/lib/constants'

/**
 * Plugin autoplay officiel, propre & typé.
 * - Avance toutes les 3s
 * - Pause au drag
 * - Pause au survol
 * - Pause quand l’onglet est inactif, reprise sinon
 */
const autoplay: KeenSliderPlugin = (slider) => {
  let timeout: ReturnType<typeof setTimeout> | undefined
  let mouseOver = false

  const clear = () => { if (timeout) clearTimeout(timeout) }
  const next = () => {
    clear()
    if (mouseOver) return
    timeout = setTimeout(() => slider.next(), 3000) // 3s
  }

  slider.on('created', () => {
    // Pause au survol
    slider.container.addEventListener('mouseover', () => { mouseOver = true; clear() })
    slider.container.addEventListener('mouseout', () => { mouseOver = false; next() })
    // Pause si onglet caché
    const onVis = () => (document.hidden ? clear() : next())
    document.addEventListener('visibilitychange', onVis)

    next()

    // Cleanup quand le slider est détruit
    slider.on('destroyed', () => {
      clear()
      document.removeEventListener('visibilitychange', onVis)
    })
  })

  slider.on('dragStarted', clear)
  slider.on('animationEnded', next)
  slider.on('updated', next)
}

export function HeroCarousel() {
  // ⛔️ Ne PAS mettre de 2e générique ici : <HTMLDivElement> suffit
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: 'snap',
      drag: true,
      slides: { perView: 1 }, // ✅ signature valide v6
    },
    [autoplay] // ✅ plugins sous forme de tableau
  )

  return (
    <div ref={sliderRef} className="keen-slider h-[80vh] md:h-[90vh]">
      {REALISATIONS.map((item) => (
        <div key={item.slug} className="keen-slider__slide relative">
          <Image src={item.cover} alt={item.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-10 left-6 md:left-16 text-white max-w-lg">
            <div className="border-l-4 pl-4 border-white">
              <h2 className="text-2xl md:text-4xl font-semibold">{item.title}</h2>
              <p className="mt-1 text-sm md:text-base opacity-80">
                {item.city} ({item.year})
              </p>
              <p className="mt-1 text-sm md:text-base uppercase tracking-wide">{item.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
