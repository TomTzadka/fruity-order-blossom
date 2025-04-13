
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  unit: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, unit }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id,
      name,
      price,
      quantity: 1,
      image,
    });
    
    toast.success(`${name} added to cart`);
  };

  return (
    <Link 
      to={`/product/${id}`}
      className="product-card group animate-fade-in"
    >
      <div className="aspect-square overflow-hidden bg-cream-light relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </div>
      
      <div className="p-4">
        <h3 className="font-serif text-lg font-medium text-foreground mb-2 line-clamp-1">
          {name}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-gold font-medium">
            ${price.toFixed(2)} <span className="text-muted-foreground text-sm">/ {unit}</span>
          </span>
          
          <Button 
            onClick={handleAddToCart}
            size="sm" 
            className="bg-gold text-white hover:bg-gold-dark rounded-full w-9 h-9 p-0"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
