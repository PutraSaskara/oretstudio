import React from 'react'
import Image from 'next/image'
import {MdOutlineFavoriteBorder} from 'react-icons/md'  

function ColourSection() {
  return (
    <div className='mt-7'>
        {/* Colour section */}
        <h1 className='text-lg sm:text-3xl'>Colour</h1>
        <div className='w-full flex flex-wrap mt-5 justify-start'>
        <button>
        <Image src="/singleproduct.png" alt="me" width="80" height="80" className='m-1 sm:w-[150px] lg:w-[120px] 2xl:w-[150px]'/>
        </button>
        <button>
        <Image src="/singleproduct.png" alt="me" width="80" height="80" className='m-1 sm:w-[150px] lg:w-[120px] 2xl:w-[150px]'/>
        </button>
        <button>
        <Image src="/singleproduct.png" alt="me" width="80" height="80" className='m-1 sm:w-[150px] lg:w-[120px] 2xl:w-[150px]'/>
        </button> 
        <button>
        <Image src="/singleproduct.png" alt="me" width="80" height="80" className='m-1 sm:w-[150px] lg:w-[120px] 2xl:w-[150px]'/>
        </button>
        <button>
        <Image src="/singleproduct.png" alt="me" width="80" height="80" className='m-1 sm:w-[150px] lg:w-[120px] 2xl:w-[150px]'/>
        </button>
        <button>
        <Image src="/singleproduct.png" alt="me" width="80" height="80" className='m-1 sm:w-[150px] lg:w-[120px] 2xl:w-[150px]'/>
        </button>
        </div>

        <div className='w-full flex justify-center gap-7 2xl:gap-16 mt-5'>
        <button className=' w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-black'>S</button>
        <button className=' w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-black'>M</button>
        <button className=' w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-black'>L</button>
        <button className=' w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-black'>XL</button>
        <button className=' w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-black'>XXL</button>
        </div>

        <div className='w-full flex justify-center lg:justify-start mt-5'>
            <button className='text-white w-[80%] p-3 bg-black rounded-lg relative text-center block'>Add to Chart</button>
            <button className='p-[7px] border-2 right-5 flex justify-center border-black'><MdOutlineFavoriteBorder size={30}/></button>
        </div>

        {/* end */}
      </div>
  )
}

export default ColourSection