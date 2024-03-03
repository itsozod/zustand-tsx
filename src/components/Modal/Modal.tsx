import { Divider, Flex, Typography } from "antd";
import styles from "./Modal.module.css";

export const Modal = () => {
  return (
    <>
      <div className={styles.modal_container}>
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
    </>
  );
};
