
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/api';
import ProductCard from '@/components/ProductCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'fresh', label: 'Fresh Fruits' },
  { value: 'berries', label: 'Berries' },
  { value: 'tropical', label: 'Tropical' },
  { value: 'exotic', label: 'Exotic' },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { data: products, isLoading } = useQuery({
    queryKey: ['products', selectedCategory],
    queryFn: () => getProducts(selectedCategory),
  });

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Our Products</h1>
          <p className="text-muted-foreground">
            Hand-selected premium fruits for your enjoyment
          </p>
        </div>

        <div className="w-full md:w-auto">
          <Select onValueChange={handleCategoryChange} defaultValue={selectedCategory}>
            <SelectTrigger className="w-full md:w-[200px] h-10 border-gold/30 focus:ring-gold">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="product-card animate-pulse">
              <div className="aspect-square bg-muted"></div>
              <div className="p-4">
                <div className="h-6 bg-muted rounded-md mb-2"></div>
                <div className="h-5 bg-muted rounded-md w-24"></div>
              </div>
            </div>
          ))}
        </div>
      ) : products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              unit={product.unit}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground">
            Try selecting a different category or check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
