import { Divider, Flex, Typography } from "antd";
import styles from "./Modal.module.css";
import { useCartStore } from "../../store";

export const Modal = () => {
  const { cart } = useCartStore();
  console.log("Cart", cart);
  return (
    <>
      <div className={styles.modal_container}>
        <Typography.Title level={5}>Cart</Typography.Title>
        <Divider style={{ margin: 0 }}></Divider>

        {cart.length === 0 && (
          <Flex
            style={{ width: "100%", marginTop: "7px" }}
            justify="center"
            align="center"
          >
            <h3>Your cart is empty</h3>
          </Flex>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "7px",
          }}
        >
          {cart?.map((cartItem) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={cartItem.img}
                  alt={cartItem.title}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ height: 0, marginBottom: "20px" }}>
                    {cartItem.title}
                  </div>
                  <div>$125.00 x 1 $125.00</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
