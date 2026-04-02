import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar, Briefcase, Award } from 'lucide-react'

// Import trainer images
import martinPortrait from '../assets/images/m1.jpg'
import trainingSession1 from '../assets/images/m6.jpg'
import trainingSession2 from '../assets/images/m7.jpg'
import trainingSession3 from '../assets/images/m11.jpg'

const timeline = [
  {
    year: '1976',
    title: 'Career Begins',
    description: 'Graduated from the University of Keele, UK and went straight into the world of selling.',
  },
  {
    year: '1977',
    title: 'Voluntary Work',
    description: 'Spent 1 year in Africa conducting voluntary work before joining the Daily Mail as a Sales Executive.',
  },
  {
    year: '1979',
    title: 'Sales Director',
    description: 'Joined the Graduate Group, rising to become Sales Director by the age of 26, running a sales force of 40 personnel.',
  },
  {
    year: '1983',
    title: 'Asia Expansion',
    description: 'Came to Singapore as Training Director for Asian Sales Training, based in Singapore and then Jakarta.',
  },
  {
    year: '1984',
    title: 'Founded SDP',
    description: 'Sales Development Programs Pte Ltd was incorporated with Martin as its Managing Director.',
  },
  {
    year: 'Present',
    title: 'Global Trainer',
    description: 'Now a global Corporate Trainer with an extensive customer base in Europe, USA, and Asia-Pacific.',
  },
]

const highlights = [
  {
    icon: Award,
    label: 'Most Experienced',
    value: 'Sales Trainer in Pacific Region',
  },
  {
    icon: MapPin,
    label: 'Global Reach',
    value: 'NZ, Australia, SE Asia, Europe, USA, Japan, China',
  },
  {
    icon: Calendar,
    label: 'Experience',
    value: '40+ Years in Sales Training',
  },
  {
    icon: Briefcase,
    label: 'Track Record',
    value: 'Fortune 500 Client List',
  },
]

export function About() {
  return (
    <div>
      {/* Hero Section - Text-focused with profile accent */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Profile Card - Inline accent */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-background flex-shrink-0 shadow-lg">
                <img
                  src={martinPortrait}
                  alt="Martin Spires"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-1">
                  <span className="w-6 h-px bg-accent" />
                  About
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground">
                  Martin Spires
                </h1>
              </div>
            </div>

            <p className="text-xl text-accent font-medium mb-4">
              The Most Experienced Sales Trainer in the Pacific Region
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Martin Spires is now regarded as the most successful and experienced Sales, 
              Customer Service and Presentation Skills Trainer in the entirety of the Pacific Region. 
              With over 40 years of hands-on experience, he has trained thousands of professionals 
              across Fortune 500 companies worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm text-primary-foreground/60 mb-1">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography - Text-focused with small image accents */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">
              Biography
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p className="leading-relaxed">
                Martin Spires was a record-breaking Salesman from 1976 through to 1983 in the 
                United Kingdom. Graduating from the University of Keele, UK in 1976, he went 
                straight into the world of selling. After spending 1 year in Africa conducting 
                voluntary work, he joined the &quot;Daily Mail&quot; as a Sales Executive.
              </p>
              <p className="leading-relaxed">
                In 1979 Martin then joined the &quot;Graduate Group&quot; rising to become Sales Director 
                by the age of 26 running a sales force of 40 personnel.
              </p>

              {/* Small image accents inline */}
              <div className="flex items-center gap-3 py-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                  <img
                    src={trainingSession1}
                    alt="Training session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                  <img
                    src={trainingSession2}
                    alt="Workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                  <img
                    src={trainingSession3}
                    alt="Presentation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground italic ml-2">
                  Training sessions
                </p>
              </div>

              <p className="leading-relaxed">
                In 1983, Martin Spires came to Singapore as Training Director for &quot;Asian Sales 
                Training&quot; (a division of the Institute of International Research) based in 
                Singapore and then Jakarta.
              </p>
              <p className="leading-relaxed">
                In 1984 Sales Development Programs Pte Ltd was incorporated with Martin as its 
                Managing Director. Within the first 2 weeks of business, training programs were 
                successfully implemented for companies such as Black &amp; Decker and Van der Horst. 
                Recently Martin has incorporated a sister company, Sales Development Programs Ltd, 
                in Auckland, New Zealand.
              </p>
              <p className="leading-relaxed">
                From 1984 to the present, the customer reference list of Martin Spires reads like 
                the Fortune 500 of Asia/Pacific. The customer base covers New Zealand, Australia, 
                SE Asia, Indian sub continent, Europe, USA, Japan and China. Martin Spires is now 
                a global Corporate Trainer with an extensive customer base in Europe and the USA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
              <span className="w-8 h-px bg-accent" />
              Career Journey
              <span className="w-8 h-px bg-accent" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground text-balance">
              A Legacy of Excellence
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {item.year.slice(-2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-px h-full bg-border mt-4" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm text-accent font-medium mb-1">{item.year}</p>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4 text-balance">
            Work with Martin Spires
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Leverage decades of experience to transform your sales team into top performers.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
