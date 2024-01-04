import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { useMail } from "store/mail";
import { FetchStatus } from "type/FetchStatus";
import { IMail } from "type/email";

export const CreateMail = () => {
  const [input, setInput] = useState<IMail>({
    to: "",
    subject: "",
    html: "",
  });
  const [form] = Form.useForm();

  const [open, setOpen] = useState(false);
  const { create, createStatus } = useMail();

  const onSubmit = async () => {
    await create(input);
    if (createStatus === FetchStatus.Success) {
      setOpen(false);
      form.resetFields();
    }
  };

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        size="small"
        onClick={() => setOpen(true)}
      />
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        closeIcon={null}
        onOk={onSubmit}
        confirmLoading={createStatus === FetchStatus.Loading}
      >
        <Typography.Title
          level={5}
          style={{ textAlign: "center", marginBottom: 20 }}
        >
          Send email to user
        </Typography.Title>
        <Form
          onChange={(e: any) => {
            setInput({
              ...input,
              [e.target.id]: e.target.value,
            });
          }}
          layout="vertical"
          form={form}
        >
          <Form.Item
            rules={[{ type: "email", message: "Please input valid email" }]}
            label="Email"
            name="to"
          >
            <Input placeholder="Email to send" />
          </Form.Item>
          <Form.Item
            label="Subject"
            rules={[{ required: true }]}
            name="subject"
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item label="Content" rules={[{ required: true }]} name="html">
            <TextArea placeholder="Content of email (should be an html)" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
