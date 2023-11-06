import React from 'react'
import TrendCard from '../TrendCard/page'

const NewTrendSection = () => {
    const cardData = {
        title_1: "FOTO TREND 1",
        title_2: "FOTO TREND 2",
        title_3: "FOTO TREND 3",
        desc_1: "Oret studio New trending",
        desc_2: "Oret studio New trending",
        desc_3: "Oret studio New trending",
        imageUrl_1: "https://ik.imagekit.io/m1akscp5q/unsplash_P5MXtYfgmmw.png?updatedAt=1699168195838",
        imageUrl_2: "https://ik.imagekit.io/m1akscp5q/233-ADIV-FLEECE-3-UP.jpg.png?updatedAt=1699168199068",
        imageUrl_3: "https://ik.imagekit.io/m1akscp5q/233-ADIV-WETSUITS-3-UP.jpg.png?updatedAt=1699168199257",
        imageName_1: "Image 1",
        imageName_2: "Image 2",
        imageName_3: "Image 3",
      };
  return (
    <div>
      <h1 className='font-maven-pro text-center text-[91px] my-8'>NEW TRENDS IS COMING</h1>
      <TrendCard {...cardData}/>
    </div>
  )
}

export default NewTrendSection
