import React from 'react'

function Forms() {
  return (
    <div className=' rounded-2xl text-black py-10 shadow-2xl shadow-black md:mx-8 mr-3 px-10 mb-10 bg-white md:w-[400px]'>
        <form action="">
            <div className=' flex flex-col gap-2 mb-5'>
                <label htmlFor="name">Full Name</label>
                <input 
                type="text" 
                placeholder='Your Name...'  
                id='name'
                className=' rounded-3xl pl-2 py-2 text-black bg-gray-200'/>
            </div>
            <div className=' flex flex-col gap-2 my-5'>
                <label htmlFor="email">Email Address</label>
                <input 
                type="email" 
                placeholder='Your E-mail...'  
                id='email'
                className=' rounded-3xl pl-2 py-2 text-black bg-gray-200'/>
            </div>
            <div className=' flex flex-col gap-2 my-7'>
                <label htmlFor="subject">Subject </label>
                <input 
                type="text" 
                placeholder='Subject...'  
                id='subject'
                className=' rounded-3xl pl-2 py-2 text-black bg-gray-200'/>
            </div>
            <div className=' flex flex-col gap-2 my-7'>
                <label htmlFor="message">Message</label>
                <textarea 
                name="message" 
                id="message" 
                placeholder='Your Message'
                className='p-2 rounded-t-2xl rounded-bl-2xl h-44 border-2 bg-gray-200'></textarea>
            </div>
            <div className=' text-white mx-10 '>
                <input className='bg-gray-900 rounded-3xl px-5 py-3 hover:bg-orange-500 text-xl font-medium' type="submit" value='Send Message' />
            </div>
        </form>
    </div>
  )
}

export default Forms