import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "../SearchBar";

const menu = [
  "HOME",
  "MEN",
  "WOMEN",
  "KIDS",
  "CLOTHING",
  "ACCECORIES",
  "STORES",
  "ACCOUNT",
  "CONTACT",
  "ABOUT",
];

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <div>
      <div className="py-10 px-4 lg:hidden">
        <div className="m-auto flex justify-between">
          <button
            className="active:bg-blue-200"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <GrClose style={{ fontSize: 40 }} />
            ) : (
              <FiMenu style={{ fontSize: 40 }} />
            )}
          </button>
          <button onClick={() => setSearch(!search)}>
            {search ? (
              <BiSearch style={{ fontSize: 40 }} />
            ) : (
              <BiSearch style={{ fontSize: 40 }} />
            )}
          </button>
          <Link href={'/'}>
            <Image src="/oretLogo.png" alt="me" width="100" height="100" />
          </Link>
          <button>
            <HiOutlineShoppingBag style={{ fontSize: 40 }} />
          </button>
          <button>
            <BsPerson style={{ fontSize: 40 }} />
          </button>
        </div>
      </div>
      <div
        className={`flex-1 block justify-self-center pb-3 md:pb-0 md:mt-0 absolute bg-white w-[100%] h-[100%] ${
          navbar ? " md:p-0 block" : "hidden"
        }`}
      >
        <div className="w-full">
          <ul>
            <li className="text-[30px] p-5 font-semibold active:bg-blue-200">
              <button>Men</button>
            </li>
            <li className="text-[30px] text-2xl p-5 font-semibold active:bg-blue-200">
              <button>Women</button>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`flex bg-white justify-center w-full absolute ${
          search ? "block" : "hidden"
        }`}
      >
        <SearchBar />
      </div>

      {/* web view */}

      <div className="py-10 px-4 lg:flex hidden">
        <div className="m-auto flex justify-between w-full px-10">
          <div className="flex w-[90%] overflow-auto">
            <div className="flex">
              <Link href={'/'}>
                <Image src="/oretLogo.png" alt="me" width="150" height="150" />
              </Link>
            </div>

            <div className="flex items-center overflow-hidden mr-5 hover:overflow-x-scroll">
              {menu.map((item) => (
                <button className="m-5 p-1 font-semibold">{item}</button>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button>
              <HiOutlineShoppingBag style={{ fontSize: 30 }} />
            </button>
            <button className="m-5 font-semibold rounded-xl bg-black text-white px-3 py-2 text-sm">
              SIGN IN OR JOIN NOW
            </button>
          </div>
        </div>
      </div>

      {/* end web view */}
    </div>
  );
}

export default NavBar;
