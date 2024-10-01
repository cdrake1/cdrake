import { SocialIcon } from 'react-social-icons'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { useState } from 'react';

const Nav = () => {

    const [openMenu, setOpenMenu] = useState
    (false)


    const menuHandler = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className="flex justify-center items-center bg-white w-[50%] fixed top-6 left-1/2 translate-x-[-50%] rounded-xl p-8 h-20 font-semibold shadow-xl">

            <ul className={`md:flex gap-12 [&>li] :cursor-pointer absolute md:static top-20 bg-white max-md:p-3
                text-center
                ${openMenu ? "" : "hidden"}
                `}>

                <a href="/">
                    <li className='hover:text-green-400 hover:underline hover:transition'>Home</li>
                </a>

                <a href="/">
                    <li className='hover:text-green-400 hover:underline hover:transition'>About</li>
                </a>

                <a href="/">
                    <li className='hover:text-green-400 hover:underline hover:transition'> Projects</li>
                </a>

                <a href="/">
                    <li className='hover:text-green-400 hover:underline hover:transition'>Other</li>
                </a>
            </ul>
            <div className='md:hidden'>
                <button onClick={menuHandler}>
                    {openMenu ? <IoClose size={25}/> : <IoMenu size={25}/>}
                </button>
            </div>

        </nav>
        //github link
        //linkedin link
    );
}

export default Nav;
