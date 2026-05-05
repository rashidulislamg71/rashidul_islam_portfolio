import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'

function Navbar() {

    return (
        <div >

            <div className='border-b border-gray-50 flex justify-between items-center px-4 md:px-16'>
                <div className='cursor-pointer'>
                    <Image  src={"/logo.png"} height={"100"} width={"100"} alt="Logo"></Image>
                </div>
                <div>
                    <ul className='flex justify-center items-center md:gap-20 md:text-[16px]
                     text-white '>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Skills</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>ContactME</a></li>
                    </ul>
                </div>
                <div>
                 {/* <p className='font-bold cursor-pointer text-white'> Light</p> */}
                    <ThemeToggle />
                </div>
            </div>


        </div>
    )
}

export default Navbar