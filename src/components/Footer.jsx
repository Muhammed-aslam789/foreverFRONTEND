import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div className=''>
                <img src={assets.logo} className='w-32 mb-5 ' alt="" />
                <p className='w-full text-gray-600 md:w-2/3'>
                Where Style Meets Soul – Redefining Fashion, One Bold Step at a Time.
                </p>
            </div>

            <div>
                <p className='mb-5 text-xl font-medium'>Quick Links</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/collection'>Collections</a></li>
                    <li><a href='/about'>About Us</a></li>
                </ul>
            </div>

            <div>
                <p className='mb-5 text-xl font-medium '>Get In Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9539513452</li>
                    <li>foreverinfo@gmail.com</li>
                </ul>
            </div>

        </div>
            <hr></hr>
            <p className='py-5 text-sm text-center '>Copyright {currentYear} @ Forever.com - All Right Reserved</p>
        </div>
    )
}

export default Footer