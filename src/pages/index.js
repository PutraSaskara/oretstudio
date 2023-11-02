import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import React from 'react'
import Comp1 from '@/components/layouts/component_1/page'
import Comp2 from '@/components/layouts/component_2/page'
import Carousel from '@/components/layouts/ImageCarosel/page'


const index = () => {

  const images = [
    'https://images.unsplash.com/photo-1682687981630-cefe9cd73072?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682687981630-cefe9cd73072?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682687981630-cefe9cd73072?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682687981630-cefe9cd73072?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Add more image URLs as needed
  ];
  return (
    <div>
      <Comp1/>
      <Comp2/>
      <Carousel images={images} />
      
    </div>
  )
}

export default index

