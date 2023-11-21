import React from 'react'
import Image from 'next/image'

function SidePicture() {
    return (
    <div className='flex flex-col gap-[34px] lg:mt-7 mx-2'>
        <button>
        <Image src="/singleproduct.png" alt="me" width="300" height="300" className='m-1'/>
        </button>
        <button>
        <Image src="/singleproduct.png" alt="me" width="300" height="300" className='m-1'/>
        </button>
        <button>
        <Image src="/singleproduct.png" alt="me" width="300" height="300" className='m-1'/>
        </button>
        <button>
        <Image src="/singleproduct.png" alt="me" width="300" height="300" className='m-1'/>
        </button>
    </div>
    )
}

export default SidePicture