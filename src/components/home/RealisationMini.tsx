'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'

type Realisation = {
  slug: string
  title: string
  type: string
  city: string
  year: number
  cover: string
  gallery: string[]
  excerpt?: string
}

export function RealisationMini({ data }: { data: Realisation }) {
  const images = useMemo(
    () => (data.gallery?.length ? data.gallery : [data.cover]),
    [data.gallery, data.cover]
  )
  const [idx, setIdx] = useState(0)
  const total = images.length

  const prev = () => setIdx((i) => (i - 1 + total) % total)
  const next = () => setIdx((i) => (i + 1) % total)
  const goTo = (i: number) => setIdx(i)

  return (
    <div className="relative overflow-hidden rounded-2xl shadow bg-white group">
      {/* Image courante */}
      <div className="relative w-full h-60">
        <Image
          src={images[idx]}
          alt={`${data.title} — photo ${idx + 1}`}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          priority={idx === 0}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
      </div>

      {/* Overlay titre */}
      <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
        <div className="border-l-4 border-white pl-3">
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <p className="text-sm opacity-90">{data.city} — {data.type}</p>
        </div>
      </div>

      {/* Flèches (affichées si >1 image) */}
      {total > 1 && (
        <>
          <button
            aria-label="Image précédente"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white w-9 h-9 grid place-items-center hover:bg-black/60"
          >
            ‹
          </button>
          <button
            aria-label="Image suivante"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white w-9 h-9 grid place-items-center hover:bg-black/60"
          >
            ›
          </button>

          {/* Bullets */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Aller à l’image ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 w-2 rounded-full ${i === idx ? 'bg-white' : 'bg-white/50'} hover:bg-white/80`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
