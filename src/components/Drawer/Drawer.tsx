import { Drawer } from "antd";

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
        title="Hello World"
      ></Drawer>
    </>
  );
};
