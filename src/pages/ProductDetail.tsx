
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { mockGetProduct } from '@/services/api';
import { useCart } from '@/context/CartContext';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => mockGetProduct(id!),
    enabled: !!id,
  });

  const handleAddToCart = () => {
    if (!product) return;

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    });

    toast.success(`${product.name} added to cart`);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square bg-muted rounded-lg"></div>
          <div className="space-y-4">
            <div className="h-8 bg-muted rounded-md w-3/4"></div>
            <div className="h-6 bg-muted rounded-md w-1/4"></div>
            <div className="h-4 bg-muted rounded-md w-full mt-8"></div>
            <div className="h-4 bg-muted rounded-md w-full"></div>
            <div className="h-4 bg-muted rounded-md w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">Product Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Button asChild className="bg-gold hover:bg-gold-dark text-white">
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-gold mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square bg-cream-light rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
          <div className="text-2xl font-medium text-gold mb-6">
            ${product.price.toFixed(2)} <span className="text-muted-foreground text-lg">/ {product.unit}</span>
          </div>

          <div className="prose prose-lg mb-8">
            <p>{product.description}</p>
          </div>

          <div className="mb-8">
            <div className="text-sm font-medium mb-2">Quantity</div>
            <div className="flex items-center">
              <Button 
                onClick={decreaseQuantity}
                variant="outline" 
                size="icon" 
                className="h-10 w-10 rounded-full border-gold/30"
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              
              <span className="w-16 text-center font-medium">{quantity}</span>
              
              <Button 
                onClick={increaseQuantity}
                variant="outline" 
                size="icon" 
                className="h-10 w-10 rounded-full border-gold/30"
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            className="bg-gold hover:bg-gold-dark text-white w-full py-6 text-lg rounded-full mb-4"
          >
            <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
          </Button>
          
          <div className="text-sm text-muted-foreground">
            <p className="mb-1"><span className="font-medium">Category:</span> {product.category}</p>
            <p><span className="font-medium">Availability:</span> {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
