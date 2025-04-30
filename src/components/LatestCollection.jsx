import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const [latestProduct, setLatestProduct] = useState([]);
    const { products } = useContext(ShopContext);

    useEffect(() => {
        setLatestProduct(products.slice(0, 10))
    },[products])
    return (
        <div className='my-10'>
            <div className='py-8 text-3xl text-center'>
                <Title text1={'LATEST '} text2={'COLLECTIONS'}></Title>
                <p className='w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base'>
                Where Style Meets Soul – Redefining Fashion, One Bold Step at a Time.
                </p>
            </div>
        {/* RENDERING PRODUCTS */}
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
            {
                latestProduct.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}></ProductItem>
                ))
            }
        </div>
        </div>
    )
}

export default LatestCollection