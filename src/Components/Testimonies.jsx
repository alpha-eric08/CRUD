import {useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from './Title.';
import { testimonials } from '../assets/data';
import { img } from '../assets/images';


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#2B70EF] hover:bg-black duration-300 rounded-md text-2xl text-white flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "10px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "20px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "#ff014f",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };
     
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="testimonials" des="Satisfied Clients Speak" />
      </div>
      <div className="max-w-5xl mx-auto">

        {/* Slider One */}
        <Slider {...settings}>
           {testimonials.map((item) => (
          <div key={item.id} className="w-full mt-5">
            <div className="w-full h-auto flex flex-col md:flex-row justify-between">
                {/* image */}
              <div className="md:w-[50%] mt-14 md:mt-0 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-96 lgl:h-96 rounded-lg object-cover"
                  src={item.src}
                  alt="testimonialOne"
                />
              </div>
              {/* Content */}
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%]  rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col  justify-items-end md:mt-16 gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 ">
                  <div className="text-yellow-500 flex items-center gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <p className="text-base text-gray-400">{item.date}</p>
                    </div>
                    <div >
                      <h3 className="text-xl md:text-3xl font-medium tracking-wide text-{#1F252F}">{item.project}</h3>
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                   {item.des}
                  </p>
                  {/* Profile */}
                  <div className='flex items-center'>
                    <img src={img} alt="" className='h-14 w-14 rounded-full p-1 object-cover'/>
                    <h1 className='font-medium text-[##1F252F] text-base'>Bodwill kofi Mensah <br /> <span className='font-normal text-xs'>Explorer, Ghana</span></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial