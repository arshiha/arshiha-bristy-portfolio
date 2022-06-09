import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar (3).jpg";
import Ecommerce from "../../img/ecommerce (2).jpg";
import HOC from "../../img/musicapp.jpg";
import MusicApp from "../../img/hoc.jpg";
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
