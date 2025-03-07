import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./CardSwiper.css"; // Add styles

const Homepage = () => {
  const images = [
    
    "product-jpeg.jpg",
    "image2.jpg",
    "image4.jpg",
    "image3.jpg",
    "images (1).jpeg",
  ];

  return (
    <div>
      <div id="homepage">
        <div id="namediv">
          <h1 id="name">
            झिलाई इंडेन ग्रामीण <br></br> वितरक<br></br>
            <button>click</button>
            <button>xlixk</button>
          </h1>
          <img src="images (1) (1).png" alt="logo" id="indaneimage"></img>
        </div>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="swiper-container"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img src={img} alt={`Card ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Homepage;
