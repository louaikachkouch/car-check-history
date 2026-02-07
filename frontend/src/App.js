import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { RecentReports } from './components/RecentReports';
import { Footer } from './components/Footer';
import { Report } from './pages/Report';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { SampleReport } from './pages/SampleReport';
import { Pricing } from './pages/Pricing';
import { Enterprise } from './pages/Enterprise';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <RecentReports />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-slate-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/report/:vin" element={<Report />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sample-report" element={<SampleReport />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/enterprise" element={<Enterprise />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
