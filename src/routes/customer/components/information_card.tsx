import { EditOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Row, Avatar, Typography, Statistic, Divider, Form, Input, DatePicker, Button, Select } from "antd";
import form from "antd/es/form";
import { DebounceSelect } from "components/debounce_select";
import React, { useState } from "react";
import address from "service/address";
import { useAddress } from "store/address/hook";
import { FetchStatus } from "type/FetchStatus";
import { ICustomer } from "type/customer";

export const InformationCard: React.FC<{ data: ICustomer }> = ({ data }) => {

    const address = useAddress();
    const [form] = Form.useForm();
    const [change, setChange] = useState(false);

    const prefixSelector = (
        <Form.Item name="extension" noStyle initialValue={"+84"}>
            <Select style={{ width: 100 }}>
                <Select.Option value="+84">🇻🇳 +84 </Select.Option>
            </Select>
        </Form.Item>
    );



    return <Card>
        <Row justify="center">
            <Avatar src="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/images/avatars/avatar-1.png" style={{ width: 100, height: 100 }}></Avatar>
        </Row>
        <Row justify="center" style={{ marginTop: 10 }}>
            <Typography.Title level={4}>
                {data.name}
            </Typography.Title>
        </Row>
        <Row justify="space-between" style={{ marginTop: 10 }}>
            <Statistic title="Join date" value="365" />
            <Statistic title="Total buy" value="159" />
            <Statistic title="Total payment" value="2003$" />
        </Row>
        <Divider />
        <Form form={form} initialValues={data} layout='vertical' onChange={() => setChange(true)}>
            <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Enter customer name" }]}
            >
                <Input placeholder="Enter customer name" suffix={<UserOutlined />} />
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
                <Input placeholder="Enter customer email" suffix={<MailOutlined />} />
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
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} suffix={<PhoneOutlined />} />
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
                initialValue={data.address?.metadata.name}
            >
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
                />
            </Form.Item>
            <Form.Item name="note" label="Note">
                <Input.TextArea placeholder="Customer note" />
            </Form.Item>
            <Row justify="end">
                <Button type='primary' htmlType='submit' disabled={!change}>Save</Button>
            </Row>
        </Form>
    </Card>
}