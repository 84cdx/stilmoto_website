import React from 'react'
import Image from 'next/image';
import { IoIosLogIn } from "react-icons/io";

const Header = () => {
    return (
        <div className='w-full h-[80px] bg-white border-b'>
            <div className='max-w-[1024px] m-auto w-full h-full flex items-center'>
                <Image
                    src="/images/stil.png"
                    alt="logo"
                    width={300}
                    height={60}
                />
                <div className='flex'>Log-In</div>
            </div>
        </div>
    )
}

export default Header