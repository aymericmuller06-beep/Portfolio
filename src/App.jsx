import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Realisations from './pages/Realisations'
import TableauSynthese from './pages/TableauSynthese'
import CV from './pages/CV'
import Veilletech from './pages/Veilletech'
import MonEntreprise from './pages/MonEntreprise'
import Annuaire from './pages/Annuaire'

function App() {
  return (
    <Router>
      <Header />
      <main id="swup">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/realisations" element={<Realisations />} />
          <Route path="/pages/tableau_synthese" element={<TableauSynthese />} />
          <Route path="/pages/mon_entreprise" element={<MonEntreprise />} />
          <Route path="/pages/cv" element={<CV />} />
          <Route path="/pages/veille_technologique" element={<Veilletech />} />
          <Route path="/pages/annuaire" element={<Annuaire />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
