import { List } from 'antd';
import React from 'react';
import { useTemplate } from 'store/mail';
import { CreateTemplate } from './create_template';
import { Template } from './template';

export const Templates = () => {

    const { result } = useTemplate();


    return <div>
        <CreateTemplate />
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 5,
            }}
            dataSource={result} renderItem={(item) =>
            (
                <List.Item>
                    <Template data={item} />
                </List.Item>
            )
            } />
    </div>

}