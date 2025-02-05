
const FilterButtons = () => {
  return (
    <div className="flex md:justify-between">
        <div className="space-x-5">
            <button className="bg-[#2B70EF] text-white hover:bg-white border-2 rounded-3xl hover:text-black duration-300 py-3 px-5">All</button>
            <button className="hover:bg-[#2B70EF] hover:text-white bg-white border-2 rounded-3xl text-black duration-300 py-3 px-5">Dubai</button>
            <button className="hover:bg-[#2B70EF] hover:text-white bg-white border-2 rounded-3xl text-black duration-300 py-3 px-5">Europe</button>
            <button className="hover:bg-[#2B70EF] hover:text-white bg-white border-2 rounded-3xl text-black duration-300 py-3 px-5">Kenya</button>
            <button className="hover:bg-[#2B70EF] hover:text-white bg-white border-2 rounded-3xl text-black duration-300 py-3 px-5">Ghana</button>
        </div>
        <div>
        <button className="hover:bg-[#2B70EF] hover:text-white bg-white border-2 rounded-3xl text-black duration-300 py-3 px-5">View More ></button>
        </div>
    </div>
  )
}

export default FilterButtons