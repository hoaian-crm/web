import { SendOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { useMail, useTemplate } from "store/mail";
import { IMail } from "type/email";

export const SendMail = () => {
  const { create } = useMail();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState<IMail>({
    to: "",
    subject: "",
    template: "",
    context: {},
  });
  const { result: templates } = useTemplate();
  const onSubmit = () => {
    create(input);
  };

  const renderContext = () => {
    const currentTemplate = templates.find(
      (template) => template.name === input.template
    );
    if (!currentTemplate || !currentTemplate.context) return null;
    const context = currentTemplate.context;
    return Object.keys(context).map((fieldName) => (
      <Form.Item name={["context", fieldName]} label={fieldName}>
        <Input placeholder={`Enter ${fieldName}`} />
      </Form.Item>
    ));
  };

  return (
    <>
      <Button
        style={{ marginBottom: 20 }}
        type="primary"
        onClick={() => setOpen(true)}
      >
        SendMail {<SendOutlined />}
      </Button>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        onOk={onSubmit}
        okText="Send"
        closeIcon={null}
      >
        <Form
          layout="vertical"
          onValuesChange={(e) => {
            setInput({ ...input, ...e });
          }}
        >
          <Form.Item
            label="Email"
            rules={[{ type: "email", required: true }]}
            name="to"
          >
            <Input placeholder="Enter email to send" />
          </Form.Item>
          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter subject to send" />
          </Form.Item>
          <Form.Item label="Template" name="template">
            <Select
              placeholder="Choose one template"
              options={templates.map((template) => ({
                value: template.name,
                label: template.name,
                describe: template.description,
              }))}
            />
          </Form.Item>
          {renderContext()}
        </Form>
      </Modal>
    </>
  );
};
