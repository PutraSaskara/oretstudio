import Link from 'next/link';
import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp  } from "react-icons/fa6";

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('MEN');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        closeDropdown();
      };

    return (
        <div>
            <div className="relative inline-block">
                <button
                    type="button"
                    className=" p-1 font-semibold inline-flex items-center justify-center gap-1 w-28"
                    onClick={toggleDropdown}
                >
                    {selectedItem} <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
                </button>

                {isOpen && (
                    <div className="origin-top-right absolute left-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li>
                                <Link
                                    href="/products/men"
                                    className="block px-4 py-2 text-sm font-semibold hover:bg-gray-100"
                                    onClick={() => handleItemClick('MEN')}
                                >
                                    MEN
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-sm font-semibold hover:bg-gray-100"
                                    onClick={() => handleItemClick('WOMEN')}
                                >
                                    WOMEN
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-sm font-semibold hover:bg-gray-100"
                                    onClick={() => handleItemClick('KIDS')}
                                >
                                    KIDS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-sm font-semibold hover:bg-gray-100"
                                    onClick={() => handleItemClick('ACCECORIES')}
                                >
                                    ACCECORIES
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-sm font-semibold hover:bg-gray-100"
                                    onClick={() => handleItemClick('CLOTHING')}
                                >
                                    CLOTHING
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DropDown;