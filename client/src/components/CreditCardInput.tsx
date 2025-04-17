import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export type CardData = {
  last4: string;
};

export type CreditCardInputProps = {
  onSubmit: (paymentMethod: 'credit_card', cardData?: CardData) => void;
  loading: boolean;
};

const CreditCardInput: React.FC<CreditCardInputProps> = ({ onSubmit, loading }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    if (!stripe || !elements) {
      setError('Stripe has not loaded yet.');
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError('Card Element not found.');
      return;
    }

    const result = await stripe.createToken(cardElement);

    if (result.error) {
      setError(result.error.message || 'Payment failed');
    } else if (result.token) {
      const last4 = result.token.card?.last4 || '';
      onSubmit('credit_card', { last4 });
    }
  };

  return (
    <div className="mt-4">
      <CardElement />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <Button onClick={handlePayment} disabled={loading} className="mt-4 w-full">
        {loading ? <Loader2 className="animate-spin" /> : 'Pay with Credit Card'}
      </Button>
    </div>
  );
};

export default CreditCardInput;
