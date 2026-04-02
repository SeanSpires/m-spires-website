import { Link } from 'react-router-dom'
import { ArrowRight, ZoomIn } from 'lucide-react'
import { useState } from 'react'

// Import testimonial letter images
import letter002 from '../assets/images/002.jpg'
import letter034 from '../assets/images/034.jpg'
import letter066 from '../assets/images/066.jpg'
import letter078 from '../assets/images/078.jpg'
import letter080 from '../assets/images/080.jpg'
import letter088 from '../assets/images/088.jpg'
import letterGEA from '../assets/images/GEA.jpg'
import letterAltex from '../assets/images/altex.jpg'
import letterAtlas from '../assets/images/atlas.jpg'
import letterBsb from '../assets/images/bsb.jpg'
import letterBuildtrust from '../assets/images/buildtrust.jpg'
import letterDex from '../assets/images/dex.jpg'
import letterEtl from '../assets/images/etl.jpg'
import letterGeaNew from '../assets/images/gea-new.jpg'
import letterGranite from '../assets/images/granite.jpg'
import letterHella from '../assets/images/hella.jpg'
import letterHomag from '../assets/images/homag.jpg'
import letterJacks from '../assets/images/jacks.jpg'
import letterMapei from '../assets/images/mapei.jpg'
import letterNda from '../assets/images/nda.jpg'
import letterPepper from '../assets/images/pepper.jpg'
import letterPoly from '../assets/images/poly.jpg'
import letterSika from '../assets/images/sika.jpg'
import letterStiles from '../assets/images/stiles.jpg'

const testimonialLetters = [
  { image: letterSika, company: 'Sika' },
  { image: letterMapei, company: 'Mapei' },
  { image: letterGEA, company: 'GEA' },
  { image: letterGeaNew, company: 'GEA' },
  { image: letterAtlas, company: 'Atlas Copco' },
  { image: letterBsb, company: 'BS&B Safety Systems' },
  { image: letterDex, company: 'Dexion' },
  { image: letterHella, company: 'Hella' },
  { image: letterHomag, company: 'Homag' },
  { image: letterJacks, company: 'Jacks' },
  { image: letterNda, company: 'NDA Engineering' },
  { image: letterPepper, company: 'Pepper' },
  { image: letterPoly, company: 'Poly' },
  { image: letterStiles, company: 'Stiles' },
  { image: letterGranite, company: 'Granite' },
  { image: letterBuildtrust, company: 'Buildtrust' },
  { image: letterAltex, company: 'Altex' },
  { image: letterEtl, company: 'ETL' },
  { image: letter002, company: 'Client' },
  { image: letter034, company: 'Client' },
  { image: letter066, company: 'Client' },
  { image: letter078, company: 'Client' },
  { image: letter080, company: 'Client' },
  { image: letter088, company: 'Client' },
]

export function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
              Client Testimonials
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Read what organisations around the world have to say about their experience 
              working with Sales Development Programs Ltd and Martin Spires.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Letters Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mb-4">
              Letters from Our Clients
            </h2>
            <p className="text-muted-foreground">
              Click on any letter to view it in full size
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {testimonialLetters.map((letter, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(letter.image)}
                className="group relative bg-background border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={letter.image}
                    alt={`Testimonial letter from ${letter.company}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <ZoomIn className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4">
                  <p className="text-primary-foreground font-medium text-sm">{letter.company}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-secondary hover:bg-muted rounded-full p-3 transition-colors"
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Testimonial letter"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

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
            Discover how our training programmes can help your organisation achieve 
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
              Learn About Our Programmes
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
