
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';

interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderDetail {
  id: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: OrderItem[];
  total: number;
  status: string;
  createdAt: string;
}

const AdminOrderDetail = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would come from your backend
        // Simulating fetching order with a timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockOrder: OrderDetail = {
          id: orderId || 'ORD1001',
          customer: {
            name: 'John Doe',
            email: 'john@example.com',
            phone: '+1 (555) 123-4567',
            address: '123 Main St, Anytown, USA'
          },
          items: [
            {
              productId: 'fruit-001',
              name: 'Premium Organic Apples',
              price: 5.99,
              quantity: 3
            },
            {
              productId: 'fruit-002',
              name: 'Golden Mangoes',
              price: 7.99,
              quantity: 2
            },
            {
              productId: 'fruit-004',
              name: 'Exotic Dragon Fruit',
              price: 9.99,
              quantity: 1
            }
          ],
          total: 52.97,
          status: 'completed',
          createdAt: '2025-04-10T15:30:00Z'
        };
        
        setOrder(mockOrder);
      } catch (error) {
        console.error('Error fetching order details:', error);
        toast.error('Failed to load order details');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchOrderDetails();
  }, [orderId]);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === 'he' ? 'he-IL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const containerDir = language === 'he' ? 'rtl' : 'ltr';

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center" dir={containerDir}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold"></div>
        <span className="ml-2">{t('checkout.processing')}</span>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-12 text-center" dir={containerDir}>
        <p>Order not found</p>
        <Button asChild className="mt-4 bg-gold hover:bg-gold-dark text-white">
          <Link to="/admin/orders">{t('admin.back')}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12" dir={containerDir}>
      <Button
        variant="ghost"
        className="flex items-center mb-6 text-gold hover:text-gold-dark"
        asChild
      >
        <Link to="/admin/orders">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('admin.back')}
        </Link>
      </Button>

      <h1 className={`font-serif text-3xl font-bold mb-6 ${language === 'he' ? 'text-right' : 'text-left'}`}>
        {t('admin.orderDetails')} - {order.id}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gold/20 p-6">
          <h2 className="font-serif text-xl font-semibold mb-4">
            {t('admin.customerInfo')}
          </h2>
          <div className="space-y-2">
            <p><strong>{t('checkout.name')}:</strong> {order.customer.name}</p>
            <p><strong>{t('checkout.email')}:</strong> {order.customer.email}</p>
            <p><strong>{t('checkout.phone')}:</strong> {order.customer.phone}</p>
            <p><strong>{t('checkout.address')}:</strong> {order.customer.address}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gold/20 p-6">
          <h2 className="font-serif text-xl font-semibold mb-4">
            {t('checkout.summary')}
          </h2>
          <div className="space-y-2">
            <p><strong>{t('admin.orderId')}:</strong> {order.id}</p>
            <p><strong>{t('admin.date')}:</strong> {formatDate(order.createdAt)}</p>
            <p>
              <strong>{t('admin.status')}:</strong> 
              <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                order.status === 'completed' ? 'bg-green-100 text-green-800' :
                order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {order.status}
              </span>
            </p>
            <p><strong>{t('cart.total')}:</strong> ${order.total.toFixed(2)}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gold/20 overflow-hidden">
        <h2 className="font-serif text-xl font-semibold p-6 border-b border-gold/20">
          {t('admin.items')}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gold/10">
            <thead className="bg-cream/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  {t('products.title')}
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  {t('products.price')}
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  {t('admin.quantity')}
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">
                  {t('cart.total')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {order.items.map((item) => (
                <tr key={item.productId} className="hover:bg-cream/20 transition-colors">
                  <td className="px-6 py-4 text-sm">{item.name}</td>
                  <td className="px-6 py-4 text-sm">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm">{item.quantity}</td>
                  <td className="px-6 py-4 text-right text-sm">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr className="bg-cream/30">
                <td colSpan={3} className="px-6 py-4 text-right font-medium">
                  {t('cart.total')}
                </td>
                <td className="px-6 py-4 text-right font-medium text-gold">
                  ${order.total.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetail;
