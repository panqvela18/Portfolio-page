import React, { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";
import { projectData } from "./Data";
import "./ProjectSlider.css";
// import { Link } from "react-router-dom";

export default forwardRef(function ProjectsSlider({}, ref) {
  return (
    <>
      <div ref={ref} style={{ scrollMargin: "68px" }}>
        <Swiper
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          autoplay={true}
          grabCursor={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mobile-swiper "
        >
          {projectData.map((item) => {
            return (
              <SwiperSlide className="swiper-slide" key={item.id}>
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href={item.link}
                  className="swiper-title"
                >
                  {item.title}
                </a>
                <img className="swiper-image" src={item.img} alt="images" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <Swiper
          effect={"coverflow"}
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
          loop={true}
          pagination={true}
          navigation={true}
          autoplay={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="fullscreen-swiper"
        >
          {projectData.map((item) => {
            return (
              <SwiperSlide className="swiper-slide" key={item.id}>
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href={item.link}
                  className="swiper-title"
                >
                  {item.title}
                </a>
                <img className="swiper-image" src={item.img} alt="images" />
              </SwiperSlide>
            );
          })}
        </Swiper> */}
        <div className="test">
          <Swiper
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            autoplay={true}
            slidesPerView="2"
            spaceBetween={10}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className="fullscreen-swiper"
          >
            {projectData.map((item) => {
              return (
                <SwiperSlide className="swiper-slide" key={item.id}>
                  <a
                    target={"_blank"}
                    rel="noopener noreferrer"
                    href={item.link}
                    className="swiper-title"
                    data-swiper-parallax="-300"
                  >
                    {item.title}
                  </a>
                  <img
                    className="swiper-image"
                    data-swiper-parallax="-200"
                    src={item.img}
                    alt="images"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
});
