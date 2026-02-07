import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Car, 
  FileText, 
  Wrench, 
  TrendingUp,
  AlertTriangle,
  Gauge,
  Users,
  Calendar,
  Download
} from 'lucide-react';

export function SampleReport() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Exemple de Rapport
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Découvrez ce que contient un rapport TrueCar
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Explorez un exemple complet de rapport d'historique de véhicule pour comprendre 
              toutes les informations auxquelles vous aurez accès.
            </p>
          </div>
        </div>
      </section>

      {/* Sample Report Preview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Vehicle Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium mb-3">
                      <CheckCircle2 className="w-4 h-4" />
                      Titre Clair
                    </div>
                    <h2 className="text-2xl font-bold">2022 Mercedes-Benz C300</h2>
                    <p className="text-blue-100">VIN: WDDWF8DB5NR123456</p>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                    <Download className="w-5 h-5" />
                    Télécharger PDF
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 border-b border-slate-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Gauge className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">32,450</p>
                  <p className="text-sm text-slate-500">Kilomètres</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">1</p>
                  <p className="text-sm text-slate-500">Propriétaire</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">8</p>
                  <p className="text-sm text-slate-500">Entretiens</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">0</p>
                  <p className="text-sm text-slate-500">Accidents</p>
                </div>
              </div>

              {/* Report Sections */}
              <div className="p-6 space-y-8">
                {/* Vehicle Details */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Car className="w-5 h-5 text-blue-600" />
                    Détails du Véhicule
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Marque', value: 'Mercedes-Benz' },
                      { label: 'Modèle', value: 'C300' },
                      { label: 'Année', value: '2022' },
                      { label: 'Finition', value: '4MATIC' },
                      { label: 'Moteur', value: '2.0L Turbo' },
                      { label: 'Transmission', value: 'Automatique' },
                      { label: 'Carburant', value: 'Essence' },
                      { label: 'Couleur', value: 'Noir Obsidienne' },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-lg p-3">
                        <p className="text-xs text-slate-500">{item.label}</p>
                        <p className="font-semibold text-slate-900">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Title History */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Historique du Titre
                  </h3>
                  <div className="space-y-3">
                    {[
                      { date: '15-03-2022', event: 'Première immatriculation', location: 'Tunis, Tunisie', status: 'clean' },
                      { date: '20-06-2023', event: 'Renouvellement', location: 'Tunis, Tunisie', status: 'clean' },
                      { date: '10-01-2024', event: 'Contrôle technique', location: 'Sousse, Tunisie', status: 'clean' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-grow">
                          <p className="font-semibold text-slate-900">{item.event}</p>
                          <p className="text-sm text-slate-500">{item.date} • {item.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Value */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Valeur Marché Estimée
                  </h3>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                    <p className="text-4xl font-bold text-blue-600 mb-2">185,000 DT</p>
                    <p className="text-slate-600">Fourchette: 170,000 DT - 200,000 DT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-slate-600 mb-6">
                Prêt à vérifier l'historique d'un véhicule ?
              </p>
              <Link 
                to="/"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
              >
                <ShieldCheck className="w-5 h-5" />
                Vérifier un VIN
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
