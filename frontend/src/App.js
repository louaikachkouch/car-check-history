import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { RecentReports } from './components/RecentReports';
import { Footer } from './components/Footer';
import { Report } from './pages/Report';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
