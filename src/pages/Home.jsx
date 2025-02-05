import { bg } from "../assets/images"
import Banner from "../components/Banner"
import Now from "../components/Now"
import Packages from "../components/Packages"
import Search from "../components/Search"
import Testimonial from "../components/Testimonies"
import TrendingLoc from "../components/TrendingLoc"

const Home = () => {
  return (
    <div>
        <Banner bg={bg} title="A comprehensive travel just for you" des="We specialize in crafting unforgettable travel experiences, both locally and internationally."/>
        <Search />
        <TrendingLoc />
        <Packages />
        <Testimonial />
        <Now />
    </div>
  )
}

export default Home