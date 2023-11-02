import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import React from 'react'
import Comp1 from '@/components/layouts/component_1/page'
import Comp2 from '@/components/layouts/component_2/page'

const index = () => {
  return (
    <div>
      <Comp1/>
      <Comp2/>
    </div>
  )
}

export default index

