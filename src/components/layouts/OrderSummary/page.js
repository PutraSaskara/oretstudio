import React from 'react'

function OrderSummary() {
  return (
    <>
        <div className='bg-white p-5 mt-8 lg:mt-[72px]'>
            <h1 className='font-bold text-xl'>Order Summary ( 5 tems )</h1>
            <div className='border-t-2 border-b-2 py-5 mt-5'>
                <div className='flex justify-between py-5'>
                    <h3>Subtotal</h3>
                    <h3>idr. 200.000</h3>
                </div>
                <div className='flex justify-between py-5'>
                    <h3>Shipping</h3>
                    <h3>idr. 200.000</h3>
                </div>
            </div>
            <div className='flex justify-between mt-2'>
                <h3>Total</h3>
                <h3>idr. 200.000</h3>
            </div>
            <button className='bg-black w-full text-white p-3 rounded-lg mt-10'>Check Out Now</button>
            <button className='border border-[#164E5C] w-full p-3 rounded-lg mt-5'>Check Out Later</button>
        </div>
            <p className='text-xs mt-5'>*Get free shipping to the Indonesia region</p>
            <p className='text-xs mt-5'>*Get free worldwide shipping with a minimum purchase of 2 million (IDR/Rupiah).</p>
    </>
    )
}

export default OrderSummary