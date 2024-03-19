import { Button, Flex, Input } from "antd";
import { useCallback, useEffect, useState } from "react";
import styles from "./Swiper.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { CartItem, useCartStore } from "../../store";

const products = [
  {
    id: 1,
    images: [
      "image-product-1.jpg",
      "image-product-2.jpg",
      "image-product-3.jpg",
      "image-product-4.jpg",
    ],
    title: "Fall Limited Sneakers",
  },
];

export const SwiperContent = () => {
  const { addToCart, cart } = useCartStore();
  const [emblaRef, emblaRefApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log("Cart", cart);

  const handleCart = (product: CartItem) => {
    const checkCart = cart.some((cartItem) => cartItem.id === product.id);
    if (!checkCart) {
      addToCart(product);
    }
  };

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaRefApi || !emblaThumbsApi) return;
      emblaRefApi.scrollTo(index);
    },
    [emblaRefApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaRefApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaRefApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaRefApi.selectedScrollSnap());
  }, [emblaRefApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaRefApi) return;
    onSelect();
    emblaRefApi.on("select", onSelect);
    emblaRefApi.on("reInit", onSelect);
  }, [emblaRefApi, onSelect]);
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
        {products.map((product) => {
          return (
            <>
              <div style={{ width: "100%", maxWidth: "400px" }}>
                <div
                  className={styles.embla}
                  ref={emblaRef}
                  style={{ borderRadius: "12px" }}
                >
                  <div className={styles.embla__container}>
                    {product.images.map((imgs, i) => {
                      return (
                        <div key={i} className={styles.embla__slide}>
                          <img
                            style={{
                              width: "100%",
                            }}
                            src={imgs}
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* // thumbs */}
                <div className={styles.embla__thumbs}>
                  <div
                    className={styles.embla__thumbs__viewport}
                    ref={emblaThumbsRef}
                  >
                    <div className={styles.embla__thumbs__container}>
                      {product.images.map((img, i) => {
                        return (
                          <div
                            onClick={() => onThumbClick(i)}
                            key={i}
                            className={styles.embla__thumbs__slide}
                          >
                            <img
                              style={{
                                width: "100%",
                                borderRadius: "12px",
                                border:
                                  i === selectedIndex
                                    ? "2px solid orange"
                                    : "none",
                                opacity: i === selectedIndex ? "0.4" : "1",
                              }}
                              src={img}
                              alt=""
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* product */}

              <Flex className={styles.contentinfo_container}>
                <h2 style={{ color: "orange" }}>Sneaker company</h2>
                <h1>{product.title}</h1>
                <h1>Fall Limited Sneakers</h1>
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
                    onClick={() => handleCart(product)}
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
          );
        })}
      </div>
    </>
  );
};
