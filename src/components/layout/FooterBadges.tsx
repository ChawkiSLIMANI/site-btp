// src/components/layout/FooterBadges.tsx (NOUVEAU – optionnel)
export function FooterBadges() {
  const items = [
    { label: "Assuré SMA BTP" },
    { label: "Membre CMA Paris" },
    { label: "Membre FFB Île-de-France" },
  ];
  return (
    <div className="container mx-auto px-4 pb-4 flex flex-wrap gap-2 text-xs text-white/90">
      {items.map((i) => (
        <span
          key={i.label}
          className="inline-flex items-center rounded-full border border-white/25 px-3 py-1"
        >
          {i.label}
        </span>
      ))}
    </div>
  );
}
