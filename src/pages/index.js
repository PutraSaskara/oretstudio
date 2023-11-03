import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import React from 'react'


import ImageCarosel from '@/components/layouts/ImageCarosel/page'



const index = () => {
  return (
    <div>
      <ImageCarosel/>
    </div>
  )
}

export default index

