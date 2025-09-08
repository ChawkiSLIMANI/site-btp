import { notFound } from 'next/navigation'

export default function DevisPage() {

   notFound()

   
  // return (
  //   <section className="py-16">
  //     <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
  //       <h1 className="text-4xl font-bold mb-6">Demander un devis</h1>
  //       <p className="text-gray-700 mb-8">
  //         Remplissez ce formulaire : nous revenons vers vous sous 48h avec une estimation personnalisée.
  //       </p>

  //       <form
  //         name="devis"
  //         method="POST"
  //         data-netlify="true"
  //         netlify-honeypot="bot-field"
  //         action="/merci"
  //         className="grid grid-cols-1 gap-4"
  //       >
  //         {/* Champs requis par Netlify */}
  //         <input type="hidden" name="form-name" value="devis" />
  //         <p className="hidden">
  //           <label>
  //             Ne pas remplir: <input name="bot-field" />
  //           </label>
  //         </p>

  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //           <div>
  //             <label className="block mb-1">Nom *</label>
  //             <input className="w-full border p-3 rounded" name="name" required />
  //           </div>
  //           <div>
  //             <label className="block mb-1">Email *</label>
  //             <input type="email" className="w-full border p-3 rounded" name="email" required />
  //           </div>
  //         </div>

  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //           <div>
  //             <label className="block mb-1">Téléphone</label>
  //             <input type="tel" className="w-full border p-3 rounded" name="phone" />
  //           </div>
  //           <div>
  //             <label className="block mb-1">Ville</label>
  //             <input className="w-full border p-3 rounded" name="city" />
  //           </div>
  //         </div>

  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  //           <div>
  //             <label className="block mb-1">Type de travaux *</label>
  //             <select className="w-full border p-3 rounded" name="type" required>
  //               <option value="">Sélectionner</option>
  //               <option>Construction</option>
  //               <option>Rénovation</option>
  //               <option>Second œuvre</option>
  //             </select>
  //           </div>
  //           <div>
  //             <label className="block mb-1">Surface (m²)</label>
  //             <input type="number" min="0" className="w-full border p-3 rounded" name="surface" />
  //           </div>
  //           <div>
  //             <label className="block mb-1">Délai souhaité</label>
  //             <select className="w-full border p-3 rounded" name="delay">
  //               <option value="">Flexible</option>
  //               <option>Moins d’un mois</option>
  //               <option>1–3 mois</option>
  //               <option>3–6 mois</option>
  //               <option>6+ mois</option>
  //             </select>
  //           </div>
  //         </div>

  //         <div>
  //           <label className="block mb-1">Budget estimé</label>
  //           <select className="w-full border p-3 rounded" name="budget">
  //             <option value="">À définir</option>
  //             <option>Jusqu’à 10 000 €</option>
  //             <option>10 000 – 50 000 €</option>
  //             <option>50 000 – 150 000 €</option>
  //             <option>150 000 € +</option>
  //           </select>
  //         </div>

  //         <div>
  //           <label className="block mb-1">Description du projet *</label>
  //           <textarea
  //             className="w-full border p-3 rounded min-h-[140px]"
  //             name="message"
  //             required
  //           />
  //         </div>

  //         <div className="flex items-center gap-2">
  //           <input id="consent" type="checkbox" required className="h-4 w-4" />
  //           <label htmlFor="consent" className="text-sm">
  //             J’accepte que mes données soient utilisées pour me recontacter.
  //           </label>
  //         </div>

  //         <div className="pt-2">
  //           <button
  //             className="bg-cyan-700 hover:bg-cyan-800 text-white font-medium px-6 py-3 rounded-2xl"
  //             type="submit"
  //           >
  //             Envoyer la demande
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </section>
  // );
}
