import Image from 'next/image'
import {MdOutlineFavoriteBorder} from 'react-icons/md'


import React from 'react'
import MainPicture from '../MainPicture'
import ColourSection from '../ColourSection'
import Description from '../Description'
import SidePicture from '../SidePicture'
import TitleProduct from '../TitleProduct'

function MainSection() {
  return (
    <>
    <div className='lg:hidden'>
        <MainPicture/>
        <TitleProduct/>
        <ColourSection/>
        <Description/>
    </div>
    <div className='lg:flex gap-5 p-10 mx-auto hidden'>
      <div className='flex'>
        <SidePicture/>
        <MainPicture/>
      </div>
      <div className='p-3'>
        <TitleProduct/>
        <ColourSection/>
        <Description/>
      </div>
      </div>
    </>
  )
}

export default MainSection

