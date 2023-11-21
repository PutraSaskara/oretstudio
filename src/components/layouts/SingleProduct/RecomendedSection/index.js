import React from 'react'
import Image from 'next/image'
import examplePicture1 from '../../../../../public/examplePicture1.png'
import examplePicture2 from '../../../../../public/examplePicture2.png'
import examplePicture3 from '../../../../../public/examplePicture3.png'
import examplePicture4 from '../../../../../public/examplePicture4.png'
import examplePicture5 from '../../../../../public/examplePicture5.png'


const examplePicture = [
  examplePicture1, examplePicture2, examplePicture3, examplePicture4, examplePicture5
]

function RecomendedSection() {
  return (

    <div>
          {/* Recomended for you section */}
        <h1 className='text-xl sm:text-3xl mt-7'>Recommended for you</h1>
        <div className='flex gap-5 mt-10 w-full overflow-auto'>

          {examplePicture.map((picture) => (
          <div className='mx-auto' >
            <Image src={picture} alt="me" width="280" height="280" className=' mt-5'/>
            <div className='mx-auto mt-5 w-[280px] sm:w-[200px]'>
            <div className='w-full h-[30px] overflow-hidden hover:overflow-x-auto'>
              <h1 className='font-semibold text-lg sm:text-sm'>D Bah Airlite Performance 19" Boar</h1>
            </div>
            <div>
              <h1 className='text-slate-400 py-1'>$65.95</h1>
              <hr className='bg-slate-400'/>
              <h1 className='text-slate-400 py-1'>9 Colors</h1>
            </div>
          </div>
          </div>
          ))}

        </div>
        
      {/* end */}
    </div>
    )
}

export default RecomendedSection