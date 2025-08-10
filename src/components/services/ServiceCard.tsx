import Image from "next/image";
import type { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <Image
        src={service.image}
        alt={service.title}
        width={800}
        height={500}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
        <p className="text-gray-600 mb-4">{service.description}</p>
        {service.bullets.length > 0 && (
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            {service.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
