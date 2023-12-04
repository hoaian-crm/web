import { List } from 'antd';
import React, { useEffect } from 'react';
import { useTemplate } from 'store/mail';
import { FetchStatus } from 'type/api.d';
import { CreateTemplate } from './create_template';
import { Template } from './template';

export const Templates = () => {

    const { result, fetch, status } = useTemplate();

    useEffect(() => {
        if (status == FetchStatus.NoAction) {
            fetch({ limit: "10" })
        }
    }, [])

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