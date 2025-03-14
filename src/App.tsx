import './App.css'
import BentoGrid from './components/bento-grid'
import FAQSection from './components/faq'
import FeaturesGrid from './components/features-grid'
import Footer from './components/footer'
import Header from './components/header'
import HeroSection from './components/hero'
import ServiceCarousel from './components/service-carousel'

function App() {


  return (
    <>
      <Header />
      <HeroSection />
      <ServiceCarousel />
      <BentoGrid />
      <FeaturesGrid />
      <FAQSection />
      <Footer />
    </>
  )
}

export default App
