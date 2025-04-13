
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const OrderConfirmation = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { t, language } = useLanguage();
  
  const containerDir = language === 'he' ? 'rtl' : 'ltr';
  const textAlign = language === 'he' ? 'text-right' : 'text-left';

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24" dir={containerDir}>
      <div className="max-w-lg mx-auto text-center">
        <div className="bg-cream rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="h-12 w-12 text-gold" />
        </div>
        
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          {t('confirmation.title')}
        </h1>
        
        <p className="text-lg text-muted-foreground mb-4">
          {t('confirmation.message')}
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gold/10 mb-8">
          <div className="text-sm text-muted-foreground mb-2">{t('confirmation.reference')}</div>
          <div className="text-xl font-medium font-serif">{orderId}</div>
        </div>
        
        <p className="text-muted-foreground mb-8">
          {t('confirmation.email')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-gold hover:bg-gold-dark text-white rounded-full">
            <Link to="/products">{t('confirmation.continue')}</Link>
          </Button>
          
          <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/5 rounded-full">
            <Link to="/">{t('confirmation.home')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
