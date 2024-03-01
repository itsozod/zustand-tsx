import { Flex } from "antd";
import { SwiperContent } from "../../Swiper/Swiper";
import { ContentInfo } from "../ContentInfo/ContentInfo.layout";
import styles from "./Content.module.css";

export const Content = () => {
  return (
    <>
      <Flex className={styles.content_container}>
        <Flex justify="space-around" align="center" style={{ width: "100%" }}>
          <SwiperContent />
          <ContentInfo />
        </Flex>
      </Flex>
    </>
  );
};
