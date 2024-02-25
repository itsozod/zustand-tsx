// import styles from "./Swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";

export const SwiperContent = () => {
  return (
    <>
      <div style={{ display: "flex", width: "500px" }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          mousewheel={{
            releaseOnEdges: true,
            thresholdDelta: 1,
            thresholdTime: 1,
            sensitivity: 1,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              style={{ maxWidth: "100%" }}
              src="image-product-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ maxWidth: "100%" }}
              src="image-product-2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ maxWidth: "100%" }}
              src="image-product-3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ maxWidth: "100%" }}
              src="image-product-4.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
