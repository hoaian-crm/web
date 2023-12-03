import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { useTemplate } from "store/mail";

export const CreateTemplate = () => {
    const [open, setOpen] = useState(false);
    const { create } = useTemplate();
    const [input, setInput] = useState({
        name: "",
        description: "",
        content: ""
    })

    const textToFile = () => {
        const file = new Blob([input.content], { type: "text/x-handlebars-template	" })
        return file;
    }

    const onSubmit = () => {
        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('description', input.description);
        formData.append('file', textToFile());
        formData.forEach(data => console.log(data))
        create(formData)
    }

    return <>
        <Button type="primary" style={{ marginBottom: 20 }} icon={<PlusOutlined />} onClick={() => setOpen(true)}>
            Create Template
        </Button>
        <Modal open={open} closeIcon={null} okText="Submit" onCancel={() => setOpen(false)} title="Create Template" onOk={onSubmit}>
            <Form layout="vertical" style={{ marginTop: 20 }} onChange={(e: any) => setInput({ ...input, [e.target.id]: e.target.value })}>
                <Form.Item rules={[{ required: true }]} label="Name" name="name">
                    <Input placeholder="Enter your template name" />
                </Form.Item>
                <Form.Item rules={[{ required: true }]} label="Description" name="description">
                    <TextArea placeholder="Description about your template" />
                </Form.Item>
                <Form.Item rules={[{ required: true }]} label="Content" name="content">
                    <TextArea placeholder="<h1>Hello</h1>" />
                </Form.Item>
            </Form>
        </Modal>
    </>

}