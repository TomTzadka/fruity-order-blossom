
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('admin_token') !== null;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/');
  };

  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/products', label: t('nav.products') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-2xl font-serif font-bold gold-gradient">La Fruta</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center gap-6 ${language === 'he' ? 'mr-auto' : 'ml-auto'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground/80 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {isAdmin ? (
              <>
                <Link to="/admin/orders" className="text-foreground/80 hover:text-gold transition-colors">
                  {t('nav.admin')}
                </Link>
                <Button variant="ghost" onClick={handleLogout}>
                  {t('nav.logout')}
                </Button>
              </>
            ) : (
              <Link to="/admin/login" className="text-foreground/80 hover:text-gold transition-colors">
                {t('nav.login')}
              </Link>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <LanguageSwitcher />
            
            <Link to="/cart" className="relative p-1" aria-label="Cart">
              <ShoppingCart className="h-6 w-6 text-foreground/80 hover:text-gold transition-colors" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="p-1 md:hidden"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-foreground/80 hover:text-gold"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            {isAdmin ? (
              <>
                <Link 
                  to="/admin/orders" 
                  className="block py-2 text-foreground/80 hover:text-gold"
                  onClick={closeMenu}
                >
                  {t('nav.admin')}
                </Link>
                <Button variant="ghost" onClick={() => {
                  handleLogout();
                  closeMenu();
                }}>
                  {t('nav.logout')}
                </Button>
              </>
            ) : (
              <Link 
                to="/admin/login" 
                className="block py-2 text-foreground/80 hover:text-gold"
                onClick={closeMenu}
              >
                {t('nav.login')}
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
