import { Link } from 'react-router-dom'
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineCalendar } from 'react-icons/hi'
import WhatsAppFloat from './WhatsAppFloat'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nebulytix-technologies-b77894393/', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61583812475808', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/nebulytix_technologies?igsh=Y291MDR2Nnd2eWpy', label: 'Instagram' },
  ]

  return (
    <footer className="pt-20 pb-10 relative overflow-hidden" style={{ background: 'var(--color-bg-surface)', borderTop: '1px solid rgba(0, 102, 255, 0.08)' }}>
      <div className="glow-orb" style={{ width: 600, height: 400, bottom: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(ellipse, rgba(0, 102, 255, 0.05) 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Link to="/" className="logo navbar-logo scale-90 md:scale-100 origin-left shrink-0 mr-4 xl:mr-8 flex items-center">
                <img src="/src/assets/logo.png" alt="Nebulytix Technologies" className="-my-4 shrink-0" />
                <span className="logo-text hidden sm:block mt-2">NEBULYTIX</span>
              </Link>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-muted)' }}>
              Building AI-powered digital ecosystems for enterprises and partners. Accelerating digital transformation through AI automation, intelligent platforms, and strategic partner ecosystems.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(0,102,255,0.05)', border: '1px solid rgba(0,102,255,0.1)', color: 'var(--color-text-muted)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(0,102,255,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.borderColor = 'rgba(0,102,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold mb-5" style={{ color: 'var(--color-text-primary)' }}>Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Partners', path: '/partners' },
                { label: 'Careers', path: '/careers' },
                { label: 'Insights', path: '/insights' },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link to={path}
                    className="text-sm transition-all hover:translate-x-1 inline-block"
                    style={{ color: 'var(--color-text-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
                  >
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-bold mb-5" style={{ color: 'var(--color-text-primary)' }}>Solutions</h4>
            <ul className="space-y-3">
              {[
                { label: 'AI Automation Platform', path: '/solutions/ai-automation' },
                { label: 'Digital Transformation', path: '/solutions/digital-transformation' },
                { label: 'AI Upskilling Programs', path: '/solutions/ai-upskilling' },
                { label: 'All Solutions', path: '/solutions' },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link to={path}
                    className="text-sm transition-all hover:translate-x-1 inline-block"
                    style={{ color: 'var(--color-text-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
                  >
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-5" style={{ color: 'var(--color-text-primary)' }}>Contact</h4>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <li>
                <a href="mailto:info@nebulytix.com"
                  className="flex items-center gap-2 transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
                >
                  <HiOutlineMail className="text-lg" /> info@nebulytix.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
                >
                  <FaWhatsapp className="text-lg" /> WhatsApp Us
                </a>
              </li>
              <li>
                <Link to="/contact"
                  className="text-sm flex items-center gap-2 transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
                >
                  <HiOutlineCalendar className="text-lg" /> Book a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium"
          style={{ borderTop: '1px solid rgba(0, 102, 255, 0.08)', color: 'var(--color-text-muted)' }}>
          <p>© {currentYear} Nebulytix Technologies. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <Link to="/industries" className="hover:text-primary transition-colors">Industries</Link>
          </div>
        </div>
      </div>
      <WhatsAppFloat />
    </footer>
  )
}

export default Footer