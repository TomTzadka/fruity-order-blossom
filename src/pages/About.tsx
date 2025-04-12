
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cream py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About La Fruta</h1>
            <p className="text-lg text-foreground/80">
              Premium fruit purveyors, delivering nature's best directly to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/07bd8d54-aafb-4481-83e7-d5533029f0db.png" 
                alt="La Fruta Story" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <span className="text-gold font-medium mb-2 inline-block">Our Story</span>
              <h2 className="font-serif text-3xl font-bold mb-6">From Orchard to Table</h2>
              <div className="prose prose-lg">
                <p>
                  La Fruta was founded with a simple mission: to connect people with the finest fruits nature has to offer. Our journey began in 2015 when our founder, passionate about quality produce, noticed how difficult it was to find consistently excellent fruit in urban areas.
                </p>
                <p>
                  Today, we work directly with sustainable farms and orchards around the world to source premium fruits that meet our exacting standards for taste, freshness, and ethical production.
                </p>
                <p>
                  Each piece of fruit in our selection is hand-picked at peak ripeness and carefully inspected before making its way to your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-gold font-medium mb-2 inline-block">Our Values</span>
            <h2 className="font-serif text-3xl font-bold mb-4">What Drives Us</h2>
            <p className="text-lg text-foreground/80">
              Our commitment to quality extends beyond taste to encompass ethics, sustainability, and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/07bd8d54-aafb-4481-83e7-d5533029f0db.png" 
                  alt="Freshness" 
                  className="w-6 h-6"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Freshness First</h3>
              <p className="text-foreground/80">
                We prioritize freshness above all else, ensuring that every fruit reaches you at the peak of its flavor and nutritional value.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/07bd8d54-aafb-4481-83e7-d5533029f0db.png" 
                  alt="Sustainability" 
                  className="w-6 h-6"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Sustainable Practices</h3>
              <p className="text-foreground/80">
                We partner with farms that use sustainable growing methods, minimizing environmental impact while maximizing flavor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/07bd8d54-aafb-4481-83e7-d5533029f0db.png" 
                  alt="Community" 
                  className="w-6 h-6"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Supporting Communities</h3>
              <p className="text-foreground/80">
                We believe in fair compensation for farmers and supporting the communities where our fruits are grown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Experience La Fruta Today</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Taste the difference that quality makes. Browse our selection of premium fruits and have them delivered straight to your door.
            </p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-white rounded-full px-8 py-6 text-lg">
              <Link to="/products">Shop Our Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
