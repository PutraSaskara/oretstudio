import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import React from 'react'
import Comp1 from '@/components/layouts/component_1/page'
import Comp2 from '@/components/layouts/component_2/page'
import Link from 'next/link'

const index = () => {
  return (
    <div>
      <h1>Products</h1>
      <br/>
      <Link href={'/products/men'} >Mens Product</Link>
      <br/>
      <Link href={'/products/women'}>Womens Product</Link>
      
    </div>
  )
}

export default index

