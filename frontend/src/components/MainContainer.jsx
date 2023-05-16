import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import HOME1 from "../img/home-1.png";
import HOME2 from "../img/home-2.png";
import HOME3 from "../img/home-3.png";
import FeaturedProducts from "./FeaturedProducts";

const MainContainer = () => {
  return (
    <div className="pt-24 md:pt-32">
      <Swiper
        navigation={false}
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <div>
            <img src={HOME1} alt="home1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={HOME2} alt="home2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={HOME3} alt="home3" />
          </div>
        </SwiperSlide>
      </Swiper>

      <FeaturedProducts />
    </div>
  );
};

export default MainContainer;
