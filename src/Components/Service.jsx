import { img, trans } from "../assets/images"

export const Layer1 = (probs) => {
  return (
    <div className=" py-10 w-full h-[600px] overflow-hidden  px-20">
        <div className="h-full gap-10 w-full flex">
            {/* content */}
            <div className="w-1/2  h-full flex space-y-5 flex-col justify-center">
                <h1 className="font-medium text-4xl">{probs.title}</h1>
                <p className="text-lg">{probs.content}</p>
                <div>
                <button className="rounded-3xl py-2 px-5 border-2">Book Now ></button>
                </div>
            </div>
             {/* image */}
             <div className="">
                <img src={probs.img} alt="" className=" object-cover"/>
             </div>
        </div>
    </div>
  )
}

// layer 2
export const Layer2 = (probs) => {
    return (
      <div className=" py-10 w-full h-[600px] overflow-hidden  px-20">
          <div className="h-full gap-10 w-full flex">
               {/* image */}
               <div className="">
                  <img src={trans} alt="" className=" object-cover"/>
               </div>
              {/* content */}
              <div className="w-1/2  h-full flex space-y-5 flex-col justify-center">
                  <h1 className="font-medium text-4xl">{probs.title}</h1>
                  <p className="text-lg">{probs.content}</p>
                  <div>
                  <button className="rounded-3xl py-2 px-5 border-2">Book Now ></button>
                  </div>
              </div>
          </div>
      </div>
    )
  }






const Service = () => {
  return (
    <div>
        <Layer1 img={trans} content="At Spectar Travel, we believe that the journey begins long before you board the plane. Our comprehensive travel planning services are designed to turn your dream vacation into a seamless reality. Whether you're looking for a quick getaway or an extended adventure, our expert team is here to guide you every step
                  of the way." title="Travel Planning"/>

        <Layer2  content="We understand that the best adventures are the ones shared with friends, family, or colleagues. Our Group Travel Planning Services are designed to create unforgettable experiences for groups of all sizes, whether you’re organizing a family reunion, a corporate retreat, a school trip, or a getaway with friends. Let us handle the details so you can focus on making memories together!" title="Group Travel "/>

        <Layer1 content="At Spectar Travel, we understand that time is money, especially when it comes to business travel. Our Business Travel Services are designed to cater to the unique needs of corporate travelers, ensuring a seamless and productive travel experience from start to finish." img={img}/>
    </div>
  )
}

export default Service