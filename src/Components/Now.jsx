import { img3, transparency } from "../assets/images"

const Now = () => {
  return (
    <div className="relative my-5">
        <img src={img3} alt="" />
        <img src={transparency} alt="" className="absolute top-0" />
        <div className="absolute top-0 w-full h-full md:mt-72">
            <div className="flex flex-col justify-center items-center text-white w-full">
                <h1 className="font-semibold md:text-5xl text-2xl md:w-2/5 text-center">Enjoy the best travel experience now</h1>
                <button className="duration-300 animate-bounce hover:bg-[#021d4f] bg-[#2B70EF] font-medium text-lg p-3 rounded-3xl mt-5">Book with us ></button>
            </div>
        </div>
    </div>
  )
}

export default Now