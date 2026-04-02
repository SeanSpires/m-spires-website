import { Link } from 'react-router-dom'
import { 
  Award, 
  Handshake, 
  Presentation, 
  HeadphonesIcon, 
  Users, 
  GraduationCap,
  ArrowRight,
  Check
} from 'lucide-react'

const objectives = [
  'Build up and use negotiating leverage',
  'Implement outstanding presentations',
  'Increase the strike ratio of the sales team',
  'Preserve margins',
  'Increase the confidence of the team',
  'Communicate value to their customers',
  'Ensure that the team present themselves as proactive problem solvers',
  'Present a consistently positive image of the organization to the customer',
  'Cost justify the decision to purchase, specify or recommend solutions',
  'Ensure that the Trainers implement exciting and challenging training programs',
]

const programs = [
  { icon: Award, name: 'Value-Based Selling Skills' },
  { icon: Handshake, name: 'Negotiating Skills' },
  { icon: Presentation, name: 'Presentation Skills' },
  { icon: HeadphonesIcon, name: 'Customer Service Skills' },
  { icon: Users, name: 'Account Management Skills' },
  { icon: GraduationCap, name: 'Train the Trainer' },
]

const clientLogos = [
  'ABB Group', 'Singtel', 'Nissan', 'IKEA',
  'DHL', 'Shell', 'DBS Bank', 'OCBC Bank',
  'Nokia', 'NCR Corporation', 'Omron', 'Volvo',
]

const additionalClients = [
  ['Maersk Sealand', 'Panalpina', 'Kuehne & Nagel', 'Hapag Lloyd', 'ABX Logistics', 'BAX Global', 'Vetco Gray', 'Baker Oil Tools'],
  ['Westinghouse', 'Atlas Copco', 'Yokogawa', 'P&O Nedlloyd', 'Degussa', 'ITT Industries', 'MTU', 'WR Grace'],
  ['George Kent', 'Ingersoll Rand', 'Schlumberger', 'Robert Bosch', 'Deutz-MWM', 'Abacus International', 'Sumitomo', 'Flowserve'],
]

export function CompanyFocus() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
              <span className="w-8 h-px bg-accent" />
              What We Do
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground mb-6 text-balance">
              Company Focus
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sales Development Programs Ltd provides training solutions to assist its 
              customers to achieve measurable business objectives and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">
                Training Solutions That Drive Results
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our comprehensive training programs are designed to help organizations 
                develop high-performing sales teams that consistently deliver results. 
                We focus on practical, actionable skills that create immediate impact.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Discuss Your Needs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                We help your team to:
              </h3>
              <ul className="space-y-4">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4 text-balance">
              Training Programs
            </h2>
            <p className="text-primary-foreground/70">
              In order to achieve these business objectives in measurable terms, 
              Sales Development Programs Ltd provides training programs in the following areas:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div
                key={program.name}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{program.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
              <span className="w-8 h-px bg-accent" />
              Track Record
              <span className="w-8 h-px bg-accent" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4 text-balance">
              Trusted by Leading Organizations
            </h2>
            <p className="text-muted-foreground">
              Over 40 years, Sales Development Programs Ltd has provided in-house training 
              for a huge range of companies worldwide.
            </p>
          </div>

          {/* Featured Clients */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {clientLogos.map((client) => (
              <div
                key={client}
                className="bg-secondary rounded-xl p-6 flex items-center justify-center"
              >
                <span className="font-medium text-foreground text-center">{client}</span>
              </div>
            ))}
          </div>

          {/* Additional Clients */}
          <div className="bg-secondary rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
              Additional Clients
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {additionalClients.map((column, columnIndex) => (
                <ul key={columnIndex} className="space-y-2">
                  {column.map((client) => (
                    <li 
                      key={client}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {client}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4 text-balance">
            Join Our Growing List of Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover how our training programs can transform your sales team and 
            drive measurable business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/testimonials"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium border border-border text-foreground rounded-full hover:bg-background transition-colors"
            >
              View Testimonials
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
