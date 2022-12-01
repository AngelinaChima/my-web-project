import React from 'react';
import logo from "../Images/logo.png";
import {Link} from "react-router-dom";
import {FaSistrix} from "react-icons/fa";
import {FaExclamationCircle} from "react-icons/fa";

function Nav (){

    return(

        <div className = "w-full h-60px shadow-md flex static justify-between px-6 items-center">

        <img src={logo} alt = "logo"/>

            <div className='flex'>  <FaSistrix/>
                <input type = "text" className = "w-40px sm:w-20px border text-xs" 
            placeholder = 'Search for anything...' /></div>

            <div className = 'flex text-sm'>
            <Link to = "/" className = 'mr-4 cursor-pointer text-black-400 hover:text-blue-500'>Home</Link>
            
            <div className='flex'> <FaExclamationCircle/>
            <Link to = "/" className = 'mr-4 cursor-pointer text-black-400 hover:text-blue-500'>Help</Link>
            </div>

            <Link to = "/Signup" className = 'mr-4 cursor-pointer text-black-400 hover:text-blue-500'>Signup</Link>
            
            <Link to = "/Login" className = "w-15px h-30px sm:w-10px sm:text-xs sm:h-5px md:h-20px md:w-10px md:text-sm bg-orange-500 border hover:text-blue-500 rounded-md ">Get Started</Link>
            </div>
        </div>
    )
}

export default Nav;