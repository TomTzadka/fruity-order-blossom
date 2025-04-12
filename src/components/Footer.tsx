
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();
  
  const containerDir = language === 'he' ? 'rtl' : 'ltr';
  const textAlign = language === 'he' ? 'text-right' : 'text-left';

  return (
    <footer className="bg-cream-dark border-t border-gold/10" dir={containerDir}>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className={`md:col-span-1 ${textAlign}`}>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/lovable-uploads/07bd8d54-aafb-4481-83e7-d5533029f0db.png"
                alt="La Fruta Logo"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground">
              {t('footer.tagline')}
            </p>
            <div className={`flex ${language === 'he' ? 'space-x-reverse space-x-4' : 'space-x-4'} mt-6`}>
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

          <div className={textAlign}>
            <h3 className="font-medium mb-4">{t('footer.shop')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.allProducts')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=fresh" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.freshFruits')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=berries" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.berries')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=tropical" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.tropical')}
                </Link>
              </li>
              <li>
                <Link to="/products?category=exotic" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.exotic')}
                </Link>
              </li>
            </ul>
          </div>

          <div className={textAlign}>
            <h3 className="font-medium mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.blog')}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.careers')}
                </Link>
              </li>
            </ul>
          </div>

          <div className={textAlign}>
            <h3 className="font-medium mb-4">{t('footer.support')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.shipping')}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} La Fruta. {t('footer.copyright')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
              {t('footer.privacy')}
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-foreground">
              {t('footer.terms')}
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
