import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import React from 'react'
import Comp1 from '@/components/layouts/component_1/page'
import Comp2 from '@/components/layouts/component_2/page'

import Link from 'next/link'

import Carousel from '@/components/layouts/ImageCarosel/page'
import ImageCarosel from '@/components/layouts/ImageCarosel/page'
import { ImageCard } from '@/components/layouts/ImageCard/page'
import MenSection from '@/components/layouts/MenSection/page'
import TrendCard from '@/components/layouts/TrendCard/page'
import NewTrendSection from '@/components/layouts/NewTrendSection/page'
import HomePage from '@/components/layouts/Homepage/page'



const index = () => {

  
  return (
    <div>
      <HomePage/>
      
    </div>
  )
}

export default index

