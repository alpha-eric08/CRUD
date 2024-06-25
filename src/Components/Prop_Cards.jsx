import React from 'react'
import { property1 } from '../assets'

function Property_Cards() {
  return (
    <div>
        {/*  */}

        <div className="container grid place-content-center grid-cols-3 mx-auto gap-5">
            <div className="card bg-gray-100 px-8">
                <div className="img place-content-center flex pt-10 ">
                <img src={property1} alt="property1" className='rounded-xl'/>
                </div>
                <div className="flex justify-between px-2 pt-5">
                    <div>
                        <button className='bg-cyan-200 p-1 px-2 rounded-md font-semibold'>Apartment</button>
                    </div>
                    <div className='text-rose-500 font-bold text-2xl'>
                        <p>$584.500</p>
                    </div>
                </div>
                <div className="text-black font-bold text-xl">
                    <h1 className='py-5'>
                        <a href="#">12 New Street Miami, OR 12650</a>
                    </h1>
                </div>
                <div className="button py-10 border-t-2 text-center border-gray-300">
                    <a href="#">
                        <button className='bg-gray-900 rounded-3xl py-1.5 px-8 text-lg font-semibold text-white hover:bg-orange-400'>Schedule a visit</button>
                    </a>
                </div>
            </div>
            <div className="card bg-gray-100 px-8">
                <div className="img place-content-center flex pt-10 ">
                <img src={property1} alt="property1" className='rounded-xl'/>
                </div>
                <div className="flex justify-between px-2 pt-5">
                    <div>
                        <button className='bg-cyan-200 p-1 px-2 rounded-md font-semibold'>Apartment</button>
                    </div>
                    <div className='text-rose-500 font-bold text-2xl'>
                        <p>$584.500</p>
                    </div>
                </div>
                <div className="text-black font-bold text-xl">
                    <h1 className='py-5'>
                        <a href="#">12 New Street Miami, OR 12650</a>
                    </h1>
                </div>
                <div className="button py-10 border-t-2 text-center border-gray-300">
                    <a href="#">
                        <button className='bg-gray-900 rounded-3xl py-1.5 px-8 text-lg font-semibold text-white hover:bg-orange-400'>Schedule a visit</button>
                    </a>
                </div>
            </div>
            <div className="card bg-gray-100 px-8">
                <div className="img place-content-center flex pt-10 ">
                <img src={property1} alt="property1" className='rounded-xl'/>
                </div>
                <div className="flex justify-between px-2 pt-5">
                    <div>
                        <button className='bg-cyan-200 p-1 px-2 rounded-md font-semibold'>Apartment</button>
                    </div>
                    <div className='text-rose-500 font-bold text-2xl'>
                        <p>$584.500</p>
                    </div>
                </div>
                <div className="text-black font-bold text-xl">
                    <h1 className='py-5'>
                        <a href="#">12 New Street Miami, OR 12650</a>
                    </h1>
                </div>
                <div className="button py-10 border-t-2 text-center border-gray-300">
                    <a href="#">
                        <button className='bg-gray-900 rounded-3xl py-1.5 px-8 text-lg font-semibold text-white hover:bg-orange-400'>Schedule a visit</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Property_Cards