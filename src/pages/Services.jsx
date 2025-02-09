import { bg } from "../assets/images"
import Banner from "../components/Banner"
import Service from "../components/Service"

const Services = () => {
  return (
    <div>
      <Banner bg={bg} title="Services"/>
      <Service />
    </div>
  )
}

export default Services