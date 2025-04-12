
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Flag } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="relative"
      title={language === 'en' ? 'Switch to Hebrew' : 'Switch to English'}
    >
      <Flag className="h-5 w-5" />
      <span className="absolute -bottom-1 -right-1 text-xs font-bold">
        {language === 'en' ? 'עב' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
