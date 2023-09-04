import React, { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import "./carousel.css";

function Carosel({ imageSlide }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // const  {imageSlide}  = props; // Деструктурируем объект props

  // const imageSlide = [
  //     './images/vladimir-gladkov-Y7i_LU1L-Jo-unsplash.jpg',
  //     "./images/kobu-agency-TWIRIAizZFU-unsplash.jpg",
  //    "./images/julia-zolotova-KHhhpr8_GAs-unsplash.jpg",
  //    "./images/img_glas_plastic-150g.jpg"

  // ]

  console.log(imageSlide);

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   initialSlide: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 550,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="flex flex-col justify-center carousel max-h-100">
      <div className="flex justify-center bg-center bg-cover contImage h-96">
        <img
          src={imageSlide[activeSlideIndex]}
          className="transition duration-500 rounded cursor-pointer imageSourse h-96 hover:-translate-y-20 hover:scale-125"
          alt="prod"
        />
      </div>
      <div className="w-full m-auto text-indigo-400 carouselInside p-7">
        {/* <Slider {...settings}> */}
          {imageSlide.map((item, index) => (
            <div
            key={index}
            onClick={() => setActiveSlideIndex(index)}
            >
              {console.log(index)}
              <img key={index} src={item} alt="gror" 
               className="bg-teal-200 box max-h-40 custom-height"
              />
              <h3 className="text-center max-h-80 "> </h3>
            </div>
          ))}
        {/* </Slider> */}
      </div>
    </div>
  );
}

export default Carosel;

/* <div className="bg-teal-200 box h-300px ">
<h3 className='text-5xl text-center' >1</h3>
</div>
<div className="bg-teal-200 box h-300px">
<h3 className='text-center'>2</h3>
</div>
<div className="bg-teal-200 box h-300px">
<h3 className='text-center'>3</h3>
</div>
<div className="bg-teal-200 box h-300px">
<h3 className='text-center'>4</h3>
</div>
<div className="bg-teal-200 box h-300px">
<h3 className='text-center'>5</h3>
</div> */

// const imageSlide = props.imgSourse
