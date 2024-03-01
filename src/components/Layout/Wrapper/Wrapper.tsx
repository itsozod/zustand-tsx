import { Layout } from "antd";
import { HeaderLayout } from "../Header/Header.layout";
import { Content } from "../Content/Content.layout";

export const Wrapper = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh", background: "#fff" }}>
        <HeaderLayout />
        <Content />
      </Layout>
    </>
  );
};
