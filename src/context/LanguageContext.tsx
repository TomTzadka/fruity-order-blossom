
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'he';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cart': 'Cart',
    'nav.admin': 'Admin',
    'nav.logout': 'Logout',
    'nav.login': 'Admin Login',
    
    // Product pages
    'products.title': 'Our Fresh Fruits',
    'products.all': 'All Products',
    'products.fresh': 'Fresh Fruits',
    'products.berries': 'Berries',
    'products.exotic': 'Exotic Fruits',
    'products.price': 'Price',
    'products.add': 'Add to Cart',
    
    // Cart
    'cart.title': 'Your Cart',
    'cart.empty': 'Your cart is empty',
    'cart.total': 'Total',
    'cart.checkout': 'Proceed to Checkout',
    'cart.continueShopping': 'Continue Shopping',
    'cart.remove': 'Remove',
    
    // Checkout
    'checkout.title': 'Checkout',
    'checkout.contact': 'Contact Information',
    'checkout.name': 'Full Name',
    'checkout.email': 'Email Address',
    'checkout.phone': 'Phone Number',
    'checkout.address': 'Delivery Address',
    'checkout.payment': 'Payment Method',
    'checkout.card': 'Credit Card',
    'checkout.cardNumber': 'Card Number',
    'checkout.cardExpiry': 'Expiration Date (MM/YY)',
    'checkout.cardCvc': 'CVC',
    'checkout.summary': 'Order Summary',
    'checkout.placeOrder': 'Place Order',
    'checkout.processing': 'Processing...',
    
    // Confirmation
    'confirmation.title': 'Thank You for Your Order!',
    'confirmation.message': 'Your order has been successfully placed. We\'ll prepare your fresh fruits with care.',
    'confirmation.reference': 'Order Reference',
    'confirmation.email': 'A confirmation email has been sent to your email address with the order details.',
    'confirmation.continue': 'Continue Shopping',
    'confirmation.home': 'Return to Home',
    
    // Admin
    'admin.login': 'Admin Login',
    'admin.email': 'Email',
    'admin.password': 'Password',
    'admin.submit': 'Login',
    'admin.orders': 'Orders Management',
    'admin.ordersList': 'Orders List',
    'admin.orderId': 'Order ID',
    'admin.customer': 'Customer',
    'admin.date': 'Date',
    'admin.status': 'Status',
    'admin.total': 'Total',
    'admin.actions': 'Actions',
    'admin.view': 'View Details',
    'admin.noOrders': 'No orders found',
    'admin.orderDetails': 'Order Details',
    'admin.customerInfo': 'Customer Information',
    'admin.items': 'Order Items',
    'admin.quantity': 'Quantity',
    'admin.back': 'Back to Orders',
  },
  he: {
    // Navigation
    'nav.home': 'דף הבית',
    'nav.products': 'מוצרים',
    'nav.about': 'אודות',
    'nav.contact': 'צור קשר',
    'nav.cart': 'עגלה',
    'nav.admin': 'ניהול',
    'nav.logout': 'התנתק',
    'nav.login': 'התחברות מנהל',
    
    // Product pages
    'products.title': 'הפירות הטריים שלנו',
    'products.all': 'כל המוצרים',
    'products.fresh': 'פירות טריים',
    'products.berries': 'פירות יער',
    'products.exotic': 'פירות אקזוטיים',
    'products.price': 'מחיר',
    'products.add': 'הוסף לעגלה',
    
    // Cart
    'cart.title': 'העגלה שלך',
    'cart.empty': 'העגלה שלך ריקה',
    'cart.total': 'סך הכל',
    'cart.checkout': 'המשך לתשלום',
    'cart.continueShopping': 'המשך קניות',
    'cart.remove': 'הסר',
    
    // Checkout
    'checkout.title': 'תשלום',
    'checkout.contact': 'פרטי התקשרות',
    'checkout.name': 'שם מלא',
    'checkout.email': 'כתובת דואר אלקטרוני',
    'checkout.phone': 'מספר טלפון',
    'checkout.address': 'כתובת למשלוח',
    'checkout.payment': 'אמצעי תשלום',
    'checkout.card': 'כרטיס אשראי',
    'checkout.cardNumber': 'מספר כרטיס',
    'checkout.cardExpiry': 'תאריך תפוגה (MM/YY)',
    'checkout.cardCvc': 'קוד אבטחה',
    'checkout.summary': 'סיכום הזמנה',
    'checkout.placeOrder': 'שלח הזמנה',
    'checkout.processing': 'מעבד...',
    
    // Confirmation
    'confirmation.title': 'תודה על הזמנתך!',
    'confirmation.message': 'הזמנתך התקבלה בהצלחה. נכין את הפירות הטריים שלך בקפידה.',
    'confirmation.reference': 'מספר הזמנה',
    'confirmation.email': 'אימייל אישור נשלח לכתובת הדואר האלקטרוני שלך עם פרטי ההזמנה.',
    'confirmation.continue': 'המשך קניות',
    'confirmation.home': 'חזור לדף הבית',
    
    // Admin
    'admin.login': 'התחברות מנהל',
    'admin.email': 'דואר אלקטרוני',
    'admin.password': 'סיסמה',
    'admin.submit': 'התחבר',
    'admin.orders': 'ניהול הזמנות',
    'admin.ordersList': 'רשימת הזמנות',
    'admin.orderId': 'מספר הזמנה',
    'admin.customer': 'לקוח',
    'admin.date': 'תאריך',
    'admin.status': 'סטטוס',
    'admin.total': 'סך הכל',
    'admin.actions': 'פעולות',
    'admin.view': 'הצג פרטים',
    'admin.noOrders': 'לא נמצאו הזמנות',
    'admin.orderDetails': 'פרטי הזמנה',
    'admin.customerInfo': 'פרטי לקוח',
    'admin.items': 'פריטים בהזמנה',
    'admin.quantity': 'כמות',
    'admin.back': 'חזרה להזמנות',
  },
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
