import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {RiTwitterXLine} from 'react-icons/ri'
import {AiOutlinePlus} from 'react-icons/ai'
import Image from 'next/image'

function Footer() {
  return (
    <div className='bg-[#164e5c] h-[653px]'>
      <div className="flex py-3 px-1">
        <button className="text-xs bg-white rounded-full px-5 py-1 m-1">Boardshort</button>
        <button className="text-xs bg-white rounded-full px-5 py-1 m-1">Rashguard</button>
        <button className="text-xs bg-white rounded-full px-5 py-1 m-1">Tees</button>
        <button className="text-xs bg-white rounded-full px-5 py-1 m-1">Shorts</button>
      </div>

      <div className="mt-20">
        <div className="px-7 py-8 border-b-2">
          <h1 className="text-white font-semibold text-sm">FIND A STORE</h1>
        </div>
        <div className="px-7 py-8 border-b-2 flex justify-between">
          <div>
          <h1 className="text-white font-semibold text-sm">CONNECT WITH ORET</h1>
          </div>
          <div className="flex">
          <buuton className="px-1"><FiInstagram style={{fontSize: 23, color:'white'}}/></buuton>
          <buuton className="px-1"><FaFacebookF style={{fontSize: 23, color:'white'}}/></buuton>
          <buuton className="px-1"><BsYoutube style={{fontSize: 23, color: 'white'}}/></buuton>
          <buuton className="px-1"><RiTwitterXLine style={{fontSize: 23, color: 'white'}}/></buuton>
          </div>
        </div>
        <div className="px-7 py-8 border-b-2 flex justify-between">
          <div>
          <h1 className="text-white font-semibold text-sm">SUPPORT</h1>
          </div>
          <div className="flex">
          <buuton className="px-1"><AiOutlinePlus style={{fontSize: 23, color:'white'}}/></buuton>
          </div>
        </div>
        <div className="px-7 py-8 border-b-2 flex justify-between">
          <div>
          <h1 className="text-white font-semibold text-sm">ABOUT</h1>
          </div>
          <div className="flex">
          <buuton className="px-1"><AiOutlinePlus style={{fontSize: 23, color:'white'}}/></buuton>
          </div>
        </div>
      </div>

      <div className='md:flex md:px-10 md:w-[80%] md:mx-auto md: my-10 '>
        <div className='mt-10 md:mt-0 flex justify-center items-center '>
      <Image src="/oretLogo-white.png" alt="me" width="100" height="100" />
        </div>
        <div className='flex justify-center items-center w-[70%] m-auto mt-3 md:mt-0'>
          <p className='text-[8px] md:text-[11px] text-center md:text-left text-white font-semibold'>Lorem ipsum dolor sit amet consectetur. Elit eu lectus in ultrices venenatis. Sodales ultrices viverra id enim urna non ipsum est. Arcu massa quis vitae est sollicitudin praesent pretium vel et. Scelerisque enim et vitae egestas lobortis gravida.</p>
        </div>
      </div>
      </div>
  )
}

export default Footer