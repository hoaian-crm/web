import { ColorPicker, Form, FormProps, Input } from "antd";
import React from "react";
import { useTags } from "store/tag/hook";
import { ITag } from "type/tag";


export type CreateTagForm = FormProps & { action?: "create" | "update", onCreated?: (result?: ITag) => void };

export const CreateTagFrom: React.FC<CreateTagForm> = ({ action = "create", ...props }) => {

    const tag = useTags();

    return <Form<ITag> {...props} layout="vertical" onFinish={(value) => {
        if (action === 'create') {
            tag.createTag(value).then(() => {
                props.onCreated && props.onCreated(tag.create.result)
            })
        }
    }}>
        <Form.Item name="key" rules={[{ required: true }]} label="Key">
            <Input placeholder="Enter tag key" />
        </Form.Item>
        <Form.Item name="color" rules={[{ required: true }]} label="Color" getValueFromEvent={(e) => e.toRgbString()}>
            <ColorPicker format="hex" />
        </Form.Item>
        <Form.Item name="description" rules={[{ required: true }]} label="Description">
            <Input placeholder="Enter tag description" />
        </Form.Item>
    </Form>
}