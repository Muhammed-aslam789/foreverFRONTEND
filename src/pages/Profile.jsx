import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios';
import { toast } from 'react-toastify';

const UserProfile = () => {
    const { navigate, backendUrl } = useContext(ShopContext);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [edit, setEdit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const token = localStorage.getItem('token')

    const fetchUser = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/user/get-user', { headers: { token } })
            if (response.data.success) {
                console.log(response.data)
                setName(response.data.message.name)
                setEmail(response.data.message.email)
                
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const handleUpdate = async () => {
       
        const updateingUser = {
            name,
            email,
            password
        }
        console.log(updateingUser)
        const response = await axios.put(backendUrl + '/api/user/change-user-details', updateingUser,{ headers: { token } })
        if (response.data.success) {
            toast.success(response.data.message)
            setEdit(false)
        }
        else {
            toast.error(response.data.message)
        }

    }

    const togglePasswordVisibility = () => {
        if (edit) {
            setShowPassword(prevState => !prevState);
        }
    };


    return (
        <div className='flex flex-col items-center w-[90%] sm:max-w-96  m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mt-10'>
                <p className='text-3xl prata-regular'>PROFILE</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>

            <input disabled={!edit ? "disabled" : ""} onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800 ' required />
            <input disabled={!edit ? "disabled" : ""} onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800 ' required />
            <input disabled={!edit ? "disabled" : ""} onChange={(e) => setPassword(e.target.value)} value={password} type={showPassword ? 'text' : 'password'} className='w-full px-3 py-2 border border-gray-800' placeholder='Enter Your New Password' required />
            <label>
                <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                /> Show Password
            </label>
            <button onClick={() =>  edit ? handleUpdate() : setEdit(true) } className='px-8 py-2 mt-4 font-light text-white bg-black'>{edit ? 'Save' : 'Update Profile'}</button>
        </div>
    )
}

export default UserProfile