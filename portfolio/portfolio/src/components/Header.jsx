import React, { useContext } from 'react'
import profileImg from '../assets/img4.jpg'
import { IoMdSunny } from "react-icons/io";
import { GoMoon } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import {ThemeContext} from "../pages/Homepage"
import { Link } from 'react-router-dom';
import react, { useState, useEffect } from 'react'

// import { to } from './../../node_modules/rollup/dist/es/shared/node-entry';

//themecontext is something we define 
// usecontext comes from the react library
const Header = () => {

  const {theme, setTheme} = useContext(ThemeContext) 
  console.log(theme)

// useEffect()

  return (
    <div className='h-screen flex flex-col p-8 gap-8 border-solid border-2'>
      
      <nav className='flex justify-center gap-8 mt-16 text-3xl font-bold'>
        <ul className='flex gap-8'>
      <li className='cursor-pointer hover:bg-green-100'><Link to="/">HomePage</Link></li>
      <li className='cursor-pointer'><Link to="/about">About</Link></li>
      <li className='cursor-pointer'><Link to="/projects">Projects</Link></li>
      <li className='cursor-pointer'><Link to="/skills">Skills</Link></li>
      <li className='cursor-pointer'><Link to="/contact">Contact</Link></li>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? <IoMdSunny  /> : <GoMoon  className='text-white'/>}</button>
        </ul>
      </nav>

      <div className='w-[200px] rounded-full h-[200px] object-cover overflow-hidden m-auto'>
        <img className='' src={profileImg} alt="" />
      </div>

      
      <div>
        <div className=' flex flex-col items-center gap-6 '>
        <h1 className='text-7xl'>
          <span className='text-center'>Xori</span>
          <br />
          Robinson
        </h1>
        <h2 className='text-4xl'>Frontend Developer</h2>
        <span className=' flex gap-6'>
          <Link to='https://github.com/xori93?tab=repositories' target='_blank'>
            <FaGithub />
          </Link>

          <Link>
            <MdOutlineMailOutline />
          </Link>

          <Link to='https://www.linkedin.com/in/xori-robinson-b3b809291/'>
            <FaLinkedin />
          </Link>

          <Link to='https://profile.indeed.com/?hl=en_US&co=US&from=gnav-menu-homepage'>
            <SiIndeed />
          </Link>
        </span>
        </div>
      </div>

      
    </div>

  )
}

export default Header