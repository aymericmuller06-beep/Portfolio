import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Realisations from './pages/Realisations'
import RealisationDetail from './pages/RealisationDetail'
import TableauSynthese from './pages/TableauSynthese'
import CV from './pages/CV'
import Veilletech from './pages/Veilletech'
import MonEntreprise from './pages/MonEntreprise'
import Annuaire from './pages/Annuaire'

import { initBackToTop } from './scripts/back-to-top.js'
import { initTopbar } from './scripts/topbar.js'
import { initPageTransition } from './scripts/page-transition.js'
import { initLoader } from './scripts/loader.js'

function App() {
  useEffect(() => {
    // Initialize features after React renders the DOM
    initTopbar()
    const showLoaderOnTransition = initLoader()
    initPageTransition(showLoaderOnTransition)
    initBackToTop()
  }, [])

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/realisations" element={<Realisations />} />
          <Route path="/pages/realisations/:id" element={<RealisationDetail />} />
          <Route path="/pages/tableau_synthese" element={<TableauSynthese />} />
          <Route path="/pages/mon_entreprise" element={<MonEntreprise />} />
          <Route path="/pages/cv" element={<CV />} />
          <Route path="/pages/veille_technologique" element={<Veilletech />} />
          <Route path="/pages/annuaire" element={<Annuaire />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
