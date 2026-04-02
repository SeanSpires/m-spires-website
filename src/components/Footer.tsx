import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'Company Focus', href: '/about' },
  { name: 'Martin Spires', href: '/about-martin-spires' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Enquiries', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/home" className="font-serif text-2xl font-semibold">
              Sales Development Programs
            </Link>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Providing world-class sales training solutions since 1984. 
              Helping businesses across the globe achieve measurable results 
              through professional development programs.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+6495331466"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +64 9 533 1466
                </a>
              </li>
              <li>
                <a
                  href="mailto:martin@martinspires.co.nz"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  martin@martinspires.co.nz
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Auckland, New Zealand</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/50 text-center">
            &copy; {new Date().getFullYear()} Sales Development Programs Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
