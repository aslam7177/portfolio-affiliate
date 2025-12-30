import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Affiliate from './pages/Affiliate';
import Contact from './pages/Contact';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`App ${isHomePage ? 'home-page' : ''}`}>
      {!isHomePage && <Header />}
      <main className={`main-content ${isHomePage ? 'home-main' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {!isHomePage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
