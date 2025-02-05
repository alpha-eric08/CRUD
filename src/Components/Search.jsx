import { FiMapPin } from "react-icons/fi"
import { IoSearch } from "react-icons/io5"
import { MdDateRange } from "react-icons/md"

const Search = () => {
  return (
    <div className="absolute w-full md:top-[530px] top-[559px]">
        <div className="bg-white shadow-lg  mb-10 overflow-hidden  rounded-3xl mx-auto py-6 md:w-[700px]">
            <div className="bg-white ">

                {/* forms */}
                <form>
                    <div className="text-[##1F252F] flex justify-center gap-5 items-center">
                        {/* Destination */}
                        <div className="border-r-2">
                            <label htmlFor="destination" className="flex font-medium items-center gap-1">
                            <FiMapPin size={20}/>
                                Destination</label>
                                <input type="text" placeholder="Where is your next tour" className="p-1 w-full"/>
                        </div>
                         {/* Set Date  */}
                         <div>
                            <label htmlFor="date" className="flex font-medium items-center gap-1">
                            <MdDateRange size={20}/>
                            Set Date </label>
                                <input type="text" placeholder="Start Date - End Date" className="p-1 w-full"/>
                        </div>
                         {/* Submit */}
                         <div className="ml-10">
                            <button className="p-3 bg-[#2B70EF] text-[#FFFFFF] font-medium rounded-full duration-300 hover:bg-[#020f28]"><IoSearch size={30}/></button>
                         </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Search