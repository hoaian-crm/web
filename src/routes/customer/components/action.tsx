import { DeleteOutlined, EditOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Col, Input, Modal, Popconfirm, Row, Space, Typography } from "antd";
import React, { useState } from "react";
import { ICustomer } from "type/customer";


export const CustomerAction = ({ data }: { data: ICustomer }) => {

    const [deleteConfirm, setDeleteConfirm] = useState<string | undefined>(undefined);


    return <Row gutter={[5, 0]}>
        <Col>
            <Button icon={<EditOutlined />} type="primary" shape="circle" />
        </Col>
        <Col>
            <Button icon={<MailOutlined />} type="primary" shape="circle" />
        </Col>
        <Col>
            <Button icon={<DeleteOutlined />} type="primary" danger shape="circle" onClick={() => setDeleteConfirm("")} />
        </Col>
        <Modal
            title={"Do you want to delete this customer?"}
            open={deleteConfirm != undefined}
            onCancel={() => setDeleteConfirm(undefined)}
            onOk={() => {
                if (deleteConfirm === "delete 1 customer to confirm") {
                    console.log("delete action")
                }
            }}>
            <Typography.Text>Type <Typography.Text type="danger">"delete 1 customer to confirm"</Typography.Text></Typography.Text>
            <Input onChange={(e) => setDeleteConfirm(e.target.value)} style={{ marginTop: 20 }} />
        </Modal>
    </Row>
}