'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import { REALISATIONS } from '@/lib/constants'

export function HeroCarousel() {
  const [sliderRef] = useKeenSlider({ loop: true, slides: { perView: 1 }, mode: 'snap', drag: true })

  return (
    <div ref={sliderRef} className="keen-slider h-[80vh] md:h-[90vh]">
      {REALISATIONS.map((item) => (
        <div key={item.slug} className="keen-slider__slide relative">
          <Image src={item.cover} alt={item.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-10 left-6 md:left-16 text-white max-w-lg">
            <div className="border-l-4 pl-4 border-white">
              <h2 className="text-2xl md:text-4xl font-semibold">{item.title}</h2>
              <p className="mt-1 text-sm md:text-base opacity-80">{item.city} ({item.year})</p>
              <p className="mt-1 text-sm md:text-base uppercase tracking-wide">{item.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
