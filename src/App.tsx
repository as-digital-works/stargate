import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { PageTransition } from './components/PageTransition'
import { RouteLoadingBar } from './components/RouteLoadingBar'
import { WhatsAppButton } from './components/WhatsAppButton'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Destinations } from './pages/Destinations'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Testimonials } from './pages/Testimonials'

function App() {
  const location = useLocation()

  return (
    <>
      <RouteLoadingBar />
      <Navbar />
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/destinations" element={<PageTransition><Destinations /></PageTransition>} />
            <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
