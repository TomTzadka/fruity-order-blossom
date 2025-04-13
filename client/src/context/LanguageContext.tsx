
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
    'products.description': 'Description',
    'products.origin': 'Origin',
    'products.nutrition': 'Nutrition Facts',
    'products.similar': 'Similar Products',
    
    // Cart
    'cart.title': 'Your Cart',
    'cart.empty': 'Your cart is empty',
    'cart.total': 'Total',
    'cart.checkout': 'Proceed to Checkout',
    'cart.continueShopping': 'Continue Shopping',
    'cart.remove': 'Remove',
    'cart.summary': 'Order Summary',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.free': 'Free',
    'cart.items': 'items',
    
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
    
    // About
    'about.title': 'About La Fruta',
    'about.subtitle': 'Premium fruit purveyors, delivering nature\'s best directly to your door.',
    'about.storyTitle': 'Our Story',
    'about.storySubtitle': 'From Orchard to Table',
    'about.story1': 'La Fruta was founded with a simple mission: to connect people with the finest fruits nature has to offer. Our journey began in 2015 when our founder, passionate about quality produce, noticed how difficult it was to find consistently excellent fruit in urban areas.',
    'about.story2': 'Today, we work directly with sustainable farms and orchards around the world to source premium fruits that meet our exacting standards for taste, freshness, and ethical production.',
    'about.story3': 'Each piece of fruit in our selection is hand-picked at peak ripeness and carefully inspected before making its way to your home.',
    'about.valuesTitle': 'Our Values',
    'about.valuesSubtitle': 'What Drives Us',
    'about.valuesDescription': 'Our commitment to quality extends beyond taste to encompass ethics, sustainability, and community.',
    'about.value1Title': 'Freshness First',
    'about.value1Description': 'We prioritize freshness above all else, ensuring that every fruit reaches you at the peak of its flavor and nutritional value.',
    'about.value2Title': 'Sustainable Practices',
    'about.value2Description': 'We partner with farms that use sustainable growing methods, minimizing environmental impact while maximizing flavor.',
    'about.value3Title': 'Supporting Communities',
    'about.value3Description': 'We believe in fair compensation for farmers and supporting the communities where our fruits are grown.',
    'about.ctaTitle': 'Experience La Fruta Today',
    'about.ctaDescription': 'Taste the difference that quality makes. Browse our selection of premium fruits and have them delivered straight to your door.',
    'about.ctaButton': 'Shop Our Collection',
    
    // Footer
    'footer.tagline': 'Premium fruit selection delivered directly to your door.',
    'footer.shop': 'Shop',
    'footer.allProducts': 'All Products',
    'footer.freshFruits': 'Fresh Fruits',
    'footer.berries': 'Berries',
    'footer.tropical': 'Tropical',
    'footer.exotic': 'Exotic',
    'footer.company': 'Company',
    'footer.aboutUs': 'About Us',
    'footer.contact': 'Contact',
    'footer.blog': 'Blog',
    'footer.careers': 'Careers',
    'footer.support': 'Support',
    'footer.faq': 'FAQ',
    'footer.shipping': 'Shipping & Returns',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.copyright': 'All rights reserved.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We\'d love to hear from you',
    'contact.formName': 'Your Name',
    'contact.formEmail': 'Your Email',
    'contact.formMessage': 'Your Message',
    'contact.formSubmit': 'Send Message',
    'contact.addressTitle': 'Visit Us',
    'contact.phoneTitle': 'Call Us',
    'contact.emailTitle': 'Email Us',
    'contact.hoursTitle': 'Opening Hours',
    'contact.hours': 'Monday to Friday: 9am - 5pm',
    'contact.weekend': 'Weekend: 10am - 3pm',
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
    'products.description': 'תיאור',
    'products.origin': 'מקור',
    'products.nutrition': 'ערכים תזונתיים',
    'products.similar': 'מוצרים דומים',
    
    // Cart
    'cart.title': 'העגלה שלך',
    'cart.empty': 'העגלה שלך ריקה',
    'cart.total': 'סך הכל',
    'cart.checkout': 'המשך לתשלום',
    'cart.continueShopping': 'המשך קניות',
    'cart.remove': 'הסר',
    'cart.summary': 'סיכום הזמנה',
    'cart.subtotal': 'סיכום ביניים',
    'cart.shipping': 'משלוח',
    'cart.free': 'חינם',
    'cart.items': 'פריטים',
    
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
    
    // About
    'about.title': 'אודות לה פרוטה',
    'about.subtitle': 'ספקי פירות איכותיים, מביאים את הטוב ביותר מהטבע ישירות לדלת שלך.',
    'about.storyTitle': 'הסיפור שלנו',
    'about.storySubtitle': 'מהמטע לשולחן',
    'about.story1': 'לה פרוטה נוסדה עם משימה פשוטה: לחבר אנשים עם הפירות האיכותיים ביותר שהטבע מציע. המסע שלנו התחיל ב-2015 כאשר המייסד שלנו, שהיה להוט לגבי תוצרת איכותית, שם לב כמה קשה למצוא פירות מצוינים באופן עקבי באזורים עירוניים.',
    'about.story2': 'כיום, אנחנו עובדים ישירות עם חוות ומטעים ברחבי העולם כדי לספק פירות איכותיים העומדים בסטנדרטים הקפדניים שלנו לטעם, טריות וייצור אתי.',
    'about.story3': 'כל פרי בבחירה שלנו נקטף ידנית בשיא הבשלות ונבדק בקפידה לפני שהוא מגיע לביתך.',
    'about.valuesTitle': 'הערכים שלנו',
    'about.valuesSubtitle': 'מה מניע אותנו',
    'about.valuesDescription': 'המחויבות שלנו לאיכות חורגת מטעם וכוללת אתיקה, קיימות וקהילה.',
    'about.value1Title': 'טריות קודם כל',
    'about.value1Description': 'אנו מתעדפים טריות מעל הכל, ומבטיחים שכל פרי יגיע אליך בשיא הטעם והערך התזונתי שלו.',
    'about.value2Title': 'שיטות בנות קיימא',
    'about.value2Description': 'אנו משתפים פעולה עם חוות המשתמשות בשיטות גידול בנות קיימא, מצמצמות את ההשפעה הסביבתית תוך מקסום הטעם.',
    'about.value3Title': 'תמיכה בקהילות',
    'about.value3Description': 'אנו מאמינים בתגמול הוגן לחקלאים ותמיכה בקהילות בהן גדלים הפירות שלנו.',
    'about.ctaTitle': 'התנסה בלה פרוטה היום',
    'about.ctaDescription': 'טעם את ההבדל שאיכות עושה. עיין במבחר הפירות האיכותיים שלנו והזמן אותם ישירות לדלת שלך.',
    'about.ctaButton': 'קנה מהאוסף שלנו',
    
    // Footer
    'footer.tagline': 'מבחר פירות איכותיים מסופקים ישירות לדלת שלך.',
    'footer.shop': 'חנות',
    'footer.allProducts': 'כל המוצרים',
    'footer.freshFruits': 'פירות טריים',
    'footer.berries': 'פירות יער',
    'footer.tropical': 'טרופיים',
    'footer.exotic': 'אקזוטיים',
    'footer.company': 'חברה',
    'footer.aboutUs': 'אודותינו',
    'footer.contact': 'צור קשר',
    'footer.blog': 'בלוג',
    'footer.careers': 'קריירה',
    'footer.support': 'תמיכה',
    'footer.faq': 'שאלות נפוצות',
    'footer.shipping': 'משלוח והחזרות',
    'footer.privacy': 'מדיניות פרטיות',
    'footer.terms': 'תנאים והגבלות',
    'footer.copyright': 'כל הזכויות שמורות.',
    
    // Contact
    'contact.title': 'צור קשר',
    'contact.subtitle': 'נשמח לשמוע ממך',
    'contact.formName': 'השם שלך',
    'contact.formEmail': 'האימייל שלך',
    'contact.formMessage': 'ההודעה שלך',
    'contact.formSubmit': 'שלח הודעה',
    'contact.addressTitle': 'בקר אותנו',
    'contact.phoneTitle': 'התקשר אלינו',
    'contact.emailTitle': 'שלח לנו אימייל',
    'contact.hoursTitle': 'שעות פתיחה',
    'contact.hours': 'שני עד שישי: 9:00 - 17:00',
    'contact.weekend': 'סוף שבוע: 10:00 - 15:00',
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
