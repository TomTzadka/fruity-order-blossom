
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();
  
  const containerDir = language === 'he' ? 'rtl' : 'ltr';
  const textAlign = language === 'he' ? 'text-right' : 'text-left';

  return (
    <div className="min-h-screen" dir={containerDir}>
      {/* Hero Section */}
      <section className="bg-cream py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-lg text-foreground/80">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={language === 'he' ? 'order-2' : ''}>
              <img 
                src="/lovable-uploads/07bd8d54-aafb-4481-83e7-d5533029f0db.png" 
                alt="La Fruta Story" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className={`${textAlign} ${language === 'he' ? 'order-1' : ''}`}>
              <span className="text-gold font-medium mb-2 inline-block">{t('about.storyTitle')}</span>
              <h2 className="font-serif text-3xl font-bold mb-6">{t('about.storySubtitle')}</h2>
              <div className={`prose prose-lg ${textAlign}`}>
                <p>
                  {t('about.story1')}
                </p>
                <p>
                  {t('about.story2')}
                </p>
                <p>
                  {t('about.story3')}
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
            <span className="text-gold font-medium mb-2 inline-block">{t('about.valuesTitle')}</span>
            <h2 className="font-serif text-3xl font-bold mb-4">{t('about.valuesSubtitle')}</h2>
            <p className="text-lg text-foreground/80">
              {t('about.valuesDescription')}
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
              <h3 className={`font-serif text-xl font-semibold mb-3 ${textAlign}`}>{t('about.value1Title')}</h3>
              <p className={`text-foreground/80 ${textAlign}`}>
                {t('about.value1Description')}
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
              <h3 className={`font-serif text-xl font-semibold mb-3 ${textAlign}`}>{t('about.value2Title')}</h3>
              <p className={`text-foreground/80 ${textAlign}`}>
                {t('about.value2Description')}
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
              <h3 className={`font-serif text-xl font-semibold mb-3 ${textAlign}`}>{t('about.value3Title')}</h3>
              <p className={`text-foreground/80 ${textAlign}`}>
                {t('about.value3Description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">{t('about.ctaTitle')}</h2>
            <p className="text-lg text-foreground/80 mb-8">
              {t('about.ctaDescription')}
            </p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-white rounded-full px-8 py-6 text-lg">
              <Link to="/products">{t('about.ctaButton')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
