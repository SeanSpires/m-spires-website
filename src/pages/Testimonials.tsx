import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'

const testimonials = [
  {
    company: 'Sika',
    quote: 'Martin delivered exceptional training that transformed how our sales team approaches customer relationships.',
  },
  {
    company: 'Mapei',
    quote: 'The presentation skills workshop was invaluable. Our team now delivers compelling pitches with confidence.',
  },
  {
    company: 'BS & B Safety Systems',
    quote: 'Outstanding value-based selling training that helped us preserve margins while increasing close rates.',
  },
  {
    company: 'GEA',
    quote: 'Martin&apos;s negotiation training gave our team the tools and confidence to handle complex deals effectively.',
  },
  {
    company: 'YRCO',
    quote: 'Practical, actionable training that delivered immediate results. Highly recommended.',
  },
  {
    company: 'Higgins Concrete',
    quote: 'The customer service training transformed how we engage with clients at every touchpoint.',
  },
  {
    company: 'Lubrication Engineering',
    quote: 'Martin&apos;s approach to sales training is both professional and practical. Real-world skills that work.',
  },
  {
    company: 'Dexion Group',
    quote: 'Excellent account management training that helped us develop stronger, more profitable relationships.',
  },
  {
    company: 'NDA Engineering',
    quote: 'The Train the Trainer program equipped our internal team to continue developing our sales force.',
  },
  {
    company: 'Jacks',
    quote: 'Martin brings decades of experience and delivers it in an engaging, memorable way.',
  },
]

export function Testimonials() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
              <span className="w-8 h-px bg-accent" />
              Success Stories
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground mb-6 text-balance">
              Testimonials
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hear from organizations around the world who have transformed their 
              sales performance through our training programs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.company}
                className={`bg-secondary rounded-2xl p-8 ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Quote className="w-5 h-5 text-accent" />
                  </div>
                  <div className="space-y-4">
                    <p className={`text-foreground leading-relaxed ${index === 0 ? 'text-lg' : ''}`}>
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {testimonial.company.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.company}</p>
                        <p className="text-sm text-muted-foreground">Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl sm:text-5xl font-serif font-bold">500+</p>
              <p className="mt-2 text-primary-foreground/70">Companies Trained</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-serif font-bold">40+</p>
              <p className="mt-2 text-primary-foreground/70">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-serif font-bold">25+</p>
              <p className="mt-2 text-primary-foreground/70">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4 text-balance">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover how our training programs can help your organization achieve 
            measurable results and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium border border-border text-foreground rounded-full hover:bg-secondary transition-colors"
            >
              Learn About Our Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
