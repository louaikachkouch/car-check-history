import { ShieldCheck, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white">
                Hydrolic<span className="text-blue-500">Cras</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Le fournisseur de rapports d'historique de véhicules le plus fiable au monde. Nous vous aidons à acheter en confiance en révélant la vérité cachée.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Produit</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Exemple de Rapport</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tarifs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Décodeur VIN</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Plaque d'Immatriculation</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Entreprise</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">À Propos</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Presse</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Légal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Conditions d'Utilisation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Politique des Cookies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">RGPD</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2026 AutoCheckPro. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <span>🇫🇷 France</span>
            <span>Français</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
