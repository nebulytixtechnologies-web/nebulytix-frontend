import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-400">Nebulytix</span> Technologies
            </h3>
            <p className="text-secondary-400 mb-4">
              Transforming ideas into innovative software solutions. We build the future, one line of code at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Projects', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Mobile Apps',
                'Cloud Solutions',
                'AI & Machine Learning',
                'DevOps Consulting',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-secondary-400">
              <li>123 Tech Street</li>
              <li>Silicon Valley, CA 94025</li>
              <li>+1 (555) 123-4567</li>
              <li>info@nebulytix.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 pt-8 text-center text-secondary-400">
          <p>&copy; {currentYear} Nebulytix Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer