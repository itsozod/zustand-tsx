import { Button, Divider, Flex, Typography } from "antd";
import styles from "./Modal.module.css";
import { useCartStore } from "../../store";
import { DeleteIcon } from "../../assets/icons/deleteIcon";

export const Modal = () => {
  const {
    cart,
    cartCount,
    cartCountResult,
    deleteFromCart,
    setCartCount,
    setCartCountResult,
  } = useCartStore();
  return (
    <>
      <div className={styles.modal_container}>
        <Typography.Title level={5}>Cart</Typography.Title>
        <Divider style={{ margin: 0 }}></Divider>

        {cart.length === 0 && (
          <Flex style={{ marginTop: "7px" }} justify="center" align="center">
            <h3>Your cart is empty</h3>
          </Flex>
        )}
        {cart?.map((cartItem) => {
          return (
            <div className={styles["cart_container"]}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={cartItem.images[0]}
                  alt={cartItem.title}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      height: 0,
                      marginBottom: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {cartItem.title}
                  </div>
                  <div>
                    $125.00 x {cartCount} ${cartCountResult}
                  </div>
                </div>
              </div>
              <Button
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                }}
                onClick={() => {
                  deleteFromCart(cartItem);
                  setCartCount(0);
                  setCartCountResult(0);
                }}
              >
                <DeleteIcon />
              </Button>
            </div>
          );
        })}
        {cart.length > 0 ? (
          <Button
            style={{
              background: "hsl(26, 100%, 55%)",
              color: "#fff",
            }}
          >
            Cashout
          </Button>
        ) : null}
      </div>
    </>
  );
};
