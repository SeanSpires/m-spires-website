import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, TrendingUp, Target } from 'lucide-react'

// Import images
import martinImage from '../assets/images/m1.jpg'
import trainingImage1 from '../assets/images/m2.jpg'
import trainingImage2 from '../assets/images/m3.jpg'

// Import logos
import abbLogo from '../assets/logos/abb.png'
import dbsLogo from '../assets/logos/dbs.png'
import dhlLogo from '../assets/logos/dhl.png'
import ikeaLogo from '../assets/logos/ikea.png'
import nissanLogo from '../assets/logos/nissan.png'
import nokiaLogo from '../assets/logos/nokia.png'
import ocbcLogo from '../assets/logos/ocbc.png'
import shellLogo from '../assets/logos/shell.png'
import singtelLogo from '../assets/logos/singtel.png'
import volvoLogo from '../assets/logos/volvo.png'

const stats = [
  { label: 'Years Experience', value: '40+' },
  { label: 'Companies Trained', value: '500+' },
  { label: 'Countries', value: '25+' },
  { label: 'Professionals Trained', value: '10K+' },
]

const features = [
  {
    icon: Award,
    title: 'Value-Based Selling',
    description: 'Master the art of communicating value and preserving margins in every sale.',
  },
  {
    icon: Users,
    title: 'Presentation Skills',
    description: 'Deliver compelling presentations that engage and persuade your audience.',
  },
  {
    icon: TrendingUp,
    title: 'Negotiation Mastery',
    description: 'Build leverage and close deals with confidence and expertise.',
  },
  {
    icon: Target,
    title: 'Account Management',
    description: 'Develop long-term relationships and maximize customer lifetime value.',
  },
]

const clientLogos = [
  { name: 'ABB', logo: abbLogo },
  { name: 'DBS Bank', logo: dbsLogo },
  { name: 'DHL', logo: dhlLogo },
  { name: 'IKEA', logo: ikeaLogo },
  { name: 'Nissan', logo: nissanLogo },
  { name: 'Nokia', logo: nokiaLogo },
  { name: 'OCBC', logo: ocbcLogo },
  { name: 'Shell', logo: shellLogo },
  { name: 'Singtel', logo: singtelLogo },
  { name: 'Volvo', logo: volvoLogo },
]

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-accent font-medium tracking-wide uppercase text-sm">
                  Sales Training Excellence Since 1984
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-balance">
                  Transform Your Sales Team Into Top Performers
                </h1>
                <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
                  Sales Development Programs Ltd provides world-class training solutions led by Martin Spires, 
                  the most experienced Sales and Presentation Skills Trainer in the Pacific Region.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors"
                >
                  Start Your Transformation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about-martin-spires"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium border border-primary-foreground/20 rounded-full hover:bg-primary-foreground/10 transition-colors"
                >
                  Meet Martin Spires
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={martinImage}
                  alt="Martin Spires - Sales Trainer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-xl p-4 shadow-lg">
                <p className="text-3xl font-serif font-bold">40+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 lg:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Trusted by Leading Organizations Worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview with Training Images */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 text-accent text-sm font-medium">
                <span className="w-8 h-px bg-accent" />
                About
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground text-balance">
                Four Decades of Sales Training Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sales Development Programs Ltd was incorporated in Singapore in June 1984. 
                  The founder of the company is Martin Spires, who is the principal trainer 
                  within the organization.
                </p>
                <p>
                  Martin had previously worked for another Singapore based sales training 
                  organization. Prior to that, he was the Sales Director for a major UK 
                  organization, running a sales force of 40 personnel.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors group"
              >
                Learn more about our company
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={trainingImage1}
                    alt="Sales training session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 aspect-square rounded-xl overflow-hidden shadow-lg border-4 border-background">
                  <img
                    src={trainingImage2}
                    alt="Training workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
              <span className="w-8 h-px bg-accent" />
              Our Programs
              <span className="w-8 h-px bg-accent" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground text-balance">
              Training Solutions That Deliver Results
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-background rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary-foreground mb-4 text-balance">
              Ready to Elevate Your Sales Performance?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our tailored training programs can help your 
              team achieve measurable results and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors"
              >
                Contact Us Today
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+6495331466"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium border border-primary-foreground/20 text-primary-foreground rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                +64 9 533 1466
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
