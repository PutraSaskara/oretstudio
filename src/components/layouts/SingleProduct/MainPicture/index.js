import React from 'react'
import Image from 'next/image'  

function MainPicture() {
    return (
        <div>
          {/* main picture */}
            <Image src="/singleproduct.png" alt="me" width="350" height="350" className='mx-auto sm:w-[700px] lg:w-[1500px] xl:w-[1400px] lg:mt-8'/>
            {/* end */}
        </div>
    )
  }
  
  export default MainPicture
