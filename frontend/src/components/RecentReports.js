import { CheckCircle2, AlertTriangle, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const reports = [
  {
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=60",
    model: "2019 BMW X5",
    vin: "WBAJB9C51KB286123",
    status: "Clean",
    issues: 0,
    owners: 2,
    mileage: "45,230",
    price: "$45,000"
  },
  {
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60",
    model: "2021 Porsche 911",
    vin: "WP0AB2A91MS227456",
    status: "Warning",
    issues: 1,
    issueText: "Accident Mineur",
    owners: 1,
    mileage: "12,500",
    price: "$112,000"
  },
  {
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop&q=60",
    model: "2023 Tesla Model 3",
    vin: "5YJ3E1EA5PF384789",
    status: "Clean",
    issues: 0,
    owners: 1,
    mileage: "8,200",
    price: "$38,900"
  }
];

export function RecentReports() {
  const [copiedVin, setCopiedVin] = useState(null);
  const navigate = useNavigate();

  const copyVin = (e, vin) => {
    e.stopPropagation();
    navigator.clipboard.writeText(vin);
    setCopiedVin(vin);
    setTimeout(() => setCopiedVin(null), 2000);
  };

  const viewReport = (vin) => {
    navigate(`/report/${vin}`);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 sm:mb-12 gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">
              Vérifications Récentes
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Découvrez ce que les autres trouvent dans leurs rapports.
            </p>
          </div>
          <a href="#" className="text-blue-600 font-semibold hover:underline text-sm sm:text-base">
            Voir tous les rapports →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reports.map((report, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => viewReport(report.vin)}>
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 shadow-lg">
                <img
                  src={report.image}
                  alt={report.model}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                  {report.status === "Clean" ? (
                    <span className="bg-green-500 hover:bg-green-600 text-white border-0 px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full inline-flex items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Titre Clair
                    </span>
                  ) : (
                    <span className="bg-orange-500 hover:bg-orange-600 text-white border-0 px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full inline-flex items-center">
                      <AlertTriangle className="w-3 h-3 mr-1" /> {report.issueText}
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                {report.model}
              </h3>
              {/* VIN with copy button */}
              <div className="flex items-center gap-2 mb-2">
                <code className="text-xs bg-slate-100 px-2 py-1 rounded font-mono text-slate-600 truncate max-w-[180px] sm:max-w-none">
                  {report.vin}
                </code>
                <button 
                  onClick={(e) => copyVin(e, report.vin)}
                  className="p-1 hover:bg-slate-100 rounded transition-colors shrink-0"
                  title="Copy VIN"
                >
                  {copiedVin === report.vin ? (
                    <Check className="w-3 h-3 text-green-500" />
                  ) : (
                    <Copy className="w-3 h-3 text-slate-400" />
                  )}
                </button>
              </div>
              <div className="flex justify-between text-xs sm:text-sm text-slate-500">
                <span>{report.mileage} km • {report.owners} propriétaire{report.owners > 1 ? 's' : ''}</span>
                <span className="font-medium text-slate-900">{report.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
