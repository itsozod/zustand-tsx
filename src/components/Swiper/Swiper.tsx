import styles from "./Swiper.module.css";
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
import { Button, Flex, Input } from "antd";
import { useCartStore } from "../../store";

const product = [
  {
    id: 1,
    images: [
      "image-product-1.jpg",
      "image-product-2.jpg",
      "image-product-3.jpg",
      "image-product-4.jpg",
    ],
    img: "image-product-1.jpg",
    title: "Fall Limited Edition Sneakers",
  },
];

export const SwiperContent = () => {
  const { addToCart } = useCartStore();
  return (
    <>
      <div
        className={styles.swiper_holder}
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        {product.map((product) => (
          <>
            <div style={{ width: "400px" }}>
              <Swiper
                key={product.id}
                style={{ borderRadius: "12px" }}
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
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img style={{ maxWidth: "100%" }} src={image} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <Flex className={styles.contentinfo_container}>
              <h2 style={{ color: "orange" }}>Sneaker company</h2>
              <h1>{product.title}</h1>
              <p>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer soul, they'll
                withstand everything the weather will offer.
              </p>
              <Flex gap={20}>
                <div>$125.00</div>
                <div>50%</div>
              </Flex>
              <p>$250.00</p>
              <Flex gap={10}>
                <Flex>
                  <Button
                    style={{
                      background: "#f7f7f7",
                      color: "hsl(26, 100%, 55%)",
                    }}
                  >
                    -
                  </Button>
                  <Input
                    style={{ background: "#f7f7f7", textAlign: "center" }}
                    placeholder="0"
                  />
                  <Button
                    style={{
                      background: "#f7f7f7",
                      color: "hsl(26, 100%, 55%)",
                    }}
                  >
                    +
                  </Button>
                </Flex>
                <Button
                  onClick={() => addToCart(product)}
                  style={{
                    width: "100%",
                    background: "hsl(26, 100%, 55%)",
                    color: "#fff",
                  }}
                >
                  Add to cart
                </Button>
              </Flex>
            </Flex>
          </>
        ))}
      </div>
    </>
  );
};
