import Card from "./Card"
import FilterButtons from "./FilterButtons"
import Title from "./Title."

const Packages = () => {
  return (
    <div className="bg-[#E9F1FF66] space-y-5 py-10 md:px-20">
        <Title title="explore our popular packages" des="Tour Packages"/>

        <FilterButtons />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3  justify-between items-center md:flex-row flex-col">
        <Card />
        <Card />
        <Card />

        </div>
    </div>
  )
}

export default Packages