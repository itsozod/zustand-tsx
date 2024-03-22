import { Button, Drawer, Flex } from "antd";
import { MenuIcon } from "../../assets/icons/menuIcon";
import { useState } from "react";

export const DrawerContent = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <Button
        style={{
          marginTop: "8px",
          display: "flex",
          alignItems: "center",
          border: "none",
        }}
        onClick={() => setDrawer(true)}
      >
        <MenuIcon />
      </Button>
      <Drawer
        open={drawer}
        onClose={() => setDrawer(false)}
        placement="left"
        title={null}
        footer={null}
        styles={{
          body: { padding: 0 },
          header: { borderBottom: "none", padding: "16px 26px" },
        }}
      >
        <Flex
          vertical={true}
          justify="start"
          align="start"
          style={{ marginTop: "15px" }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              gap: "10px",
            }}
          >
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </Flex>
      </Drawer>
    </>
  );
};
