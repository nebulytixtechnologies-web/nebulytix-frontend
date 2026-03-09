import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi'

const Navbar = ({ onBookingOpen }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBookingClick = () => {
    if (onBookingOpen) {
      onBookingOpen()
    } else {
      // Navigate to home and trigger CTA
      navigate('/')
      setTimeout(() => {
        const ctaSection = document.getElementById('cta-section')
        if (ctaSection) ctaSection.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }

  /**
   * Nav structure:
   * Home | Company ▾ | Solutions ▾ | Industries | Insights | Contact Consultation | [Book Demo btn]
   *
   * Company dropdown:   About Us, Partners, Careers
   * Solutions dropdown: AI Automation Platform, Digital Transformation Services, AI Upskilling Programs
   *                     + "View All Solutions" link at bottom
   */
  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Company',
      subLinks: [
        { name: 'About Us', path: '/about' },
        { name: 'Partners', path: '/partners' },
        { name: 'Careers', path: '/careers' },
      ]
    },
    {
      name: 'Solutions',
      path: '/solutions',           // clicking the parent label navigates here
      subLinks: [
        { name: 'AI Automation Platform', path: '/solutions/ai-automation' },
        { name: 'Digital Transformation Services', path: '/solutions/digital-transformation' },
        { name: 'AI Upskilling Programs', path: '/solutions/ai-upskilling' },
      ]
    },
    { name: 'Industries', path: '/industries' },
    { name: 'Insights & Thought Leadership', path: '/insights' },
    { name: 'Contact & Consultation', path: '/contact' },
  ]

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, ease: 'easeOut' } },
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'bg-transparent py-4'}`}
      style={
        isScrolled
          ? {
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0, 102, 255, 0.1)',
            boxShadow: '0 4px 30px rgba(5, 24, 58, 0.05)',
          }
          : {}
      }
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="logo navbar-logo scale-90 md:scale-100 origin-left shrink-0 mr-4 xl:mr-8 flex items-center">
            <img src="/src/assets/logo.png" alt="Nebulytix Technologies" className="-my-4 shrink-0" />
            <span className="logo-text hidden sm:block mt-2">NEBULYTIX</span>
          </Link>

          {/* ── Desktop Menu ── */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Nav item — if it has subLinks AND a path, render as Link + show chevron */}
                {link.subLinks ? (
                  <Link
                    to={link.path || '#'}
                    className="flex items-center gap-1 font-medium text-[13px] transition-all duration-200 relative px-2 py-1 rounded-lg hover:bg-primary-50/60"
                    style={{
                      color: location.pathname === link.path || location.pathname.startsWith(link.path || '___')
                        ? 'var(--color-primary)'
                        : 'var(--color-text-secondary)',
                    }}
                  >
                    <span>{link.name}</span>
                    <HiChevronDown
                      size={13}
                      className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                    />
                  </Link>
                ) : (
                  <Link
                    to={link.path}
                    className="flex items-center font-medium text-[13px] transition-all duration-200 relative px-2 py-1 rounded-lg hover:bg-primary-50/60"
                    style={{
                      color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    }}
                  >
                    <span>{link.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.subLinks && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="absolute top-full left-0 mt-1.5 w-64 rounded-xl overflow-hidden py-1.5 z-[60]"
                        style={{
                          background: 'rgba(255, 255, 255, 0.98)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(0, 102, 255, 0.1)',
                          boxShadow: '0 12px 40px rgba(5,24,58,0.12)',
                        }}
                      >
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm transition-all duration-150 hover:bg-blue-50"
                            style={{ color: 'var(--color-text-secondary)' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--color-primary)', opacity: 0.4 }} />
                            {subLink.name}
                          </Link>
                        ))}

                        {/* "View all" footer link for Solutions */}
                        {link.path && (
                          <div className="mx-3 mt-1 pt-1.5 border-t" style={{ borderColor: 'rgba(0,102,255,0.08)' }}>
                            <Link
                              to={link.path}
                              className="flex items-center gap-1.5 px-1 py-2 text-xs font-semibold transition-colors"
                              style={{ color: 'var(--color-primary)' }}
                              onClick={() => setActiveDropdown(null)}
                            >
                              View all {link.name} →
                            </Link>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <div className="ml-2">
              <button
                onClick={handleBookingClick}
                className="btn-primary px-5 py-2 text-sm whitespace-nowrap"
              >
                Book a Product Demo
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: 'var(--color-text-primary)', background: 'rgba(0,102,255,0.05)' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 w-full overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(30px)',
                borderBottom: '1px solid rgba(0, 102, 255, 0.1)',
              }}
            >
              <div className="container-custom py-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.subLinks ? (
                      <div>
                        {/* Tappable parent row */}
                        <div className="flex items-center justify-between">
                          <Link
                            to={link.path || '#'}
                            className="flex-1 py-3 font-semibold text-base px-3 rounded-xl"
                            style={{ color: 'var(--color-text-secondary)' }}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                            className="p-3 rounded-xl"
                            style={{ color: 'var(--color-text-muted)' }}
                          >
                            <HiChevronDown className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                          </button>
                        </div>

                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="pl-6 flex flex-col overflow-hidden"
                            >
                              {link.subLinks.map((sub) => (
                                <Link
                                  key={sub.path}
                                  to={sub.path}
                                  className="py-2.5 text-sm flex items-center gap-2"
                                  style={{ color: 'var(--color-text-muted)' }}
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--color-primary)', opacity: 0.5 }} />
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className="block py-3 font-semibold text-base px-3 rounded-xl"
                        style={{
                          color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t" style={{ borderColor: 'rgba(0,102,255,0.08)' }}>
                  <button
                    className="btn-primary w-full py-3 text-center justify-center text-sm"
                    onClick={() => {
                      setIsOpen(false)
                      handleBookingClick()
                    }}
                  >
                    Book a Product Demo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
