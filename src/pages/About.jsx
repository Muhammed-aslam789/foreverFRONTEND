import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='pt-8 text-2xl text-center border-t'>
        <Title text1={'ABOUT '} text2={'US'}></Title>
      </div>

      <div className='flex flex-col gap-16 my-10 md:flex-row'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
          <p>Welcome to FOREVER, your one-stop destination for quality products at unbeatable prices! We are committed to providing a seamless shopping experience with a wide range of products, from fashion and electronics to home essentials and more.
            At FOREVER, we believe in customer satisfaction, fast shipping, and secure payments. </p>
          <p>Our team carefully curates every product to ensure top-notch quality and value. Whether you're looking for the latest trends or everyday essentials, we've got you covered.
          Thank you for choosing us. Happy shopping!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At FOREVER, our mission is to provide high-quality products at the best prices while ensuring a seamless and enjoyable shopping experience. We are committed to customer satisfaction, fast delivery, and secure transactions. Our goal is to make online shopping easy, reliable, and accessible for everyone.</p>
        </div>
      </div>

      <div className='py-4 text-4xl'>
        <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
      </div>

      <div className='flex flex-col mb-20 text-sm md:flex-row'>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>At FOREVER, we are committed to providing products that meet the highest standards of quality and reliability. Every item undergoes thorough inspection and testing to ensure durability and performance. We partner with trusted suppliers to maintain excellence in every purchase. Your satisfaction is our top priority, and we stand by the quality of everything we offer.</p>
        </div>

        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
            <b>Convenience:</b>
            <p className='text-gray-600'>At FOREVER, we prioritize your shopping convenience with a user-friendly website and a seamless checkout process. Enjoy fast and secure payments, hassle-free returns, and swift delivery to your doorstep. Our 24/7 customer support ensures a smooth shopping experience. Shop anytime, anywhere with ease!</p>
        </div>

        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>At FOREVER, customer satisfaction is our top priority. Our dedicated support team is always ready to assist you with inquiries, orders, and after-sales support. We strive to provide quick responses, hassle-free returns, and a smooth shopping experience. Your happiness is our success!</p>
        </div>

      </div>
      <NewsLetterBox></NewsLetterBox>
    </div>
  )
}

export default About