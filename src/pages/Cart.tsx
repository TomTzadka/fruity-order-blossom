
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-6" />
          <h1 className="font-serif text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            It looks like you haven't added any products to your cart yet.
          </p>
          <Button asChild className="bg-gold hover:bg-gold-dark text-white rounded-full">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="font-serif text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-4 bg-white rounded-lg shadow-sm">
                <div className="relative w-24 h-24 rounded overflow-hidden bg-cream-light shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-medium mb-1">
                    <Link to={`/product/${item.id}`} className="hover:text-gold">
                      {item.name}
                    </Link>
                  </h3>
                  <p className="text-gold font-medium">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 text-muted-foreground hover:text-foreground focus:outline-none"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-center w-10">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 text-muted-foreground hover:text-foreground focus:outline-none"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-destructive focus:outline-none"
                  >
                    <Trash2 className="h-5 w-5" />
                    <span className="sr-only">Remove item</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 border border-muted sticky top-6">
            <h2 className="font-serif text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>Free</span>
              </div>
            </div>
            
            <div className="border-t border-muted my-4"></div>
            
            <div className="flex justify-between font-medium text-lg mb-6">
              <span>Total</span>
              <span className="text-gold">${totalPrice.toFixed(2)}</span>
            </div>
            
            <Button
              asChild
              className="w-full bg-gold hover:bg-gold-dark text-white rounded-full py-6"
            >
              <Link to="/checkout">
                Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
