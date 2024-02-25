import { Layout } from "antd";
import { HeaderLayout } from "../Header/Header.layout";

export const Wrapper = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderLayout />
      </Layout>
    </>
  );
};
