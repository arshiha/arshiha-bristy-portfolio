import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import porfilePic1 from "../../img/profile1.jpg";
import porfilePic2 from "../../img/profile2.jpg";
import porfilePic3 from "../../img/profile3.jpg";
import porfilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  const clients = [
    {
      img: porfilePic1,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus illum distinctio aspernatur soluta repellat fuga, ea odit voluptatibus et deserunt mollitia, consequuntur possimus ex est ipsa commodi sed consequatur doloremque!",
    },
    {
      img: porfilePic2,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus illum distinctio aspernatur soluta repellat fuga, ea odit voluptatibus et deserunt mollitia, consequuntur possimus ex est ipsa commodi sed consequatur doloremque!",
    },
    {
      img: porfilePic3,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus illum distinctio aspernatur soluta repellat fuga, ea odit voluptatibus et deserunt mollitia, consequuntur possimus ex est ipsa commodi sed consequatur doloremque!",
    },
    {
      img: porfilePic4,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus illum distinctio aspernatur soluta repellat fuga, ea odit voluptatibus et deserunt mollitia, consequuntur possimus ex est ipsa commodi sed consequatur doloremque!",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>From me...</span>
        <div className="blur t-blur1" style={{ background: "purple" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider  */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
