import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from "../Images/testimonial-1.jpg";
import img2 from "../Images/testimonial-2.jpg";
import img3 from "../Images/testimonial-3.jpg";
import img4 from "../Images/testimonial-4.jpg";
import Commonheading from './Commonheading'

const Data = [
  {
    id: 1,
    img_src: img1,
    Name: "Emily Parker",
    Profession: "Teacher",
    Review: "Delicious cakes! My students absolutely loved the cupcakes I ordered for our class party. Thank you for making our day extra special!"
  },
  {
    id: 2,
    img_src: img2,
    Name: "David Johnson",
    Profession: "Software Developer",
    Review: "Incredible taste and design! The customized birthday cake I ordered was a hit at the office. Definitely coming back for more!"
  },
  {
    id: 3,
    img_src: img3,
    Name: "Rodriguez",
    Profession: "Graphic Designer",
    Review: "Absolutely perfect! The cake was a delightful taste and a stunning edible art piece, highly recommended for any special occasion!"
  },
  {
    id: 4,
    img_src: img4,
    Name: "Sara Jones",
    Profession: "Fitness Trainer",
    Review: "Great taste! Had doubts about a 'healthier' cake, but it surprised me. Lots of protein, guilt-free and satisfied my sweet craving."
  },
];


const Testimonial = (props) => {
  // const CustomDot = ({ onClick, ...rest }) => {
  //   const {
  //     onMove,
  //     index,
  //     active,
  //     carouselState: { currentSlide, deviceType }
  //   } = rest;
  //   const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
  //   return (
  //     <button
  //       className={active ? "active" : "inactive"}
  //       onClick={() => onClick()}
  //     >
  //       {React.Children.toArray(carouselItems)[index]}
  //     </button>
  //   );
  // };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1051 },
      items: 3,
    },
    // tablet: {
    //   breakpoint: { max: 1024, min: 464 },
    //   items: 2,
    // },
    tablet: {
      breakpoint: { max: 1050, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <>
     {props.common === "common" && <Commonheading heading = "TESTIMONIAL" link = "TESTIMONIAL" url = "/_cakezone/testimonial"/>}

    <div className='testimoni-div'>
      <h3 className='crispy text-center'>Testimonial</h3>
      <h1 className='home-head text-center about-head testimoni-head'>OUR CLIENTS SAY!!!</h1>
      <div className='parent'>
        <div className='line'></div>
        <div className='square'></div>
      </div>
      
      <div className='carousel-div'>
      <Carousel
      className="testimonial-carousel"
      // swipeable={false}
      // draggable={false}
      showDots={true}
      // customDot={<CustomDot />}
      responsive={responsive}
      infinite={true}
      // autoPlay={props.deviceType !== "mobile" ? true : false}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      // customTransition="all 0.5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      deviceType={props.deviceType}
      dotListClass="react-multi-carousel-dot-list"
      itemClass="carousel-item-padding-40-px"
      >
        {
           Data.map((val) => (
          <div key={val.id}>
            <div className='testimoni-card-flex'>

              <div className='testimoni-outer'>
                <div className='testimoni-inner'>
                <div className='client-info'>
                 <img src = {val.img_src} className='img-fluid slider-img'/>
                 <div className='d-flex flex-column justify-content-start'>
                 <h5 className='text-heading emp-head'>{val.Name}</h5>
                 <span className='about-para profession'>
                {val.Profession}
                 </span>
                 </div>
                 </div>

                 <div className='client-review'>
                  {val.Review}
                 </div>
                 
                </div>
              </div>
              
            </div>
          </div>
        ))
        }
      </Carousel>
      </div>
    </div>
    </>
  );
};

export default Testimonial;

