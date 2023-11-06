import {FiInstagram} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {RiTwitterXLine} from 'react-icons/ri'
import {AiOutlinePlus} from 'react-icons/ai'
import Image from 'next/image'



const category = [
  'Boardshort', 'Rashguard', 'Tees', 'Shorts','Boardshort', 'Rashguard', 'Tees', 'Shorts','Boardshort', 'Rashguard', 'Tees', 'Shorts','Boardshort', 'Rashguard', 'Tees', 'Shorts',
]

const shop = [
  'MEN', 'WOMEN', 'KIDS'
]

const support = [
  'FAQ', 'MY ACCOUNT', 'TRACK ORDER', 'SHIPPING', 'RETURNS', 'WARRANTY', 'CONTACT US'
]

function Footer() {

  return (
    <div className='bg-[#164e5c] pb-10'>

      <div className='lg:hidden'>
        <div className="flex py-3 w-[95%] overflow-hidden m-auto hover:overflow-scroll">
            {category.map((item) => (
              <button className="text-xs bg-white rounded-full px-5 py-1 m-1">
                {item}
              </button>
            ))}
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
            <button className="px-1"><FiInstagram style={{fontSize: 23, color:'white'}}/></button>
            <button className="px-1"><FaFacebookF style={{fontSize: 23, color:'white'}}/></button>
            <button className="px-1"><BsYoutube style={{fontSize: 23, color: 'white'}}/></button>
            <button className="px-1"><RiTwitterXLine style={{fontSize: 23, color: 'white'}}/></button>
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

      {/* WEB VIEW SECTION */}

      {/* menu category section */}
      <div className='hidden lg:flex md:hidden sm:hidden w-full'>
        <div className='w-full'>
          <div className="flex w-[80%]  mx-auto justify-start overflow-hidden hover:overflow-x-scroll  py-3 px-10">
            {
              category.map((item ) => (
                <button className="text-xs bg-white rounded-full px-5 py-1 m-1">
                  {item}
                </button>
              ))
            }
          </div>
        {/* end menu category section */}
          
          {/* main footer section */}
          <div className='flex flex-auto justify-between gap-3 mt-10 py-3 w-[90%] m-auto'>

            {/* left section */}
            <div className='flex w-[550px] pr-8 '>
              <div className='mt-10 md:mt-0 flex justify-center items-start pt-2'>
                <Image src="/oretLogo-white.png" alt="me" width="150" height="100" />
              </div>
              <div className='flex justify-center items-start mt-3 ml-5'>
                <p className='text-[8px] text-left text-white font-semibold'>Lorem ipsum dolor sit amet consectetur. Elit eu lectus in ultrices venenatis. Sodales ultrices viverra id enim urna non ipsum est. Arcu massa quis vitae est sollicitudin praesent pretium vel et. Scelerisque enim et vitae egestas lobortis gravida.</p>
              </div>
            </div>

            {/* Find store section */}
            <div className='w-32'>
              <button className="text-white font-bold text-xs block hover:text-slate-400  ">FIND A STORE</button>
            </div>

            {/* Shop section */}
            <div className='w-32'>
              <h1 className="text-white font-bold text-xs block">SHOP</h1>
              {
                shop.map((item) => (
                  <button className="text-white text-xs block mt-2 hover:text-slate-400">
                    {item}
                  </button>
                ))
              }
            </div>

              {/* support section */}
              <div className='w-32'>
                <h1 className="text-white font-bold text-xs block">SUPPORT</h1>
                {
                  support.map((item) => (
                    <button className="text-white text-xs block mt-2 hover:text-slate-400">
                      {item}
                    </button>
                  ))
                }
              </div>

              {/* Contact section */}
              <div>
                <h1 className="text-white font-bold text-xs block mb-5">CONTACT WITH ORET</h1>
                <h1 className='text-white text-xs block mb-5'>GET ALL THE LATEST PRODUCT, TEAMS AND EVENT NEWS FROM ORET</h1>

                <form class="w-full max-w-sm">    
                  <div class="flex items-center border-b border-white py-2">
                    <input class="appearance-none bg-transparent border-none w-full text-white text-sm mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="ENTER YOUR EMAIL"/>
                  </div>
                </form>

                <div className="flex mt-5">
                  <button className="px-1"><FiInstagram style={{fontSize: 23, color:'white'}}/></button>
                  <button className="px-1"><FaFacebookF style={{fontSize: 23, color:'white'}}/></button>
                  <button className="px-1"><BsYoutube style={{fontSize: 23, color: 'white'}}/></button>
                  <button className="px-1"><RiTwitterXLine style={{fontSize: 23, color: 'white'}}/></button>
                </div>
              </div>
              
          </div>

          {/* end of main footer */}

        </div>
      </div>

      {/* end of web view section */}
      
      </div>
  )
}

export default Footer