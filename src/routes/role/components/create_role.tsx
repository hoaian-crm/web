import { PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input, Modal } from "antd"
import React, { useState } from "react"
import { useRole } from "store/roles/hook"
import { IRole } from "type/role"

export const CreateRole = () => {

    const { create } = useRole();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState<IRole>({
        name: "",
        description: ""
    })
    const onSubmit = async () => {
        await create(input)
        setOpen(false)
    }

    return <>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setOpen(true)}>Create role</Button>
        <Modal open={open} onOk={onSubmit} onCancel={() => setOpen(false)} title={"Create new role"}>
            <Form layout="vertical" onValuesChange={(_, values) => setInput(values)}>
                <Form.Item name={"name"} label="Role name" rules={[{ required: true }]}>
                    <Input placeholder="Enter role name" />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input placeholder="Enter role description" />
                </Form.Item>
            </Form>
        </Modal>
    </>
}