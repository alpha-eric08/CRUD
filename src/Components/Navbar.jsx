
const Navbar = () => {
  return (
    <div className="bg-[#434BB4] text-white flex items-center justify-between px-20 h-20  ">
        {/* logo */}
        <div>
            <img src="CRUD" alt="logo" className='w-32 mx-auto mt-5' />
        </div>
        {/* nav */}
        <ul className="flex space-x-5">
            <li className='text-xl hover:text-gray-400 duration-300 font-medium text-center '>
                <a href="/">Home</a>
            </li>
            <li className='text-xl hover:text-gray-400 duration-300 font-medium text-center '>
                <a href="/about">About</a>
            </li>
            <li className='text-xl hover:text-gray-400 duration-300 font-medium text-center '>
                <a href="/profile">Profile</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar