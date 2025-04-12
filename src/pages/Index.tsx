
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { mockGetProducts, Product } from '@/services/api';

const Index = () => {
  const { data: featuredProducts, isLoading } = useQuery({
    queryKey: ['products', 'featured'],
    queryFn: async () => {
      const products = await mockGetProducts();
      return products.filter(product => product.featured);
    },
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-cream min-h-[70vh] flex items-center">
          <div className="container mx-auto px-4 md:px-6 py-20 md:py-24 lg:py-32">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gold-gradient">
                Discover Fresh Premium Fruit
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
                Hand-selected fruits delivered straight to your door. Experience the finest quality produce with La Fruta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-gold hover:bg-gold-dark text-white rounded-full px-8 py-6 text-lg">
                  <Link to="/products">Shop Now</Link>
                </Button>
                <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/5 rounded-full px-8 py-6 text-lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="flex items-center text-gold hover:underline">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="product-card animate-pulse">
                  <div className="aspect-square bg-muted"></div>
                  <div className="p-4">
                    <div className="h-6 bg-muted rounded-md mb-2"></div>
                    <div className="h-5 bg-muted rounded-md w-24"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts?.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  unit={product.unit}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-medium mb-2 inline-block">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Premium Fruit Selection</h2>
              <p className="text-foreground/80 mb-6">
                At La Fruta, we believe in offering only the highest quality fruits sourced from trusted farms around the world. Our expert team handpicks each fruit to ensure premium quality and exceptional taste.
              </p>
              <p className="text-foreground/80 mb-8">
                From exotic varieties to seasonal favorites, discover a curated selection that brings nature's best flavors to your table.
              </p>
              <Button asChild className="bg-gold hover:bg-gold-dark text-white rounded-full px-6">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/07bd8d54-aafb-4481-83e7-d5533029f0db.png" 
                alt="About La Fruta" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Join Our Fruity Newsletter</h2>
            <p className="text-foreground/80 mb-8">
              Subscribe to receive updates on seasonal fruits, special offers, and healthy recipes.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-12 w-full rounded-full border border-input bg-background px-5 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                required
              />
              <Button type="submit" className="bg-gold hover:bg-gold-dark text-white h-12 rounded-full px-6">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
