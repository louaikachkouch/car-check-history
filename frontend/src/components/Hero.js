import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Shield, CheckCircle2 } from 'lucide-react';

export function Hero() {
  const [vin, setVin] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (vin.trim()) {
      navigate(`/report/${vin.trim().toUpperCase()}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-blue-100/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
              <Shield className="w-3 h-3" />
              Partenaire de Données Officiel
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-4 sm:mb-6 tracking-tight">
              Découvrez la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Vérité</span> sur Chaque Véhicule.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-10 leading-relaxed max-w-lg">
              N'achetez pas un problème. Découvrez les accidents cachés, les falsifications de kilométrage et les véhicules volés instantanément avec une vérification VIN.
            </p>

            {/* Search Box */}
            <div className="bg-white p-2 rounded-2xl shadow-2xl shadow-blue-900/5 border border-slate-200 flex flex-col sm:flex-row gap-2 max-w-lg">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-12 pr-4 h-14 border-0 bg-transparent text-lg focus:outline-none placeholder:text-slate-400"
                  placeholder="Entrez le numéro VIN"
                />
              </div>
              <button 
                onClick={handleSearch}
                className="h-14 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02]"
              >
                Vérifier
              </button>
            </div>

            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Livraison Instantanée
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Sources Officielles
              </span>
            </div>
          </div>

          {/* Right Content - Report Preview */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
              {/* Mock Report Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">2023 Tesla Model 3</h3>
                  <p className="text-sm text-slate-500">VIN: 5YJ3E1EA5PF******</p>
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Titre Clair
                </div>
              </div>

              {/* Mock Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-slate-900">0</p>
                  <p className="text-xs text-slate-500">Accidents</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-slate-900">1</p>
                  <p className="text-xs text-slate-500">Propriétaire</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-slate-900">12k</p>
                  <p className="text-xs text-slate-500">Km</p>
                </div>
              </div>

              {/* Check Items */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Aucun accident signalé</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Pas de falsification kilométrique</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Non signalé volé</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              ✓ Vérifié
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
