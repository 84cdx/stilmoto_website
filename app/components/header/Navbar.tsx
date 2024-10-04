import React from 'react'
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdLocalOffer } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='w-full h-[80px] bg-white border-b'>
            <div className='max-w-[1024px] m-auto w-full h-full flex items-center'>
                <FaHome />
                <AiFillProduct />
                <RiContactsBook3Fill />
                <MdLocalOffer />
                <FaShoppingCart />
            </div>
        </div>
    )
}

export default Navbar