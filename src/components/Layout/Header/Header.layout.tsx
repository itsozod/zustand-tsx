import { Button, Divider, Layout } from "antd";
import styles from "./Header.layout.module.css";
import { useEffect, useRef, useState } from "react";
import { Modal } from "../../Modal/Modal";
import { useCartStore } from "../../../store";
import { useMediaQuery } from "@uidotdev/usehooks";
import { DrawerContent } from "../../Drawer/Drawer";
import { CartIcon } from "../../../assets/icons/cartIcon";

export const HeaderLayout = () => {
  const { Header } = Layout;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { cart, cartCount } = useCartStore();
  const isSmallDevice = useMediaQuery("only screen and (max-width : 761px)");

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleModal = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsModalOpen(false);
        console.log(modalRef.current);
      }
    };

    document.addEventListener("mousedown", handleModal);

    return () => {
      document.removeEventListener("mousedown", handleModal);
    };
  }, []);

  return (
    <>
      <Header className={styles["header"]}>
        <div className={styles["header-container"]}>
          <div className={styles["collections"]}>
            <div className={styles["nav"]}>
              {isSmallDevice ? <DrawerContent /> : null}
              <h1 className={styles.sneakers}>sneakers</h1>
              <nav className={styles.links_container}>
                <ul>
                  <li>Collections</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
            <div ref={modalRef}>
              <div ref={modalRef} className={styles["card-user"]}>
                <Button
                  onClick={() => handleModal()}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5px",
                    border: "none",
                  }}
                >
                  <CartIcon />
                </Button>

                <img
                  className={styles["avatar_img"]}
                  src="image-avatar.png"
                  alt="Avatar"
                />

                {cart.length > 0 ? (
                  <div className={styles["cart_counter"]}>{cartCount}</div>
                ) : null}
              </div>
              {isModalOpen ? <Modal /> : null}
            </div>
          </div>
          <Divider className={styles.header_divider} />
        </div>
      </Header>
    </>
  );
};
