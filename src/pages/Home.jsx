import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Hero from '../components/home/Hero'
import ValueProp from '../components/home/ValueProp'
import CorePlatforms from '../components/home/CorePlatforms'
import Solutions from '../components/home/Services'
import PartnerEcosystem from '../components/home/PartnerEcosystem'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/home/CTASection'

const Home = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)

  const scrollToCTA = () => {
    // First scroll to section, then reveal the widget
    const ctaSection = document.getElementById('cta-section')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
    // Slight delay so scroll finishes before widget appears
    setTimeout(() => setIsCalendarVisible(true), 400)
  }

  const toggleCalendar = () => {
    setIsCalendarVisible(prev => !prev)
    if (isCalendarVisible) {
      // Collapsing — scroll back to top of section cleanly
      const ctaSection = document.getElementById('cta-section')
      if (ctaSection) ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handle hash navigation for navbar clicks on other pages
  useEffect(() => {
    if (window.location.hash === '#cta-section') {
      scrollToCTA()
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Nebulytix Technologies - AI-Powered Digital Ecosystems</title>
        <meta name="description" content="Nebulytix enables organizations to scale innovation through AI automation, intelligent platforms, and strategic partner ecosystems. Book a product demo today." />
        <meta name="keywords" content="AI automation, digital transformation, enterprise AI, partner ecosystem, AI upskilling, AI consulting" />
      </Helmet>

      <Navbar onBookingOpen={scrollToCTA} />

      <main>
        <Hero onBookingOpen={scrollToCTA} />
        <ValueProp />
        <CorePlatforms />
        <Solutions />
        <PartnerEcosystem />
        <Testimonials />
        <CTASection
          isCalendarVisible={isCalendarVisible}
          onScrollReveal={toggleCalendar}
        />
      </main>

      <Footer />
    </>
  )
}

export default Home