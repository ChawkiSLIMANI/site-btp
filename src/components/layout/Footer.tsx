export function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-6 text-center text-sm">
        © {new Date().getFullYear()} Entreprise BTP — Tous droits réservés
      </div>
    </footer>
  )
}