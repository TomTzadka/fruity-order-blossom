
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { toast } from 'sonner';

interface AdminOrder {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  total: number;
  createdAt: string;
  status: string;
}

const AdminOrders = () => {
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would come from your backend
        // Simulating fetching orders with a timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockOrders: AdminOrder[] = [
          {
            id: 'ORD1001',
            customer: {
              name: 'John Doe',
              email: 'john@example.com'
            },
            total: 52.97,
            createdAt: '2025-04-10T15:30:00Z',
            status: 'completed'
          },
          {
            id: 'ORD1002',
            customer: {
              name: 'Jane Smith',
              email: 'jane@example.com'
            },
            total: 27.45,
            createdAt: '2025-04-11T09:45:00Z',
            status: 'pending'
          },
          {
            id: 'ORD1003',
            customer: {
              name: 'Michael Johnson',
              email: 'michael@example.com'
            },
            total: 89.99,
            createdAt: '2025-04-11T14:20:00Z',
            status: 'processing'
          }
        ];
        
        setOrders(mockOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error(language === 'en' ? 'Failed to load orders' : 'נכשל בטעינת הזמנות');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchOrders();
  }, [language]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === 'he' ? 'he-IL' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const containerDir = language === 'he' ? 'rtl' : 'ltr';
  const textAlign = language === 'he' ? 'text-right' : 'text-left';

  const getStatusLabel = (status: string) => {
    if (language === 'en') return status;
    
    // Hebrew translations for status
    switch(status) {
      case 'completed': return 'הושלם';
      case 'pending': return 'ממתין';
      case 'processing': return 'בטיפול';
      default: return status;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12" dir={containerDir}>
      <h1 className={`font-serif text-3xl font-bold mb-6 ${textAlign}`}>
        {t('admin.orders')}
      </h1>
      
      <div className="bg-white rounded-lg shadow-sm border border-gold/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gold/20">
            <thead className="bg-cream">
              <tr>
                <th className={`px-6 py-4 ${textAlign} text-sm font-semibold text-foreground`}>
                  {t('admin.orderId')}
                </th>
                <th className={`px-6 py-4 ${textAlign} text-sm font-semibold text-foreground`}>
                  {t('admin.customer')}
                </th>
                <th className={`px-6 py-4 ${textAlign} text-sm font-semibold text-foreground`}>
                  {t('admin.date')}
                </th>
                <th className={`px-6 py-4 ${textAlign} text-sm font-semibold text-foreground`}>
                  {t('admin.status')}
                </th>
                <th className={`px-6 py-4 ${textAlign} text-sm font-semibold text-foreground`}>
                  {t('admin.total')}
                </th>
                <th className={`px-6 py-4 ${language === 'he' ? 'text-left' : 'text-right'} text-sm font-semibold text-foreground`}>
                  {t('admin.actions')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-foreground">
                    <div className="flex justify-center items-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gold"></div>
                      <span className="ml-2">{t('checkout.processing')}</span>
                    </div>
                  </td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-foreground">
                    {t('admin.noOrders')}
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="hover:bg-cream/30 transition-colors">
                    <td className={`px-6 py-4 text-sm ${textAlign}`}>{order.id}</td>
                    <td className={`px-6 py-4 text-sm ${textAlign}`}>{order.customer.name}</td>
                    <td className={`px-6 py-4 text-sm ${textAlign}`}>{formatDate(order.createdAt)}</td>
                    <td className={`px-6 py-4 text-sm ${textAlign}`}>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === 'completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {getStatusLabel(order.status)}
                      </span>
                    </td>
                    <td className={`px-6 py-4 text-sm ${textAlign}`}>${order.total.toFixed(2)}</td>
                    <td className={`px-6 py-4 ${language === 'he' ? 'text-left' : 'text-right'} text-sm`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-gold border-gold hover:bg-gold/10"
                        asChild
                      >
                        <Link to={`/admin/order/${order.id}`}>
                          {t('admin.view')}
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
