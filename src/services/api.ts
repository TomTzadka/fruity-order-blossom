
import { toast } from 'sonner';

const API_BASE_URL = 'http://localhost:5000/api';

// Generic fetch function with error handling
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'An error occurred');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    toast.error(message);
    throw error;
  }
}

// Product types
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  category: string;
  stock: number;
  image: string;
  featured: boolean;
};

// Order types
export type OrderItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
};

export type Order = {
  id?: string;
  items: OrderItem[];
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  total: number;
  status?: string;
  createdAt?: string;
};

// API functions
export async function getProducts(category?: string): Promise<Product[]> {
  const endpoint = `/products${category && category !== 'all' ? `?category=${category}` : ''}`;
  return fetchAPI<Product[]>(endpoint);
}

export async function getProduct(id: string): Promise<Product> {
  return fetchAPI<Product>(`/products/${id}`);
}

export async function createOrder(orderData: Omit<Order, 'id' | 'status' | 'createdAt'>): Promise<{ message: string; order_id: string }> {
  return fetchAPI<{ message: string; order_id: string }>('/orders', {
    method: 'POST',
    body: JSON.stringify(orderData),
  });
}

// Mock function that doesn't actually hit the backend (since we don't have the backend running)
export async function mockGetProducts(category?: string): Promise<Product[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  try {
    // Load products from a mock file
    const mockProducts = [
      {
        "id": "fruit-001",
        "name": "Premium Organic Apples",
        "description": "Crisp, sweet organic apples handpicked from our orchards. Perfect for snacking, baking, or adding to your favorite recipes.",
        "price": 5.99,
        "unit": "lb",
        "category": "fresh",
        "stock": 100,
        "image": "/lovable-uploads/07bd8d54-aafb-4481-83e7-d5533029f0db.png",
        "featured": true
      },
      {
        "id": "fruit-002",
        "name": "Golden Mangoes",
        "description": "Sweet, juicy mangoes imported from the finest tropical farms. Enjoy the rich flavor of perfectly ripened mangoes.",
        "price": 7.99,
        "unit": "lb",
        "category": "fresh",
        "stock": 75,
        "image": "/lovable-uploads/07bd8d54-aafb-4481-83e7-d5533029f0db.png",
        "featured": true
      },
      {
        "id": "fruit-003",
        "name": "Organic Blueberries",
        "description": "Sweet and tangy organic blueberries packed with antioxidants. Perfect for breakfast, desserts, or simply enjoying by the handful.",
        "price": 4.99,
        "unit": "6 oz",
        "category": "berries",
        "stock": 50,
        "image": "/lovable-uploads/07bd8d54-aafb-4481-83e7-d5533029f0db.png",
        "featured": false
      },
      {
        "id": "fruit-004",
        "name": "Exotic Dragon Fruit",
        "description": "Visually stunning and deliciously mild dragon fruit. This tropical delicacy adds vibrant color and nutrition to fruit salads and smoothies.",
        "price": 9.99,
        "unit": "each",
        "category": "exotic",
        "stock": 30,
        "image": "/lovable-uploads/07bd8d54-aafb-4481-83e7-d5533029f0db.png",
        "featured": true
      }
    ];
    
    if (category && category !== 'all') {
      return mockProducts.filter(p => p.category === category);
    }
    
    return mockProducts;
  } catch (error) {
    console.error('Error loading mock products', error);
    return [];
  }
}

export async function mockGetProduct(id: string): Promise<Product> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const mockProducts = await mockGetProducts();
  const product = mockProducts.find(p => p.id === id);
  
  if (!product) {
    throw new Error('Product not found');
  }
  
  return product;
}

export async function mockCreateOrder(orderData: Omit<Order, 'id' | 'status' | 'createdAt'>): Promise<{ message: string; order_id: string }> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate order creation
  const orderId = `ORD${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  
  return {
    message: 'Order created successfully',
    order_id: orderId
  };
}
