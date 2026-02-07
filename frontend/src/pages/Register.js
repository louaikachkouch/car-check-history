import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, Eye, EyeOff, User, ArrowRight, Check } from 'lucide-react';

export function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Le nom est requis';
    }
    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Veuillez confirmer votre mot de passe';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 1500);
  };

  const passwordRequirements = [
    { met: formData.password.length >= 8, text: 'Au moins 8 caractères' },
    { met: /[A-Z]/.test(formData.password), text: 'Une lettre majuscule' },
    { met: /[0-9]/.test(formData.password), text: 'Un chiffre' },
    { met: /[^A-Za-z0-9]/.test(formData.password), text: 'Un caractère spécial' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
      {/* Left Side - Image/Decoration (hidden on mobile) */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center p-12">
        <div className="max-w-md text-center text-white">
          <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="w-14 h-14" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Rejoignez des milliers d'utilisateurs</h2>
          <p className="text-blue-100 text-lg mb-8">
            Créez votre compte et accédez à des rapports complets sur l'historique des véhicules.
          </p>
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <span>Rapports détaillés instantanés</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <span>Historique complet des véhicules</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <span>Alertes de sécurité en temps réel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center gap-2 mb-8 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-105">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-slate-900">
              True<span className="text-blue-600">Car</span>
            </span>
          </Link>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900 mb-2">Créer un compte</h1>
              <p className="text-slate-600">Inscrivez-vous pour commencer</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Nom complet
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                    placeholder="Jean Dupont"
                  />
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Adresse email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                    placeholder="vous@exemple.com"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-12 py-3 rounded-xl border ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                
                {/* Password Requirements */}
                {formData.password && (
                  <div className="mt-3 space-y-2">
                    {passwordRequirements.map((req, idx) => (
                      <div key={idx} className={`flex items-center gap-2 text-sm ${req.met ? 'text-green-600' : 'text-slate-400'}`}>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${req.met ? 'bg-green-100' : 'bg-slate-100'}`}>
                          {req.met && <Check className="w-3 h-3" />}
                        </div>
                        {req.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
                  Confirmer le mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="terms"
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" 
                />
                <label htmlFor="terms" className="text-sm text-slate-600">
                  J'accepte les{' '}
                  <a href="#" className="text-blue-600 hover:underline">conditions d'utilisation</a>
                  {' '}et la{' '}
                  <a href="#" className="text-blue-600 hover:underline">politique de confidentialité</a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Créer mon compte
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Login Link */}
          <p className="text-center mt-8 text-slate-600">
            Vous avez déjà un compte ?{' '}
            <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              Connectez-vous
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
