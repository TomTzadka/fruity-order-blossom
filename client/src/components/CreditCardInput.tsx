
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { CreditCard } from 'lucide-react';

interface CreditCardInputProps {
  onCardChange: (cardData: CardData) => void;
}

export interface CardData {
  number: string;
  expiry: string;
  cvc: string;
  valid: boolean;
}

const CreditCardInput: React.FC<CreditCardInputProps> = ({ onCardChange }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 3) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return value;
  };
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatCardNumber(e.target.value);
    setCardNumber(value);
    validateAndUpdate(value, expiry, cvc);
  };
  
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatExpiry(e.target.value);
    setExpiry(value);
    validateAndUpdate(cardNumber, value, cvc);
  };
  
  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '').substring(0, 3);
    setCvc(value);
    validateAndUpdate(cardNumber, expiry, value);
  };
  
  const validateAndUpdate = (number: string, exp: string, securityCode: string) => {
    // Simple validation
    const isCardNumberValid = number.replace(/\s/g, '').length >= 16;
    const isExpiryValid = /^\d{2}\/\d{2}$/.test(exp);
    const isCvcValid = securityCode.length === 3;
    
    onCardChange({
      number,
      expiry: exp,
      cvc: securityCode,
      valid: isCardNumberValid && isExpiryValid && isCvcValid
    });
  };
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center">
          <label htmlFor="cardNumber" className="text-sm font-medium">
            Card Number <span className="text-destructive">*</span>
          </label>
          <CreditCard className="ml-2 h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength={19}
          className="border-gold/30 focus:ring-gold"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="expiry" className="text-sm font-medium">
            Expiration Date <span className="text-destructive">*</span>
          </label>
          <Input
            id="expiry"
            placeholder="MM/YY"
            value={expiry}
            onChange={handleExpiryChange}
            maxLength={5}
            className="border-gold/30 focus:ring-gold"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="cvc" className="text-sm font-medium">
            CVC <span className="text-destructive">*</span>
          </label>
          <Input
            id="cvc"
            placeholder="123"
            value={cvc}
            onChange={handleCvcChange}
            maxLength={3}
            type="password"
            className="border-gold/30 focus:ring-gold"
          />
        </div>
      </div>
    </div>
  );
};

export default CreditCardInput;
