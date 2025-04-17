import axios from 'axios';
import { API_URL } from '@/config';

export const createPaymentIntent = async (amount: number) => {
  const response = await axios.post(`${API_URL}/api/payments/create-intent`, {
    amount,
  });
  return response.data;
};
