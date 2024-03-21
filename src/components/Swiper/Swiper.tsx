import { Button } from "antd";
import { useCallback, useEffect, useState } from "react";
import styles from "./Swiper.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { CartItem, useCartStore } from "../../store";
import { ArrowLeft } from "../../assets/icons/arrowLeft";
import { ArrowRight } from "../../assets/icons/arrowRight";
import { ProductInfo } from "../ProductInfo/ProductInfo";

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
  const [count, setCount] = useState<string | number>("");

  const { addToCart, cart, cartCount, setCartCount, setCartCountResult } =
    useCartStore();
  const [emblaRef, emblaRefApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleCart = (product: CartItem) => {
    const checkCart = cart.some((cartItem) => cartItem.id === product.id);
    const cartCountValue = Number(count) + cartCount;
    const cartCountResult = 125 * cartCountValue;
    console.log(cartCountResult);
    if (!checkCart) {
      setCartCount(cartCountValue);
      addToCart(product);
      setCartCountResult(cartCountResult);
      setCount("");
    } else {
      setCartCount(cartCountValue);
      setCartCountResult(cartCountResult);
      setCount("");
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
              <div
                style={{
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                <div
                  className={styles.embla}
                  ref={emblaRef}
                  style={{ borderRadius: "12px" }}
                >
                  <div className={styles.embla__container}>
                    {product.images.map((imgs, i) => {
                      return (
                        <div key={i} className={styles.embla__slide}>
                          <div>
                            <Button
                              onClick={() => {
                                emblaRefApi?.scrollPrev();
                              }}
                              className={styles.left_arrow}
                            >
                              <ArrowLeft />
                            </Button>
                            <Button
                              onClick={() => {
                                emblaRefApi?.scrollNext();
                              }}
                              className={styles.right_arrow}
                            >
                              <ArrowRight />
                            </Button>
                          </div>
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
              <ProductInfo
                product={product}
                count={count}
                onClickMinus={() => {
                  if (Number(count) > 0) {
                    setCount((prev) => Number(prev) - 1);
                  }
                }}
                onClickPlus={() => setCount((prev) => Number(prev) + 1)}
                addProduct={() => handleCart(product)}
              />
            </>
          );
        })}
      </div>
    </>
  );
};
