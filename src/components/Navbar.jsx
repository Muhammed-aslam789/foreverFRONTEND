import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const { setShowSearch, getCartCount, navigate, token, setToken } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        
        
    }
    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to={'/'}>
                <img src={assets.logo} alt='' className='w-36'></img>
            </Link>
            <ul className='hidden gap-5 text-sm text-gray-700 sm:flex'>

                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' ></hr>
                </NavLink>

                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                
                <div className='relative group'>
                   
                    <img onClick={()=> token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                   {/* -----------dropDown---------------- */}
                   {token && 
                    <div className='absolute right-0 hidden pt-4 pl-2 group-hover:block dropdown-menu'>
                        <div className="flex flex-col items-end gap-2 py-5 pr-2 text-gray-500 rounded-lg w-46 bg-slate-100">
                            <p onClick={()=>navigate('/profile')} className='cursor-pointer text-lg hover:text-black '>My Profile</p>
                            <p onClick={()=>navigate('/order')} className='cursor-pointer text-lg hover:text-black '>Orders</p>
                            <p onClick={logout} className='cursor-pointer text-lg hover:text-red-500'>Logout</p>
                        </div>
                    </div>
                    }
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 w-md-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px] font-bold'>{getCartCount()}</p>
                </Link>

                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>

            {/* sidebar menu for small screen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600 '>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown_icon} className='h-4 rotate-180 ' alt="" />
                        <p className='text-black'>back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar