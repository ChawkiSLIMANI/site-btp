export function defaultMetadata({ title, description }: { title: string; description: string }) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "fr_FR",
    },
  };
}