// Génère une liste de chemins depuis /public/images/realisations
export function gallery(
  name: string,
  countOrIndices: number | number[],
  ext = ".png",
  base = "/images/realisations"
): string[] {
  const indices = Array.isArray(countOrIndices)
    ? countOrIndices
    : Array.from({ length: countOrIndices }, (_, i) => i + 1);

  return indices.map((i) => `${base}/${name}_${i}${ext}`);
}
