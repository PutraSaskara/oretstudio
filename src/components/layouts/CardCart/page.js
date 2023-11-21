import Image from 'next/image'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";

function CardCart() {
  return (
    <>
        <div className='flex justify-between bg-white p-5 mt-5 relative'>
            <div className='flex'>
                <div>
                    <Image src="/singleproduct.png" alt="product" width="80" height="80" />
                </div>
                    <div className='ml-2'>
                        <h2 className='text-lg font-bold'>Brown Pants</h2>
                        <h2 className='text-sm mt-2'>Brown | XL</h2>
                        <p className='text-sm mt-1'>IDR 260.000</p>
                        <div className='flex mt-1'>
                            <span className='text-xs'><button className='underline underline-offset-4'>Edit</button></span>
                            <LuDot/>
                            <span className='text-xs'><button className='underline underline-offset-4'>Remove</button></span>
                            <LuDot/>
                            <span className='text-xs'><button className='underline underline-offset-4'>Add to Wishlist</button></span>
                        </div>
                    </div>
            </div>
                <div className='flex items-start justify-center h-10 absolute right-2'>
                    <div className='flex justify-center items-center'>
                        <button><div className='bg-[#F3F3F3] p-1'><FaMinus size={8}/></div></button>
                        <div className='p-1'><p>1</p></div>
                        <button><div className='bg-[#F3F3F3] p-1'><FaPlus size={8} /></div></button>
                    </div>
                </div>
        </div>


    </>
    )
}

export default CardCart