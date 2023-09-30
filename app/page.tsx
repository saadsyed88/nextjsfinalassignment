'use client';

import { useEffect, useState } from 'react';
import CarouselComp from './components/CarouselComp';
import Product from './components/Product';
import MainLayout from './layouts/MainLayout';
import { ProductProps } from './product/[id]/page';

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const getProducts = async () => {
    const response = await fetch('/api/products');
    const prods = await response.json();

    setProducts([]);
    setProducts(prods);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <MainLayout>
      <CarouselComp />

      <div className='max-w-[95%] mx-auto'>
        <div className='text-2xl font-bold mt-4 mb-6 px-4'>Products</div>
        <div className='grid grid-cols-5 gap-4'>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
