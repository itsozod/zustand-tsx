import { Divider, Flex, Typography } from "antd";
import styles from "./Modal.module.css";

export const Modal = ({ open, ref }) => {
  return (
    <div
      ref={ref}
      className={styles.modal_container}
      style={{ display: open ? "none" : "flex" }}
    >
      <Typography.Title level={5}>Cart</Typography.Title>
      <Divider style={{ margin: 0 }}></Divider>
      <Flex
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "188px",
        }}
      >
        <h3>Your cart is empty</h3>
      </Flex>
    </div>
  );
};
