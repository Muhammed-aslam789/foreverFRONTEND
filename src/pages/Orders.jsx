import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { products, currency, backendUrl,token} = useContext(ShopContext);

  const [orderData,setOrderData] = useState([])

  const loadOrderData = async () =>{
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendUrl + '/api/order/userOrder',{},{headers:{token}})
      if (response.data.success) {
        let allOrderItems = []
        response.data.orders.map((order) => {
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrderItems.push(item)
          })
        })
        setOrderData(allOrderItems.reverse())
        
      }
      
    } catch (error) {
      // console.log(error);
      
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[loadOrderData])
  return (
    <div className='pt-16 border-t'>
      <div className='text-2xl'>
        <Title text1={'MY '} text2={'ORDERS'}></Title>
      </div>

      <div>
        {
         orderData.map((item, index) => (
            <div key={index} className='flex flex-col gap-4 py-4 text-gray-700 border-b md:flex-row md:items-center md:justify-between'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='font-medium sm:text-2xl text-green-800 '>{item.name}</p>
                  <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                    <p className='font-bold text-xl text-red-500'>{currency}{item.price}</p>
                    <p>Quantity: {item.quatity}</p>
                    <p className='font-bold'>Size: {item.size}</p>
                  </div>
                  <p className='mt-1'>Date: <span className='text-gray-400 '>{new Date(item.date).toDateString()}</span></p>
                  <p className='mt-1'>Payment: <span className='text-gray-400 '>{item.paymentMethod}</span></p>
                
                </div>
              </div>

                <div className='flex justify-end md:w-1/2'>
                  <div className='flex items-center gap-2'>
                    <p className='h-6 bg-green-500 rounded-full min-w-6'></p>
                    <p className='text-2xl md:text-2xl'>{item.status}</p>
                  </div>
                  
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders