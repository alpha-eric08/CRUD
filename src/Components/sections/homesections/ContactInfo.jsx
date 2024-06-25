import React from 'react'
import { email_icon, phone_icon } from '../../../assets'

function ContactInfo() {
  return (
    <div className='md:flex'>
        <div  className=' rounded-2xl text-black pt-8 shadow-2xl shadow-black md:mx-8 mr-3 px-10 h-32 flex gap-5 mb-10'>
            <div className='mt-1.5'>
                <img src={phone_icon} alt="phone-icon" />
            </div>
            <div className='text-gray-400'>
                <h1 className=' text-2xl font-semibold text-black'>010-020-0340</h1>
                <p >Phone Number</p>
            </div>
        </div>
        <div  className=' rounded-2xl text-black pt-8 shadow-2xl shadow-black md:mx-8 mr-3 px-10 h-32 flex gap-5 my-10 md:my-0'>
            <div className='mt-3'>
                <img src={email_icon} alt="phone-icon" />
            </div>
            <div className='text-gray-400'>
                <h1 className=' text-2xl font-semibold text-black'>info@villa.co</h1>
                <p >Business Email</p>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo