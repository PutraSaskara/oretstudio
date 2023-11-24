import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa6";




const categoryMen = [
    "Overtee", "Shirt", "Short", "Swim Trunk", "Tank Top Men", "Tees"
]
function Filter() {


  return (
    <div>
        <div className='flex'>
            <button className='flex items-center justify-between ml-2 w-[70%]'>
                <span className='font-bold'>Category</span>
                <FaMinus/>
            </button>
        </div>
        <ul className='ml-5 mt-5'>
            {categoryMen.map((item) => (
            <li className='m-3'>
                <button>{item}</button>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Filter