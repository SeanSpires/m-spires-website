import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+64 21 595 180',
    href: 'tel:+6421595180',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'martin@martinspires.co.nz',
    href: 'mailto:martin@martinspires.co.nz',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Auckland, New Zealand',
    href: null,
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Global - All Time Zones',
    href: null,
  },
]

const services = [
  'Value-Based Selling Skills',
  'Negotiation Training',
  'Presentation Skills',
  'Customer Service Excellence',
  'Account Management',
  'Train the Trainer Programs',
]

export function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
              <span className="w-8 h-px bg-accent" />
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground mb-6 text-balance">
              Enquiries
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your sales team? Contact Sales Development Programs Ltd 
              to discuss how our training solutions can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  We&apos;re here to help you elevate your sales performance. 
                  Reach out to discuss your training needs.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="bg-secondary rounded-xl p-6">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-foreground hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Direct CTA */}
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-xl font-semibold mb-3">Prefer to Call?</h3>
                <p className="text-primary-foreground/70 mb-6">
                  Speak directly with Martin Spires about your training requirements.
                </p>
                <a
                  href="tel:+6421595180"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call +64 21 595 180
                </a>
              </div>
            </div>

            {/* Services & Next Steps */}
            <div className="space-y-8">
              <div className="bg-secondary rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Our Training Programs
                </h3>
                <p className="text-muted-foreground mb-6">
                  Inquire about any of our specialized training programs:
                </p>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-accent">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Initial Consultation</p>
                      <p className="text-sm text-muted-foreground">
                        Discuss your team&apos;s needs and objectives
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-accent">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Tailored Proposal</p>
                      <p className="text-sm text-muted-foreground">
                        Receive a customized training program proposal
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-accent">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Program Delivery</p>
                      <p className="text-sm text-muted-foreground">
                        Expert training delivered to your team
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4 text-balance">
            Send Us an Email
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Prefer to write? Send us an email and we&apos;ll get back to you promptly 
            to discuss your training requirements.
          </p>
          <a
            href="mailto:martin@martinspires.co.nz"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email martin@martinspires.co.nz
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  )
}
