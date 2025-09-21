// Génère: /images/realisations/<prefix>_1.png ... _N.png
export function gallery(prefix: string, count: number) {
  return Array.from({ length: count }, (_, i) =>
    `/images/realisations/${prefix}_${i + 1}.png`
  );
}
