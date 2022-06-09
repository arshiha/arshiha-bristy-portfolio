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
        "A Post-Implementation Review (PIR) is conducted after completing a project. Its purpose is to evaluate whether project objectives were met, to determine how effectively the project was run, to learn lessons for the future, and to ensure that the organization gets the greatest possible benefit from the project.",
    },
    {
      img: porfilePic2,
      review:
        "While this is one of the most critical requirements when reviewing an employee’s job performance, it’s one of the most difficult to evaluate. For this reason, the words and expressions you use should be carefully chosen. These phrases will be useful to draw on when evaluating a person’s quality of work:",
    },
    {
      img: porfilePic3,
      review:
        "Initiative is an essential trait of high-performing people. Employees with initiative stand out from their peers through their willingness to act without being asked to. Here are some phrases that you can draw on when evaluating and discussing your employees’ levels of initiative",
    },
    {
      img: porfilePic4,
      review:
        "Professionalism is an area that covers a broad range of behaviors and attitudes but also extends to issues such as the way a person dresses and their personal hygiene and tidiness. Examples of performance review phrases that you can draw on to determine the overall professionalism of an employee are given below",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
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
