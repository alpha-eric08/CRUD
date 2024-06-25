import React from 'react'
import Forms from '../../Forms'
import ContactInfo from './ContactInfo'
import GoogleMap from '../../GoogleMap'
import { contactbg } from '../../../assets'

const Contactus = () => {
  return (
    <div >
      <div className='absolute'>
        <img className='h-[100vh]' src={contactbg} alt="contactbg" />
      </div>
        <div className='relative  mx-auto md:w-96 pt-28 py-[50px] text-center'>
          <h2 className='text-rose-500 text-lg font-semibold'>| Contact Us</h2>
          <h1 className='text-white text-5xl font-bold'>Get In Touch With Our Agents</h1>
        </div>
      <div className='relative pt-28 md:flex place-content-center'>
        <div className='md:w-[700px]'>
         <GoogleMap />
          <ContactInfo />
        </div>
        <Forms />
      </div>
    </div>
  )
}

export default Contactus