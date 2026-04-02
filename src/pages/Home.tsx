import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, TrendingUp, Target } from 'lucide-react'

// Import images
import headshotImage from '../assets/images/headshot.png'
import trainingImage1 from '../assets/images/traininginaction1.jpg'
import trainingImage2 from '../assets/images/traininginaction2.jpg'
import trainingImage3 from '../assets/images/traininginaction3.jpg'
import trainingImage4 from '../assets/images/traininginaction4.jpg'

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
      {/* Hero Section - Split layout with prominent headshot */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <p className="text-accent font-medium mb-4">Sales Development Programs Ltd</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-balance mb-6">
                Transform Your Sales Team Into Top Performers
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
                Martin Spires is recognized as the most experienced Sales and Presentation 
                Skills Trainer in the Pacific Region, with over 40 years of proven results 
                across Fortune 500 companies worldwide.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-primary-foreground/10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl sm:text-3xl font-serif font-bold text-accent">{stat.value}</p>
                    <p className="text-sm text-primary-foreground/60">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
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
                  About Martin Spires
                </Link>
              </div>
            </div>

            {/* Headshot Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-80 sm:w-96 lg:w-[26rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-foreground/10">
                <img
                  src={headshotImage}
                  alt="Martin Spires - Sales Trainer"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Trusted by Leading Organizations Worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            {clientLogos.map((client) => (
              <div key={client.name} className="flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training in Action Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={trainingImage1}
                    alt="Sales training session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={trainingImage2}
                    alt="Training workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={trainingImage3}
                    alt="Team training"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={trainingImage4}
                    alt="Professional development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
                <span className="w-8 h-px bg-accent" />
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-6 text-balance">
                Four Decades of Sales Training Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Sales Development Programs Ltd was incorporated in Singapore in June 1984. 
                  The founder of the company is Martin Spires, who is the principal trainer 
                  within the organization. From those early days, the company has grown to 
                  serve Fortune 500 clients across the globe.
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
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
                href="tel:+6421595180"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium border border-primary-foreground/20 text-primary-foreground rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                +64 21 595 180
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
