
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { mockCreateOrder } from '@/services/api';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, CreditCard } from 'lucide-react';
import CreditCardInput, { CardData } from '@/components/CreditCardInput';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [cardData, setCardData] = useState<CardData>({
    number: '',
    expiry: '',
    cvc: '',
    valid: false
  });

  // Redirect to cart if cart is empty
  React.useEffect(() => {
    if (items.length === 0) {
      navigate('/cart');
    }
  }, [items.length, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCardChange = (data: CardData) => {
    setCardData(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cardData.valid) {
      toast.error('Please enter valid card information');
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Prepare order data
      const orderData = {
        items: items.map((item) => ({
          productId: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        customer: customerInfo,
        total: totalPrice,
        // In a real app, you wouldn't send the actual card data to the backend
        // Instead, you'd use a secure payment processor (Stripe, etc.)
        // Here we're just showing the structure
        payment: {
          method: 'credit_card',
          // We're not storing the full card number for security reasons
          // Just the last 4 digits for reference
          last4: cardData.number.slice(-4),
        }
      };

      // Send order to backend
      const response = await mockCreateOrder(orderData);
      
      // Clear cart and show success message
      clearCart();
      toast.success('Order placed successfully!');
      
      // Navigate to confirmation page
      navigate(`/confirmation/${response.order_id}`);
    } catch (error) {
      console.error('Error creating order:', error);
      toast.error('Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return null; // Will redirect via useEffect
  }

  const containerDir = language === 'he' ? 'rtl' : 'ltr';
  const textAlign = language === 'he' ? 'text-right' : 'text-left';

  return (
    <div className="container mx-auto px-4 md:px-6 py-12" dir={containerDir}>
      <div className="max-w-3xl mx-auto">
        <h1 className={`font-serif text-3xl font-bold mb-8 ${textAlign}`}>
          {t('checkout.title')}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <h2 className={`font-serif text-xl font-semibold ${textAlign}`}>
              {t('checkout.contact')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  {t('checkout.name')} <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  required
                  className="border-gold/30 focus:ring-gold"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {t('checkout.email')} <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  required
                  className="border-gold/30 focus:ring-gold"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  {t('checkout.phone')} <span className="text-destructive">*</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  required
                  className="border-gold/30 focus:ring-gold"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="address" className="text-sm font-medium">
                  {t('checkout.address')} <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="address"
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  required
                  className="border-gold/30 focus:ring-gold"
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <h2 className={`font-serif text-xl font-semibold ${textAlign}`}>
              {t('checkout.payment')}
            </h2>
            
            <div className="p-4 border border-gold/20 rounded-lg bg-cream/20">
              <div className="flex items-center mb-4">
                <CreditCard className="h-5 w-5 text-gold mr-2" />
                <h3 className="font-medium">{t('checkout.card')}</h3>
              </div>
              
              <CreditCardInput onCardChange={handleCardChange} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className={`font-serif text-xl font-semibold mb-4 ${textAlign}`}>
              {t('checkout.summary')}
            </h2>
            
            <div className="divide-y divide-muted">
              {items.map((item) => (
                <div key={item.id} className="py-3 flex justify-between">
                  <div className="flex items-center">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-muted-foreground mx-2">x{item.quantity}</div>
                  </div>
                  <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-muted mt-4 pt-4">
              <div className="flex justify-between text-lg font-medium">
                <span>{t('cart.total')}</span>
                <span className="text-gold">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold hover:bg-gold-dark text-white py-6 rounded-full text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                {t('checkout.processing')}
              </>
            ) : (
              t('checkout.placeOrder')
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
