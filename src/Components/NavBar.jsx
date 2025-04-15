import React, { useState } from 'react'
import Btn from '../assets/Btn'
import { useLocation } from 'react-router';


function NavBar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const NavMenu = [
        { name: 'Home',path:"/"},
        { name: 'Book Now', path: '/bookNow' },
        { name: 'Our Events', path: '/events' },
        { name: 'About Us', path: '/about' },
        {name : ''}
    ]

    return (
        <nav className='h-[10vh] w-full top-0 left-0 bg-gray-800 text-white flex justify-between items-center px-10 font-semibold py-5 '>
            <Btn content="Book Event"  link={'/bookNow'}/>
            <ul className='hidden sm:flex items-center gap-[2vw]'>
                {NavMenu.map((item, index) => (
                    <li key={index} className='mx-2'>
                        <a
                            href={item.path}
                            className={`relative text-white 
                            after:content-[''] after:absolute after:-bottom-1 after:left-0 
                            after:w-full after:h-[2px] after:bg-white 
                            after:scale-x-0 hover:after:scale-x-100 
                            after:origin-left after:transition-transform after:duration-300 opacity-70 hover:opacity-100
                    
                            ${location.pathname === item.path ? 'after:scale-x-80 opacity-100' : 'opacity-70'}
                          `}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='z-50 sm:hidden' onClick={() => setIsOpen(!isOpen)}>
                <img className='invert' src="./menu.png" alt="" />
            </div>
            <div className={`sm:hidden fixed top-0 right-0 w-[60%] h-screen bg-gray-800 bg-opacity-90 px-5 py-10 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold cursor-pointer' onClick={() => setIsOpen(false)}>
                    X
                </div>

                <ul className='flex flex-col gap-2 mt-12'>
                    {NavMenu.map((item, index) => (
                        <li key={index} className='mx-2'>
                            <a href={item.path}
                                className={`relative text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 opacity-70 hover:opacity-100 ${location.pathname === item.path ? 'after:scale-x-80 opacity-100' : 'opacity-70'}`} >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>


    )
}

export default NavBar