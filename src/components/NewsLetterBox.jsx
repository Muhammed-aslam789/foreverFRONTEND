import React, { useState } from 'react'
import axios from 'axios'

const NewsLetterBox = () => {
    const [email, setemail] = useState("")

    const onSubmitHandler = async () => {
        await axios.post("http://localhost:4000/api/mail/send", { email: email }).then((respose) => { console.log(respose) }).catch((err) => console.log(err))
    }

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>
                Subscribe Now!
            </p>
            <p className='mt-3 text-gray-400'>
                Subscribe FOREVER for latest updates and New Arrivals..!
            </p>
            <form className='flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2'>
                <input type='email' onChange={(e) => setemail(e.target.value)} value={email} placeholder='Enter your email' className='w-full outline-none sm:flex-1 h-10' required></input>

            </form>
            <button onClick={() => onSubmitHandler()} className='px-10 py-4 text-xs text-white bg-black'>SUBSCRIBE</button>
        </div>
    )
}

export default NewsLetterBox