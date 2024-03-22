import { Button, Flex, Input } from "antd";
import { CartItem } from "../../store";
import styles from "./ProductInfo.module.css";

type ProductInfoType = {
  product: CartItem;
  onClickPlus: (count: number) => void;
  onClickMinus: (count: number) => void;
  addProduct: (product: CartItem) => void;
  count: string | number;
};

export const ProductInfo = ({
  product,
  onClickPlus,
  onClickMinus,
  addProduct,
  count,
}: ProductInfoType) => {
  return (
    <>
      <Flex className={styles.contentinfo_container}>
        <h2 style={{ color: "orange" }}>Sneaker company</h2>
        <h1>{product.title}</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer soul, they'll withstand everything
          the weather will offer.
        </p>
        <Flex gap={20}>
          <div>$125.00</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "hsl(25, 100%, 94%)",
              color: "hsl(26, 100%, 55%)",
              fontWeight: "bold",
              padding: "2px 8px 2px 8px",
              borderRadius: "8px",
            }}
          >
            50%
          </div>
        </Flex>
        <p
          style={{
            color: "hsl(220, 14%, 75%)",
            textDecoration: "line-through",
          }}
        >
          $250.00
        </p>
        <Flex gap={10} className={styles["buttons_container"]}>
          <Flex>
            <Button
              style={{
                background: "#f7f7f7",
                color: "hsl(26, 100%, 55%)",
              }}
              onClick={() => onClickMinus(Number(count))}
            >
              -
            </Button>
            <Input
              style={{ background: "#f7f7f7", textAlign: "center" }}
              value={count}
              placeholder="0"
            />
            <Button
              style={{
                background: "#f7f7f7",
                color: "hsl(26, 100%, 55%)",
              }}
              onClick={() => onClickPlus(Number(count))}
            >
              +
            </Button>
          </Flex>
          <Button
            onClick={() => addProduct(product)}
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
};
