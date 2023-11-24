'use client'

import { Button } from '@/components/ui/button';
import React from 'react'

const ProductsPage = () => {
  return (
    <div>
        <h1 className='text-center text-4xl text-sky-500 mt-5'>Products Page</h1>
        <div className='flex justify-center items-center pt-5'>
            <Button variant='destructive' className='bg-sky-500 text-white hover:bg-sky-300 hover:transition hover:duration-100'>
                click me!
            </Button>
        </div>
    </div>
  )
}

export default ProductsPage;
