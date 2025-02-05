import { bg } from "../assets/images"

const Banner = (probs) => {
  return (
    <div className="w-full h-screen relative">
        <div className="w-full h-full overflow-hidden">
            <img src={probs.bg} alt="bg" className="h-full w-full object-cover"/>
        </div>
        <div className="absolute text-poppins top-[280px] text-white md:left-32 px-5">
            <h1 className=" md:w-3/5 font-bold md:text-6xl text-4xl ">{probs.title}</h1>
            <p className="text-lg md:w-3/6 mt-4">{probs.des}</p>
        </div>
    </div>
  )
}

export default Banner