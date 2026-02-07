import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-105">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            True<span className="text-blue-600">Car</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/sample-report" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Exemple de Rapport
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Tarifs
          </Link>
          <Link to="/enterprise" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Entreprise
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="px-4 py-2 text-slate-600 hover:text-blue-600 font-medium transition-colors">
            Connexion
          </Link>
          <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 font-semibold px-6 py-2 rounded-full transition-colors">
            S'inscrire
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-6">
          <div className="flex flex-col gap-4">
            <Link to="/sample-report" className="text-lg font-medium py-2">Exemple de Rapport</Link>
            <Link to="/pricing" className="text-lg font-medium py-2">Tarifs</Link>
            <Link to="/enterprise" className="text-lg font-medium py-2">Entreprise</Link>
            <hr className="border-slate-100" />
            <Link to="/login" className="w-full py-3 border border-slate-200 rounded-lg font-medium text-center block">
              Connexion
            </Link>
            <Link to="/register" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-center block">
              S'inscrire
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
