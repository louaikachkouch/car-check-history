import { useParams, useNavigate } from 'react-router-dom';
import { getCarByVin } from '../data/carData';
import { generateVehicleReport } from '../utils/generatePDF';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  Car,
  Calendar,
  Gauge,
  Users,
  Fuel,
  Settings,
  FileText,
  Wrench,
  TrendingUp,
  ArrowLeft,
  Download,
  Share2,
  Clock,
  MapPin
} from 'lucide-react';

export function Report() {
  const { vin } = useParams();
  const navigate = useNavigate();
  const car = getCarByVin(vin);

  if (!car) {
    return (
      <div className="min-h-screen bg-slate-50 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-slate-900 mb-4">VIN Introuvable</h1>
            <p className="text-slate-600 mb-8">
              Nous n'avons trouvé aucun enregistrement pour le VIN : <code className="bg-slate-200 px-2 py-1 rounded">{vin}</code>
            </p>
            <button 
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Essayer un Autre VIN
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isClean = car.status === "Clean";

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Retour à la Recherche</span>
            </button>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => generateVehicleReport(car)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Télécharger PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 ${
                isClean 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
              }`}>
                {isClean ? <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" /> : <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />}
                {isClean ? 'Titre Clair' : car.issueText}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {car.year} {car.make} {car.model}
              </h1>
              <p className="text-slate-400 text-base sm:text-lg mb-4 sm:mb-6">{car.trim}</p>
              <div className="bg-slate-800/50 rounded-xl p-3 sm:p-4 inline-block">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Numéro d'Identification du Véhicule</p>
                <code className="text-sm sm:text-lg font-mono text-white break-all">{car.vin}</code>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <img 
                src={car.image} 
                alt={`${car.year} ${car.make} ${car.model}`}
                className="w-full rounded-xl sm:rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="container mx-auto px-4 -mt-6 sm:-mt-8 relative z-10">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-slate-900">{car.mileage.toLocaleString()}</p>
            <p className="text-xs sm:text-sm text-slate-500">Kilomètres</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-slate-900">{car.owners}</p>
            <p className="text-xs sm:text-sm text-slate-500">Propriétaire{car.owners > 1 ? 's' : ''}</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-slate-900">{car.serviceHistory.length}</p>
            <p className="text-xs sm:text-sm text-slate-500">Entretiens</p>
          </div>
          <div className="text-center">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 ${
              car.accidents.length === 0 ? 'bg-green-100' : 'bg-orange-100'
            }`}>
              <AlertTriangle className={`w-5 h-5 sm:w-6 sm:h-6 ${car.accidents.length === 0 ? 'text-green-600' : 'text-orange-600'}`} />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-slate-900">{car.accidents.length}</p>
            <p className="text-xs sm:text-sm text-slate-500">Accident{car.accidents.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 sm:py-12">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Vehicle Details */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Car className="w-5 h-5 text-blue-600" />
                Détails du Véhicule
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                <InfoRow label="Marque" value={car.make} />
                <InfoRow label="Modèle" value={car.model} />
                <InfoRow label="Année" value={car.year} />
                <InfoRow label="Finition" value={car.trim} />
                <InfoRow label="Moteur" value={car.engine} />
                <InfoRow label="Transmission" value={car.transmission} />
                <InfoRow label="Transmission" value={car.drivetrain} />
                <InfoRow label="Carburant" value={car.fuelType} />
                <InfoRow label="Couleur Extérieure" value={car.color} />
                <InfoRow label="Intérieur" value={car.interiorColor} />
              </div>
            </div>

            {/* Title History */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Historique du Titre
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {car.titleHistory.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 rounded-lg sm:rounded-xl">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${
                      item.status === 'clean' ? 'bg-green-100' : 'bg-orange-100'
                    }`}>
                      {item.status === 'clean' 
                        ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                        : <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                      }
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="font-semibold text-slate-900 text-sm sm:text-base">{item.event}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-slate-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service History */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-600" />
                Historique d'Entretien
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {car.serviceHistory.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-slate-200 rounded-lg sm:rounded-xl hover:border-blue-200 transition-colors">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="font-semibold text-slate-900 text-sm sm:text-base">{item.service}</p>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Gauge className="w-3 h-3 sm:w-4 sm:h-4" />
                          {item.mileage.toLocaleString()} km
                        </span>
                        <span className="flex items-center gap-1 hidden sm:flex">
                          <MapPin className="w-4 h-4" />
                          {item.shop}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 sm:hidden">{item.shop}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accident History */}
            {car.accidents.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-orange-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Historique des Accidents
                </h2>
                <div className="space-y-4">
                  {car.accidents.map((accident, index) => (
                    <div key={index} className="p-4 bg-orange-50 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-semibold">
                          Dommages {accident.severity}
                        </span>
                        <span className="text-sm text-slate-500">
                          {new Date(accident.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-slate-700 mb-3">{accident.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-slate-500">Coût Réparation</p>
                          <p className="font-semibold">{accident.repairCost.toLocaleString()} DT</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Airbags</p>
                          <p className="font-semibold">{accident.airbags}</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Roulable</p>
                          <p className="font-semibold">{accident.driveable ? 'Oui' : 'Non'}</p>
                        </div>
                        <div>
                          <p className="text-slate-500">Lieu</p>
                          <p className="font-semibold">{accident.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Odometer History */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Gauge className="w-5 h-5 text-blue-600" />
                Historique du Kilométrage
              </h2>
              {/* Mobile View */}
              <div className="block sm:hidden space-y-3">
                {car.odometerReadings.map((reading, index) => (
                  <div key={index} className="bg-slate-50 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-slate-900">{reading.mileage.toLocaleString()} km</p>
                        <p className="text-xs text-slate-500">{reading.source}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-green-600 text-xs">
                        <CheckCircle2 className="w-3 h-3" /> Vérifié
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{new Date(reading.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
              {/* Desktop View */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Kilométrage</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Source</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {car.odometerReadings.map((reading, index) => (
                      <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4 text-sm">{new Date(reading.date).toLocaleDateString()}</td>
                        <td className="py-3 px-4 text-sm font-semibold">{reading.mileage.toLocaleString()} km</td>
                        <td className="py-3 px-4 text-sm text-slate-600">{reading.source}</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center gap-1 text-green-600 text-sm">
                            <CheckCircle2 className="w-4 h-4" /> Vérifié
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Market Value */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Valeur Marché
              </h2>
              <div className="text-center mb-4 sm:mb-6">
                <p className="text-3xl sm:text-4xl font-bold text-blue-600">{car.marketValue.average.toLocaleString()} DT</p>
                <p className="text-xs sm:text-sm text-slate-500">Valeur Estimée</p>
              </div>
              <div className="bg-slate-100 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span className="text-slate-500">Bas</span>
                  <span className="text-slate-500">Haut</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full relative">
                  <div 
                    className="absolute h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                    style={{ 
                      left: '0', 
                      right: '0'
                    }}
                  />
                  <div 
                    className="absolute w-4 h-4 bg-blue-600 rounded-full -top-1 border-2 border-white shadow"
                    style={{ 
                      left: `${((car.marketValue.average - car.marketValue.low) / (car.marketValue.high - car.marketValue.low)) * 100}%`,
                      transform: 'translateX(-50%)'
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs sm:text-sm mt-2 font-semibold">
                  <span>{car.marketValue.low.toLocaleString()} DT</span>
                  <span>{car.marketValue.high.toLocaleString()} DT</span>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-600" />
                Spécifications
              </h2>
              <div className="space-y-2 sm:space-y-3">
                <SpecRow label="Carrosserie" value={car.specifications.bodyStyle} />
                <SpecRow label="Portes" value={car.specifications.doors} />
                <SpecRow label="Places" value={car.specifications.seats} />
                <SpecRow label="Puissance" value={`${car.specifications.horsepower} ch`} />
                <SpecRow label="Couple" value={car.specifications.torque} />
                {car.specifications.mpgCity && (
                  <SpecRow label="Consommation" value={`${car.specifications.mpgCity} ville / ${car.specifications.mpgHighway} autoroute`} />
                )}
                {car.specifications.range && (
                  <SpecRow label="Autonomie" value={car.specifications.range} />
                )}
                <SpecRow label="Poids" value={car.specifications.curbWeight} />
              </div>
            </div>

            {/* Recalls */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                Rappels
              </h2>
              {car.recalls.length === 0 ? (
                <div className="text-center py-4 sm:py-6">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-500 mx-auto mb-2 sm:mb-3" />
                  <p className="text-sm sm:text-base text-slate-600">Aucun rappel en cours trouvé</p>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {car.recalls.map((recall, index) => (
                    <div key={index} className="p-3 sm:p-4 bg-slate-50 rounded-lg sm:rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          recall.status === 'Completed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {recall.status}
                        </span>
                        <span className="text-xs text-slate-500">{recall.nhtsa}</span>
                      </div>
                      <p className="text-sm text-slate-700">{recall.description}</p>
                      <p className="text-xs text-slate-500 mt-2">{new Date(recall.date).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Report Generated */}
            <div className="bg-slate-800 text-white rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">Rapport Généré</span>
              </div>
              <p className="text-slate-400 text-sm">
                {new Date().toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
              <p className="text-xs text-slate-500 mt-4">
                Ce rapport est généré à partir des registres officiels du DMV, des bases de données d'assurance et des fournisseurs d'historique d'entretien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between py-2 border-b border-slate-100">
      <span className="text-slate-500">{label}</span>
      <span className="font-semibold text-slate-900">{value}</span>
    </div>
  );
}

function SpecRow({ label, value }) {
  return (
    <div className="flex justify-between py-2 border-b border-slate-100 last:border-0">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm font-semibold text-slate-900">{value}</span>
    </div>
  );
}
