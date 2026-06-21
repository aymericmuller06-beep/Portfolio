import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Realisations from './pages/Realisations'
import TableauSynthese from './pages/TableauSynthese'
import CV from './pages/CV'
import Veilletech from './pages/Veilletech'

function App() {
  return (
    <Router>
      <Header />
      <main id="swup">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/projets_stage" element={<Projects />} />
          <Route path="/pages/realisations" element={<Realisations />} />
          <Route path="/pages/tableau_synthese" element={<TableauSynthese />} />
          <Route path="/pages/cv" element={<CV />} />
          <Route path="/pages/veille_technologique" element={<Veilletech />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
