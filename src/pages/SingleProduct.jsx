import React from 'react'
import MainSection from '@/components/layouts/SingleProduct/MainSection'
import RecomendedSection from '@/components/layouts/SingleProduct/RecomendedSection'
import RecentlyViews from '@/components/layouts/SingleProduct/RecentlyViews'



const SingleProduct = () => {
  return (
    <div className='p-5'>
      <h1 className='text-center lg:text-left lg:ml-14 mb-10 sm:text-3xl'>Home / Men / Collections / Tshirt</h1>
      <MainSection/>
      <RecomendedSection/>
      <RecentlyViews/>
    </div>
  )
}

export default SingleProduct