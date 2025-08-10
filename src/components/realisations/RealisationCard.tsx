import Image from "next/image";
import type { Realisation } from "@/lib/types";

export function RealisationCard({ realisation }: { realisation: Realisation }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <Image
        src={realisation.cover}
        alt={realisation.title}
        width={800}
        height={500}
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
  );
}
