const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const getProducts = async (category = 'all', featured = false) => {
  const params = new URLSearchParams();
  params.append('category', category);
  if (featured) {
    params.append('featured', 'true');
  }

  const res = await fetch(`${API_URL}/api/products?${params.toString()}`);

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
};


export const getProduct = async (productId: string) => {
  const res = await fetch(`${API_URL}/api/products/${productId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
};

export const createOrder = async (orderData: any) => {
  const res = await fetch(`${API_URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });

  if (!res.ok) {
    throw new Error('Failed to create order');
  }

  return res.json();
};

export type Product = {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  stock: number;
  featured: boolean;
};

