import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  BarChart3,
  Zap,
  Lock,
  Headphones,
  FileText,
  CheckCircle2,
  ArrowRight,
  Car,
  Globe
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'API Haute Performance',
    description: 'Intégration rapide avec notre API RESTful. Accédez aux rapports en temps réel depuis vos systèmes.'
  },
  {
    icon: BarChart3,
    title: 'Tableau de Bord Analytics',
    description: 'Suivez l\'utilisation, générez des statistiques et optimisez vos processus de vérification.'
  },
  {
    icon: Users,
    title: 'Gestion Multi-Utilisateurs',
    description: 'Créez des comptes pour votre équipe avec des rôles et permissions personnalisés.'
  },
  {
    icon: Lock,
    title: 'Sécurité Avancée',
    description: 'Chiffrement de bout en bout, authentification 2FA et conformité aux normes de sécurité.'
  },
  {
    icon: Headphones,
    title: 'Support Dédié 24/7',
    description: 'Un gestionnaire de compte dédié et une ligne d\'assistance prioritaire pour votre entreprise.'
  },
  {
    icon: FileText,
    title: 'Rapports Personnalisés',
    description: 'Personnalisez les rapports avec votre logo et adaptez le contenu à vos besoins.'
  }
];

const useCases = [
  {
    icon: Car,
    title: 'Concessionnaires Auto',
    description: 'Vérifiez l\'historique de chaque véhicule en stock et rassurez vos clients avec des rapports transparents.'
  },
  {
    icon: Building2,
    title: 'Sociétés de Leasing',
    description: 'Évaluez rapidement la valeur et l\'état des véhicules pour vos décisions de financement.'
  },
  {
    icon: Globe,
    title: 'Plateformes en Ligne',
    description: 'Intégrez nos rapports dans votre marketplace pour augmenter la confiance des acheteurs.'
  }
];

export function Enterprise() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Solutions Entreprise
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Des solutions sur mesure pour votre entreprise
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Automatisez la vérification des véhicules avec notre API puissante et nos outils 
              professionnels conçus pour les grandes organisations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
              >
                Demander une Démo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Voir les Fonctionnalités
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '500+', label: 'Entreprises Partenaires' },
              { value: '2M+', label: 'Rapports Générés' },
              { value: '99.9%', label: 'Disponibilité API' },
              { value: '24/7', label: 'Support Disponible' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Fonctionnalités Entreprise
            </h2>
            <p className="text-lg text-slate-600">
              Tout ce dont vous avez besoin pour intégrer la vérification de véhicules dans vos opérations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Cas d'Utilisation
            </h2>
            <p className="text-lg text-slate-600">
              Découvrez comment nos clients utilisent TrueCar pour améliorer leurs opérations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-gradient-to-b from-slate-50 to-white rounded-2xl p-8 border border-slate-200">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
                <p className="text-slate-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Tarification Flexible</h2>
                <p className="text-slate-300 mb-6">
                  Nous proposons des plans adaptés à la taille et aux besoins de votre entreprise. 
                  Contactez-nous pour un devis personnalisé.
                </p>
                <ul className="space-y-3">
                  {[
                    'Volume illimité de rapports',
                    'Facturation mensuelle ou annuelle',
                    'Remises selon le volume',
                    'Période d\'essai gratuite',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Plan Entreprise</h3>
                <p className="text-slate-300 mb-6">À partir de</p>
                <p className="text-4xl font-bold mb-2">499 DT<span className="text-lg font-normal text-slate-400">/mois</span></p>
                <p className="text-sm text-slate-400 mb-6">Facturé annuellement</p>
                <a 
                  href="#contact"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  Contacter les Ventes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Demander une Démo
              </h2>
              <p className="text-lg text-slate-600">
                Remplissez le formulaire et notre équipe vous contactera dans les 24 heures.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Prénom</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nom</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Dupont"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Professionnel</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="jean@entreprise.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Entreprise</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nom de l'entreprise"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Décrivez vos besoins..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
              >
                Envoyer la Demande
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
