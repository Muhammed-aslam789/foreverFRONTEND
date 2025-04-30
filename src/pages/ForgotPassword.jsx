import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const {navigate,backendUrl} = useContext(ShopContext); 

  const [email,setEmail] = useState('');

  const onSubmithandler = async (event) =>{
      event.preventDefault();
      try {
        
          const response = await axios.post(backendUrl + '/api/user/forgot-password',{email:email})
          if (response.data.success) {
            toast.success(response.data.message)
            setTimeout(() => {
                navigate('/login');
              }, 3000);
          }
          else{
            toast.error(response.data.message)
          }
          
        
        
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
  }

  
  return (
    <form onSubmit={onSubmithandler} className='flex flex-col items-center w-[90%] sm:max-w-96  m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mt-10'>
        <p className='text-3xl prata-regular'>RESET PASSWORD</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Enter Your Email' required/>
   
   <button className='px-8 py-2 mt-4 font-light text-white bg-black'>Reset Password</button>
    </form>
  )
}

export default ForgotPassword