import { Drawer, Flex } from "antd";

export const DrawerContent = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      <Drawer
        open={open}
        onClose={onClose}
        placement="left"
        title={null}
        footer={null}
        styles={{
          body: { padding: 0 },
          header: { borderBottom: "none", padding: "16px 26px" },
        }}
      >
        <Flex vertical={true} justify="start" align="start" style={{marginTop: "15px"}}>
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
