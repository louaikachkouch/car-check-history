import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  Check, 
  ShieldCheck, 
  Zap, 
  Crown,
  FileText,
  Download,
  Clock,
  Headphones
} from 'lucide-react';

const plans = [
  {
    name: 'Basique',
    originalPrice: '40',
    price: '20',
    description: 'Parfait pour une vérification ponctuelle',
    icon: FileText,
    color: 'slate',
    features: [
      '1 rapport complet',
      'Historique des propriétaires',
      'Vérification des accidents',
      'Historique du kilométrage',
      'Téléchargement PDF',
    ],
    cta: 'Commencer',
    popular: false
  },
  {
    name: 'Standard',
    originalPrice: '159',
    price: '79',
    description: 'Idéal pour les acheteurs actifs',
    icon: Zap,
    color: 'blue',
    features: [
      '5 rapports complets',
      'Tout du plan Basique',
      'Valeur marché estimée',
      'Historique d\'entretien détaillé',
      'Support prioritaire',
      'Validité 30 jours',
    ],
    cta: 'Choisir Standard',
    popular: true
  },
  {
    name: 'Premium',
    originalPrice: '449',
    price: '225',
    description: 'Pour les professionnels',
    icon: Crown,
    color: 'purple',
    features: [
      '15 rapports complets',
      'Tout du plan Standard',
      'Alertes de rappels',
      'Vérification des titres',
      'API disponible',
      'Support dédié 24/7',
      'Validité 90 jours',
    ],
    cta: 'Choisir Premium',
    popular: false
  }
];

export function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Tarification Simple
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Choisissez le plan adapté à vos besoins
            </h1>
            <p className="text-lg text-slate-600">
              Des rapports complets et fiables pour prendre des décisions éclairées 
              lors de l'achat d'un véhicule d'occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.popular 
                    ? 'ring-2 ring-blue-600 shadow-xl shadow-blue-600/10' 
                    : 'border border-slate-200 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Le plus populaire
                    </span>
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.color === 'blue' ? 'bg-blue-100' :
                  plan.color === 'purple' ? 'bg-purple-100' : 'bg-slate-100'
                }`}>
                  <plan.icon className={`w-7 h-7 ${
                    plan.color === 'blue' ? 'text-blue-600' :
                    plan.color === 'purple' ? 'text-purple-600' : 'text-slate-600'
                  }`} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg text-slate-400 line-through">{plan.originalPrice} DT</span>
                    <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">-50%</span>
                  </div>
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 ml-1">DT</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.color === 'blue' ? 'bg-blue-100' :
                        plan.color === 'purple' ? 'bg-purple-100' : 'bg-slate-100'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.color === 'blue' ? 'text-blue-600' :
                          plan.color === 'purple' ? 'text-purple-600' : 'text-slate-600'
                        }`} />
                      </div>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Tous les plans incluent
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FileText, title: 'Rapports détaillés', desc: 'Informations complètes' },
                { icon: Download, title: 'Export PDF', desc: 'Téléchargement instantané' },
                { icon: Clock, title: 'Accès 24/7', desc: 'Disponible à tout moment' },
                { icon: Headphones, title: 'Support client', desc: 'Assistance réactive' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
              Questions Fréquentes
            </h2>
            <div className="space-y-4">
              {[
                { q: 'Combien de temps le rapport est-il valide ?', a: 'Les rapports contiennent les informations disponibles au moment de la génération. Nous recommandons de générer un nouveau rapport si plus de 30 jours se sont écoulés.' },
                { q: 'Puis-je obtenir un remboursement ?', a: 'Oui, nous offrons un remboursement complet dans les 7 jours si le rapport ne répond pas à vos attentes.' },
                { q: 'Les rapports sont-ils fiables ?', a: 'Nos rapports sont générés à partir de bases de données officielles et de sources vérifiées, garantissant des informations précises et à jour.' },
                { q: 'Comment puis-je payer ?', a: 'Nous acceptons les cartes bancaires, les virements et les paiements mobiles (D17, Flouci).' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-slate-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
