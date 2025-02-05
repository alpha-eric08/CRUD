import { IoSearch } from "react-icons/io5";
import { img, trasparency } from "../assets/images";
import Title from "./Title.";
import { MdOutlineArrowOutward } from "react-icons/md";
import { trendingLocations } from "../assets/data";

const TrendingLoc = () => {
  return (
    <div className="px-20">
      {/* Content */}
      <div className="flex justify-between mt-16 items-center">
        <Title title="Destinations to explore" des="Trending Locations"/>
        <div>
          <button className="text-sm text-[##1F252F] border-2 rounded-3xl p-1">
            View more >
          </button>
        </div>
      </div>
      {/* Trending Locations Cards*/}
      <div className="flex justify-between flex-wrap">
        {trendingLocations.map((location) => (
        <div key={location.id} className="max-w-xs rounded-[37px] overflow-hidden h-[400px] relative">
          <img src={img} alt="" className="h-full w-full object-cover" />
          <div className="absolute top-0">
            <img src={trasparency} alt="" />
          </div>
          <div className="flex absolute bottom-0  text-white justify-between w-full mb-5 items-center text-wite text-xl px-5  ">
            <p>{location.location}</p>
            <button className="p-3 bg-[#69E2A9] text-[#1F252F] font-medium rounded-full duration-300 hover:bg-[#196843]">
              <MdOutlineArrowOutward size={25} />
            </button>
          </div>
        </div>

        
        ))}
      </div>
    </div>
  );
};

export default TrendingLoc;
