import { Flex } from "antd";
import { SwiperContent } from "../../Swiper/Swiper";
import styles from "./Content.module.css";

export const Content = () => {
  return (
    <>
      <Flex className={styles.content_container}>
        <Flex
          className={styles.content_holder}
          justify="center"
          align="center"
          style={{ width: "100%" }}
        >
          <SwiperContent />
        </Flex>
      </Flex>
    </>
  );
};
