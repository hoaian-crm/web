import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Form, Input, Select, DatePicker, AutoComplete } from "antd";
import React, { useState } from 'react';



export const CreateCustomerForm = () => {
    const [open, setOpen] = useState(false);


    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Select.Option value="86">+84</Select.Option>
            </Select>
        </Form.Item>
    );


    return <>
        <Button size='small' shape='circle' icon={<PlusOutlined />} type='primary' onClick={() => { setOpen(true); }} />
        <Modal open={open} onCancel={() => setOpen(false)} title="Create customer" okText="Create">
            <Form layout="vertical">
                <Form.Item
                    name="name" label="Name"
                    rules={[{ required: true, message: "Enter customer name" }]}>
                    <Input placeholder="Enter customer name" />
                </Form.Item>
                <Form.Item
                    name="email" label="Email"
                    rules={[{ type: "email", required: true, message: "Enter customer email" }]}>
                    <Input placeholder="Enter customer email" />
                </Form.Item>
                <Form.Item
                    name="phone" label="Phone Number"
                    rules={[{ required: true, message: 'Please input your customer phone number!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="dob" label="Day of birth" rules={[{ required: true }]}>
                    <DatePicker name="date-picker" />
                </Form.Item>
                <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                    <AutoComplete options={[{ value: 'Home 52' }, { value: "test home" }]}>
                        <Input />
                    </AutoComplete>
                </Form.Item>
                <Form.Item name="note" label="Note">
                    <Input.TextArea placeholder="Customer note" />
                </Form.Item>
            </Form>
        </Modal>
    </>;
};
