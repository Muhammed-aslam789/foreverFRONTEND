import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const contact = () => {
  return (
    <div>
      <div className='pt-10 text-2xl text-center border-t'>
<Title text1={"OUTLET "} text2={'LOCATION'}></Title>
      </div>

      <div className='flex flex-col justify-center gap-10 my-10 md:flex-row mb-28'>
        <img className='w-full md:max-w-[450px] ' src={assets.contact_img} alt="" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='text-xl font-semibold text-gray-600'>Our Store</p>
          <p className='text-gray-500 '>FOREVER<br></br> PO Jn. Muvattupuzha</p>
          <p className='text-gray-500'>+91 9539513452 <br></br> Email: foreverinfo@gmail.com</p>
          
        </div>
      </div>
      <NewsLetterBox></NewsLetterBox>
    </div>
  )
}

export default contact