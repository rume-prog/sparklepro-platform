import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
