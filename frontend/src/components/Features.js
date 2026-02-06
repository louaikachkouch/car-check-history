import { 
  ShieldCheck, 
  SearchCheck, 
  History, 
  Camera, 
  Database,
  Award 
} from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "Dommages Cachés",
    description: "Découvrez les accidents passés que les vendeurs tentent de cacher. Nous vérifions les bases de données d'assurance mondiales."
  },
  {
    icon: History,
    title: "Falsification Kilométrique",
    description: "Vérifiez le kilométrage par rapport aux enregistrements historiques pour éviter de surpayer un véhicule à fort kilométrage."
  },
  {
    icon: Camera,
    title: "Photos Archivées",
    description: "Voyez à quoi ressemblait le véhicule lors des ventes ou enchères précédentes pour repérer les réparations."
  },
  { 
    icon: SearchCheck,
    title: "Vérification Vol",
    description: "Assurez-vous que le véhicule n'a pas été signalé volé dans l'un des 35+ pays connectés."
  },
  {
    icon: Database,
    title: "Historique Propriétaires",
    description: "Sachez combien de propriétaires le véhicule a vraiment eu et s'il a été utilisé comme taxi ou location."
  },
  {
    icon: Award,
    title: "Valeur Marché",
    description: "Obtenez une estimation précise du prix basée sur l'état réel et l'historique du véhicule."
  }
];

export function Features() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Tout ce qu'il Vous Faut pour Acheter en Confiance
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Nos rapports complets agrègent des données de milliers de sources mondiales pour vous donner une image complète.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="border border-slate-100 shadow-lg sm:shadow-xl shadow-slate-200/50 bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 group rounded-xl p-5 sm:p-6 lg:p-8"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
