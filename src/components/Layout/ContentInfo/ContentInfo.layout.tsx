import { Button, Flex, Input } from "antd";
import styles from "./ContentInfo.module.css";

export const ContentInfo = () => {
  return (
    <>
      <Flex className={styles.contentinfo_container}>
        <h2 style={{ color: "orange" }}>Sneaker company</h2>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer soul, they'll withstand everything
          the weather will offer.
        </p>
        <Flex gap={20}>
          <div>$125.00</div>
          <div>50%</div>
        </Flex>
        <p>$250.00</p>
        <Flex gap={10}>
          <Flex>
            <Button style={{ background: "#f7f7f7", color: "hsl(26, 100%, 55%)" }}>
              -
            </Button>
            <Input
              style={{ background: "#f7f7f7", textAlign: "center" }}
              placeholder="0"
            />
            <Button style={{ background: "#f7f7f7", color: "hsl(26, 100%, 55%)" }}>
              +
            </Button>
          </Flex>
          <Button style={{ width: "100%", background: "hsl(26, 100%, 55%)", color: "#fff" }}>
            Add to cart
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
