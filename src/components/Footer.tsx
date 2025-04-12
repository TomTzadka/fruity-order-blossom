
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-dark border-t border-gold/10">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/lovable-uploads/07bd8d54-aafb-4481-83e7-d5533029f0db.png"
                alt="La Fruta Logo"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground">
              Premium fruit selection delivered directly to your door.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=fresh" className="text-muted-foreground hover:text-foreground transition-colors">
                  Fresh Fruits
                </Link>
              </li>
              <li>
                <Link to="/products?category=berries" className="text-muted-foreground hover:text-foreground transition-colors">
                  Berries
                </Link>
              </li>
              <li>
                <Link to="/products?category=tropical" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tropical
                </Link>
              </li>
              <li>
                <Link to="/products?category=exotic" className="text-muted-foreground hover:text-foreground transition-colors">
                  Exotic
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} La Fruta. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
