import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import React from 'react'
import ImageCarousel from '@/components/layouts/ImageCarosel/page'

const index = () => {
  return (
    <div>
      <ImageCarousel/>
    </div>
  )
}

export default index

