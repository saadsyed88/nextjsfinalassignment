'use client';

import MainLayout from '@/app/layouts/MainLayout';
import React, { useEffect, useState } from 'react';

export interface ProductProps {
  id?: number;
  url: string;
  title: string;
  price: number;
  description: string;
}
const Product = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<null | ProductProps>(null);

  const getProduct = async () => {
    setProduct(null);

    const response = await fetch(`/api/product/${params.id}`);
    const prod = await response.json();
    setProduct(prod);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <MainLayout>
        <div className='max-w-[1200px] mx-auto'>
          <div className='flex px-4 py-10'>
            {product?.url ? (
              <img className='w-[40%] rounded-lg' src={product?.url + '/280'} />
            ) : (
              <div className='w-[40%]'></div>
            )}

            <div className='px-4 w-full'>
              <div className='font-bold text-xl'>{product?.title}</div>
              <div className='text-sm text-gray-700 pt-2'>
                Brand New - Full Warranty
              </div>

              <div className='border-b py-1' />

              <div className='pt-3 pb-2'>
                <div className='flex items-center'>
                  Condition:{' '}
                  <span className='font-bold text-[17px] ml-2'>New</span>
                </div>
              </div>

              <div className='border-b py-1' />

              <div className='pt-3'>
                <div className='w-full flex items-center justify-between'>
                  <div className='flex items-center'>
                    Price:
                    {product?.price ? (
                      <div className='font-bold text-[20px] ml-2'>
                        GBP £{(product?.price / 100).toFixed(2)}
                      </div>
                    ) : null}
                  </div>
                  <button
                    className='
              text-white py-2 px-20 rounded-full cursor-pointer 
             '
                  >
                    Add To Cart
                  </button>
                </div>
              </div>

              <div className='border-b py-1' />

              <div className='pt-3'>
                <div className='font-semibold pb-1'>Description:</div>
                <div className='text-sm'>{product?.description}</div>
              </div>
            </div>
          </div>
        </div>

        {/* <SimilarProducts /> */}
      </MainLayout>
    </>
  );
};

export default Product;
