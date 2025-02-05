import { MdDateRange } from "react-icons/md"
import {  img4 } from "../assets/images"
import { CiClock2, CiLocationOn } from "react-icons/ci"

const Card = () => {
  return (
    <div>
        <div className="max-w-sm shadow-lg rounded-md">
            <img src={img4} alt="" className="w-full h-[300px] object-cover rounded-3xl"/>
            {/* Content */}
            <div className="space-y-2">
                <h1 className="font-medium text-lg ">Kenya Safari Tour </h1>
                <div className="flex space-x-5 text-sm text-[#1F252F80]">
                    <p className="flex items-center"><CiLocationOn /> Kenya, Africa</p>
                    <p className="flex items-center"><CiClock2 /> 5 Days trip</p>
                </div>
                <p className="flex items-center text-base"> <MdDateRange /> 8 Nov - 12 Nov 2024</p>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-xl">$2,860</p>
                    <button className="border-2 py-2 px-7 rounded-3xl hover:bg-[#2B70EF] hover:text-white duration-300">Book</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card