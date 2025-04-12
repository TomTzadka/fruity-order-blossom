
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real app, you'd authenticate with the backend here
    // For this demo, we'll just check for a hardcoded admin credential
    if (email === 'admin@example.com' && password === 'admin123') {
      // Set a token in localStorage to represent auth state
      localStorage.setItem('admin_token', 'demo_admin_token');
      
      setTimeout(() => {
        setIsLoading(false);
        toast.success('Login successful');
        navigate('/admin/orders');
      }, 1000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        toast.error('Invalid email or password');
      }, 1000);
    }
  };

  const containerDir = language === 'he' ? 'rtl' : 'ltr';

  return (
    <div className="container mx-auto px-4 py-12" dir={containerDir}>
      <div className="max-w-md mx-auto">
        <h1 className={`font-serif text-3xl font-bold mb-6 ${language === 'he' ? 'text-right' : 'text-left'}`}>
          {t('admin.login')}
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gold/20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {t('admin.email')}
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-gold/30 focus:ring-gold"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                {t('admin.password')}
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-gold/30 focus:ring-gold"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gold hover:bg-gold-dark text-white py-2 rounded-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t('checkout.processing')}
                </>
              ) : (
                t('admin.submit')
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
