
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <header className="border-b border-gold/20 py-4 px-4 md:px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/07bd8d54-aafb-4481-83e7-d5533029f0db.png" 
              alt="La Fruta Logo" 
              className="h-12 md:h-16 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-gold font-medium transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-foreground hover:text-gold font-medium transition-colors">
            Shop
          </Link>
          <Link to="/about" className="text-foreground hover:text-gold font-medium transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-foreground hover:text-gold font-medium transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-foreground hover:text-gold transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-6 mt-8">
                <Link to="/" className="text-foreground hover:text-gold font-medium text-lg transition-colors">
                  Home
                </Link>
                <Link to="/products" className="text-foreground hover:text-gold font-medium text-lg transition-colors">
                  Shop
                </Link>
                <Link to="/about" className="text-foreground hover:text-gold font-medium text-lg transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-foreground hover:text-gold font-medium text-lg transition-colors">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
