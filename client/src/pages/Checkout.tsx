import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { createOrder } from '@/services/api';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, CreditCard } from 'lucide-react';
import CreditCardInput, { CardData } from '@/components/CreditCardInput';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (paymentMethod: string, cardData?: CardData) => {
    if (!name || !email) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    try {
      const orderData = {
        customer: { name, email },
        total: totalPrice,
        items,
        notes,
        payment: {
          method: paymentMethod,
          card: cardData ? { last4: cardData.last4 } : undefined,
        },
      };

      const response = await createOrder(orderData);
      clearCart();
      toast.success('Order placed successfully!');
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl mb-4">Checkout</h1>
      <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Textarea placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />

      <Elements stripe={stripePromise}>
        <CreditCardInput onSubmit={handleSubmit} loading={loading} />
      </Elements>

      <Button onClick={() => handleSubmit('cash')} disabled={loading} className="mt-4">
        {loading ? <Loader2 className="animate-spin" /> : 'Pay with Cash'}
      </Button>
    </div>
  );
};

export default CheckoutPage;
