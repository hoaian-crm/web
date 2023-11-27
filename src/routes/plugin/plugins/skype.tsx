import { FontColorsOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import React, { useEffect, useState } from "react";
import { usePlugin } from 'store/plugins';
import { IPlugin } from "type/plugin";
import { Plugin } from "../components/plugin";


export const SkypePlugin = () => {
    const { getConfigured } = usePlugin();
    const data = getConfigured('skype');
    const [instance, setInstance] = useState<IPlugin>(data || defaultValue);

    useEffect(() => {
        if (data) setInstance(data);
    }, [data])

    return <Plugin data={instance} configured={!!data}>
        <Form
            initialValues={instance.config}
            layout='vertical' onChange={(e: any) => {
                setInstance({
                    ...instance,
                    config: {
                        ...instance.config,
                        [e.target.id]: e.target.value
                    }
                })
            }}>
            <Form.Item label="Email" name="user" rules={[{ type: "email", message: "Please input correct email" }]}>
                <Input placeholder='Enter your email to config this plugin' prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input.Password placeholder='Enter your password to config this plugin' prefix={<FontColorsOutlined />} />
            </Form.Item>
        </Form>
    </Plugin >
}


const defaultValue = {
    name: "skype",
    description: "Plugin for send skype message",
    enable: true,
    image: "/images/skype.png",
    permissions: [{
        name: "Send skype message",
        description: "Allow send skype message",
        policy: "skype:create",
        resource: "/skype",
        method: "POST"
    },
    ],
    config: {
        user: "",
        password: "",
    }
}