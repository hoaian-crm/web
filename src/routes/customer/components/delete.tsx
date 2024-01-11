import { DeleteOutlined } from "@ant-design/icons";
import { Button, Modal, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useCustomers } from "store/customers/hook";
import { FetchStatus } from "type/FetchStatus";

export const DeleteCustomer = () => {
  const [open, setOpen] = useState(false);
  const { selectedCustomer, removeSelected, deleteCustomer } = useCustomers();
  useEffect(() => {
    if (deleteCustomer.status !== FetchStatus.Loading) setOpen(false);
  }, [deleteCustomer.status])
  return (
    <>
      <Button
        danger
        type="primary"
        icon={<DeleteOutlined />}
        onClick={() => setOpen(true)}
        size="large"
        disabled={!selectedCustomer.length}
      >Delete Customer</Button>
      <Modal
        title="Delete customer"
        okButtonProps={{ danger: true, type: "primary" }}
        okText="Delete"
        onCancel={() => setOpen(false)}
        onOk={() => {
          removeSelected().then(() => setOpen(false));
        }}
        open={open}
        confirmLoading={deleteCustomer.status === FetchStatus.Loading}
      >
        <Typography.Text>
          Do you want to delete{" "}
          <Typography.Text strong>{selectedCustomer.length}</Typography.Text>{" "}
          customer ?{" "}
        </Typography.Text>
      </Modal>
    </>
  );
};
