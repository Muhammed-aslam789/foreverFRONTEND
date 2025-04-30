import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        console.log();

        return null;

      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className='pt-10 transition-opacity duration-500 ease-in border-t-2 opacity-100'>
      {/* productdata */}
      <div className='flex flex-col gap-12 sm:gap-12 sm:flex-row'>
        {/* product images */}
        <div className='flex flex-col-reverse flex-1 gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>

        {/* -----------product info------------- */}
        <div className='flex-1'>
          <h1 className='text-2xl font-medium'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            {/* <img src={assets.star_icon} alt="" className='w-3 5' /> */}
            {/* <img src={assets.star_icon} alt="" className='w-3 5' /> */}
            {/* <img src={assets.star_icon} alt="" className='w-3 5' /> */}
            {/* <img src={assets.star_icon} alt="" className='w-3 5' /> */}
            {/* <img src={assets.star_dull_icon} alt="" className='w-3 5' />
            <p className='pl-2'>(122)</p> */}
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} >{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='px-8 py-3 text-sm text-white bg-black active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='flex flex-col gap-1 mt-5 text-sm text-gray-500'>
            <p>100% Original Product.</p>
            <p>Cash on Delivery is avialable on this product.</p>
            {/* <p>Easy Return and Exchange policy within 7 days.</p> */}
          </div>
        </div>
      </div>
      {/*--------------------------- Description and review section----------------- */}
      <div className='mt-20'>
        <div className='flex gap-1'>
          <b className='px-5 py-3 text-sm border'>Description</b>
          {/* <p className='px-5 py-3 text-sm border'>Reviews(122)</p> */}
        </div>
        <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-500 border'>
          <p>
            An e-commerce website, simply put, is an online store. It's a platform where goods and services are traded between buyers and sellers over the internet. Unlike a physical storefront,
          </p>
          <p>
            an e-commerce website can be accessed at any time, from anywhere, as long as there's an internet connection. As a digital shopfront displays products or services, allows users to select and purchase them and facilitates the acceptance of payments.
          </p>
        </div>
      </div>

      {/* ----------display related products----------------- */}

      <RelatedProducts category={productData.category} subcategory={productData.subCategory}></RelatedProducts>

    </div>
  ) : <div className='opacity-0'>

  </div>
}

export default Product