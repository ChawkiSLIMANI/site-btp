"use client";

import { useEffect } from "react";

type LightboxProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  // Fermer avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <button
        className="absolute top-4 right-6 text-white text-2xl"
        onClick={onClose}
        aria-label="Fermer"
      >
        ✕
      </button>
      <button
        className="absolute left-4 text-white text-2xl"
        onClick={onPrev}
        aria-label="Image précédente"
      >
        ◀
      </button>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="max-h-[80vh] max-w-[90vw] object-contain rounded"
      />
      <button
        className="absolute right-4 text-white text-2xl"
        onClick={onNext}
        aria-label="Image suivante"
      >
        ▶
      </button>
    </div>
  );
}
