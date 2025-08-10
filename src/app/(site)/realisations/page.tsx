"use client";

import { useState } from "react";
import { REALISATIONS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Lightbox } from "@/components/realisations/Lightbox";

export default function RealisationsPage() {
  const [typeFilter, setTypeFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const types = Array.from(new Set(REALISATIONS.map(r => r.type)));
  const cities = Array.from(new Set(REALISATIONS.map(r => r.city)));
  const years = Array.from(new Set(REALISATIONS.map(r => r.year))).sort((a, b) => b - a);

  const filteredRealisations = REALISATIONS.filter(r => {
    return (
      (typeFilter ? r.type === typeFilter : true) &&
      (cityFilter ? r.city === cityFilter : true) &&
      (yearFilter ? r.year === Number(yearFilter) : true)
    );
  });

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  return (
    <section className="py-16">
      <Container>
        <h1 className="text-4xl font-bold mb-6">Nos réalisations</h1>

        {/* Filtres */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} className="border p-2 rounded">
            <option value="">Type</option>
            {types.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
          <select value={cityFilter} onChange={e => setCityFilter(e.target.value)} className="border p-2 rounded">
            <option value="">Ville</option>
            {cities.map(city => <option key={city} value={city}>{city}</option>)}
          </select>
          <select value={yearFilter} onChange={e => setYearFilter(e.target.value)} className="border p-2 rounded">
            <option value="">Année</option>
            {years.map(year => <option key={year} value={year}>{year}</option>)}
          </select>
        </div>

        {/* Grille des réalisations */}
        {filteredRealisations.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRealisations.map((realisation, idx) => (
              <div
                key={realisation.slug}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                onClick={() => openLightbox(realisation.gallery, 0)}
              >
                <img
                  src={realisation.cover}
                  alt={realisation.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-1">{realisation.title}</h2>
                  <p className="text-sm text-gray-500 mb-3">
                    {realisation.city} — {realisation.year}
                  </p>
                  {realisation.excerpt && (
                    <p className="text-gray-600 text-sm">{realisation.excerpt}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Aucune réalisation ne correspond à vos filtres.</p>
        )}
      </Container>

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
