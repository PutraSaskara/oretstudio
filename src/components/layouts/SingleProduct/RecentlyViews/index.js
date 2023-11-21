import React from 'react'
import Image from 'next/image'

function RecentlyViews() {
  return (
    <div className='mt-7'>
        {/* Recently Views */}
        <h1 className='text-xl mt-7 sm:text-3xl'>Recently Views</h1>
        <div className='w-full flex md:gap-10 2xl:gap-20 overflow-auto mt-14 mb-14'>
        <Image src="/singleproduct.png" alt="me" width="350" height="350" className='2xl:w-[400px]'/>
        <Image src="/singleproduct.png" alt="me" width="350" height="350" className='2xl:w-[400px]'/>
        <Image src="/singleproduct.png" alt="me" width="350" height="350" className='2xl:w-[400px]'/>
        <Image src="/singleproduct.png" alt="me" width="350" height="350" className='2xl:w-[400px]'/>
        </div>
    {/* end */}
    </div>
  )
}

export default RecentlyViews