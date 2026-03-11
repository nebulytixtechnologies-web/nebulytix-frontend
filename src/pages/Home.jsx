import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Hero from '../components/home/Hero'
import VisionMission from '../components/home/VisionMission'
import CorePlatforms from '../components/home/CorePlatforms'
import SolutionsSection from '../components/home/SolutionsSection'
import IndustriesSection from '../components/home/IndustriesSection'
import PartnerEcosystem from '../components/home/PartnerEcosystem'
import CommunitySection from '../components/home/CommunitySection'
import Testimonials from '../components/home/Testimonials'
import InsightsSection from '../components/home/InsightsSection'
import ContactSection from '../components/home/ContactSection'

const Home = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handle hash navigation for navbar clicks on other pages
  useEffect(() => {
    if (window.location.hash === '#contact') {
      scrollToContact()
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Nebulytix Technologies - AI-Powered Digital Ecosystems</title>
        <meta name="description" content="Nebulytix enables organizations to scale innovation through AI automation, intelligent platforms, and strategic partner ecosystems. Book a product demo today." />
        <meta name="keywords" content="AI automation, digital transformation, enterprise AI, partner ecosystem, AI upskilling, AI consulting" />
      </Helmet>

      <Navbar onBookingOpen={scrollToContact} />

      <main>
        <Hero onBookingOpen={scrollToContact} />
        <VisionMission />
        <CorePlatforms />
        <SolutionsSection />
        <IndustriesSection />
        <PartnerEcosystem />
        <CommunitySection />
        <Testimonials />
        <InsightsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default Home