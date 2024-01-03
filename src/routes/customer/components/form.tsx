import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { DebounceSelect } from "components/debounce_select";
import React, { useState } from "react";
import { useAddress } from "store/address/hook";
import { FetchStatus } from "type/api.d";

export const CreateCustomerForm = () => {
  const [open, setOpen] = useState(false);
  const address = useAddress();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Select.Option value="86">+84</Select.Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <Button
        size="small"
        shape="circle"
        icon={<PlusOutlined />}
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      />
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        title="Create customer"
        okText="Create"
      >
        <Form layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Enter customer name" }]}
          >
            <Input placeholder="Enter customer name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Enter customer email",
              },
            ]}
          >
            <Input placeholder="Enter customer email" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your customer phone number!",
              },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="dob"
            label="Day of birth"
            rules={[{ required: true }]}
          >
            <DatePicker name="date-picker" />
          </Form.Item>
          <Form.Item
            name="placeId"
            label="Address"
            rules={[{ required: true }]}
          >
            {/* <Input /> */}
            <DebounceSelect
              debounceTimeOut={3000}
              onSearch={(value: string) => {
                address.search({ input: value });
              }}
              fetching={address.autoComplete.status === FetchStatus.Loading}
              options={address.autoComplete.result.map((data) => ({
                label: data.description,
                value: data.place_id,
              }))}
              onChange={(e) => console.log("value: ", e)}
            />
          </Form.Item>
          <Form.Item name="note" label="Note">
            <Input.TextArea placeholder="Customer note" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
