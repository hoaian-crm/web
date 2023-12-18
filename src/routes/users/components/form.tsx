import { Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useUser } from "store/users/hook";
import { IUser } from "type/user";

export const UserForm = () => {

    const { selectedUser, deselect } = useUser();
    const [input, setInput] = useState<Partial<IUser>>();
    const [form] = Form.useForm();

    useEffect(() => {
        setInput(selectedUser || {});
        form.setFieldsValue(selectedUser)
    }, [selectedUser])

    const onSubmit = () => {
        if (!input?.id) {
            // TODO: Create user
        }
        // TODO: Update user;
    }



    return <Modal open={!!selectedUser} onCancel={deselect}>
        <Form onValuesChange={e => setInput({ ...input, ...e })} form={form}>
            <Form.Item name="displayName" label="Username">
                <Input placeholder="Enter user name" />
            </Form.Item>
            <Form.Item name={["role", "name"]} label="Role">
                <Input placeholder="Enter new role" />
            </Form.Item>
        </Form>
    </Modal>
}