import { Divider, Layout } from "antd";
import styles from "./Header.layout.module.css";
import { useEffect, useRef, useState } from "react";
import { Modal } from "../../Modal/Modal";

export const HeaderLayout = () => {
  const { Header } = Layout;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const showModal = () => {
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
              <h1>sneakers</h1>
              <nav>
                <ul>
                  <li>Collections</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
            <div ref={modalRef} className={styles["card-user"]}>
              <svg
                onClick={() => showModal()}
                style={{ cursor: "pointer" }}
                width="22"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fillRule="nonzero"
                />
              </svg>

              <img style={{ width: 40 }} src="image-avatar.png" alt="Avatar" />
              {isModalOpen ? <Modal /> : null}
            </div>
          </div>
          <Divider style={{ margin: 0 }} />
        </div>
      </Header>
    </>
  );
};
