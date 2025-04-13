
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { GlobeIcon } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 border-gold text-gold hover:bg-gold/10"
      title={language === 'en' ? 'Switch to Hebrew' : 'Switch to English'}
    >
      <GlobeIcon className="h-4 w-4" />
      <span className="font-bold">
        {language === 'en' ? 'עברית' : 'English'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
