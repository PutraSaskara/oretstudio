import Link from 'next/link'
import {FiMenu} from 'react-icons/fi'
import {BiSearch} from 'react-icons/bi'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {BsPerson} from 'react-icons/bs'
import {GrClose} from 'react-icons/gr'
import {AiOutlineHome} from 'react-icons/ai'
import Image from 'next/image'
import { useState } from 'react';
import SearchBar from '../SearchBar'


function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [search, setSearch] = useState(false)
  return (
    <div>
        {/* phone & tab view */}
        <div className="py-10 px-4 lg:hidden">
        <div className="m-auto flex justify-between">
            <button className='active:bg-blue-200' onClick={() => setNavbar(!navbar)} >
                {navbar ? (
                    <GrClose style={{fontSize: 50}}/>
                    
                ) : (
                    <FiMenu style={{fontSize: 50}}/>
                )}
            </button>
            <button onClick={() => setSearch(!search)}>
                {search ? (
                    <BiSearch style={{fontSize: 50}}/>
                ) : (
                    <BiSearch style={{fontSize: 50}}/>
                )}
            </button>
            <button><Image src="/oretLogo.png" alt="me" width="100" height="100" /></button>
            <button><HiOutlineShoppingBag style={{fontSize: 50}}/></button>
            <button><BsPerson style={{fontSize: 50}}/></button>
        </div>

    </div>
        <div
        className={`flex-1 block justify-self-center pb-3 md:pb-0 md:mt-0 absolute bg-white w-[100%] h-[100%] ${
            navbar ? ' md:p-0 block' : 'hidden'
        }`}
        >
            <div className='w-full'>
                <ul>
                    <li className='text-[30px] p-5 font-semibold active:bg-blue-200'><button >Men</button></li>
                    <li className='text-[30px] text-2xl p-5 font-semibold active:bg-blue-200'><button >Women</button></li>
                </ul>          
            </div>
        </div>
            <div className={`flex bg-white justify-center w-full absolute ${search ? 'block' : 'hidden'}`}>
                <SearchBar/>
            </div>

            {/* web view */}

            <div className='py-10 px-4 lg:flex hidden'>
                <div className='m-auto flex justify-between'>
                    <button><Image src="/oretLogo.png" alt="me" width="100" height="100" /></button>
                        <button className='m-5 font-semibold'>HOME</button>
                        <button className='m-5 font-semibold'>MEN</button>
                        <button className='m-5 font-semibold'>WOMEN</button>
                        <button className='m-5 font-semibold'>KIDS</button>
                        <button className='m-5 font-semibold'>CLOTHING</button>
                        <button className='mx-5 font-semibold'>ACCESORIES</button>

                    <button><HiOutlineShoppingBag style={{fontSize: 30}}/></button>
                    <button className='m-5 font-semibold rounded-xl bg-black text-white px-3 py-2'>SIGN IN OR JOIN NOW</button>

                </div>
            </div>
    </div>
    )
}

export default NavBar