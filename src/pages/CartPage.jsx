import CardCart from '@/components/layouts/CardCart/page'
import OrderSummary from '@/components/layouts/OrderSummary/page'
import RecomendedSection from '@/components/layouts/SingleProduct/RecomendedSection'
import React from 'react'


const CartPage = () => {
  return (
    <>
    <div className='bg-[#E8E8E8] p-4'>
        
        <div className='lg:flex lg:mb-20 justify-between gap-20'>
          {/* Left */}
          <div className='w-full'>
          <h1 className='font-semibold text-xl mt-6'>Cart <span>(9)</span></h1>
            <CardCart/>
            <CardCart/>
            <CardCart/>
            <CardCart/>
            <CardCart/>
            <CardCart/>
            <CardCart/>
            <CardCart/>
            <CardCart/>
          </div>

          {/* Right */}
          <div className='w-full'>
            <OrderSummary/>
          </div>
        </div>
    </div>
          <div className='bg-white p-4 lg:hidden'>
            <RecomendedSection/>
          </div>
    </>
  )
}

export default CartPage
