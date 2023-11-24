import CardProduct from '@/components/layouts/CardProduct/page';
import Filter from '@/components/layouts/Filter/page';
import Image from 'next/image'
import React, { useState } from 'react'
import { LuSettings2 } from "react-icons/lu";

function men() {

  const [filter, setFilter] = useState(false)


  return (
    <div>
      {/* Hero */}
      <div className='lg:flex'> 
        <Image src={'/hero-product1.png'} width="350" height="350" className='hidden md:block w-[100%]'/>
        <Image src={'/hero-product2.png'} width="400" height="0" className='w-[100%]'/>
      </div>
      {/* end of Hero */}

      <div className='flex gap-8 px-10 mt-12'>
        <h4 className='inline-block'>Home</h4>
        <h4 className='inline-block'>Men</h4>
      </div>
      <div className='flex gap-5 items-center p-5 h-32 w-[94%] mx-auto border-b-2'>
        <h1 className='inline-block text-5xl'>Clothing</h1>
        <h3 className='inline-block text-slate-400'>(855 results)</h3>
      </div>

      <button 
        className='flex items-center gap-1 my-2 mx-1'
        onClick={() => setFilter(!filter)}
        >
        <LuSettings2/>
        {filter ? (
            <span>Hide Filters</span>
            ) : (
            <span>Filters</span>
            )}
        </button>
      

      {/* filter and product container */}
      <div className='lg:flex'>

      <div className={`lg:w-[250px] ${filter ? "block" : "hidden"}`}>
      <Filter/>
      </div>
      
      <div className='mx-auto'>
        <CardProduct/>
      </div>


      </div>
      {/* end  */}
    </div>
  )
}

export default men