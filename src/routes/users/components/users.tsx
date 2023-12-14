import { Button, Flex, Popconfirm, Table, Tag, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { timeAgo } from "index";
import React, { useState } from "react";
import { useUser } from "store/users/hook";
import { IUser } from "type/user";

const columns: ColumnsType<IUser> = [{
    title: 'Id',
    dataIndex: 'id',
},
{
    key: 'avatar',
    title: 'Avatar',
    dataIndex: 'avatar',
    render: (_, { avatar }) => <img src={avatar} style={{ width: 30 }} />
},
{
    title: 'Email',
    dataIndex: 'email'
},
{
    key: 'displayName',
    title: 'Name',
    dataIndex: 'displayName'
},
{
    title: 'Role',
    dataIndex: 'role',
    render: (_, { role }) => (role.name),
},
{
    key: 'createdAt',
    title: 'Create at',
    dataIndex: 'createAt',
    render: (_, { createdAt }) => timeAgo.format(new Date(createdAt).getTime())
},
{
    title: 'Update at',
    dataIndex: 'updatedAt',
    render: (_, { updatedAt }) => timeAgo.format(new Date(updatedAt).getTime())
},
{
    title: 'Status',
    dataIndex: 'active',
    render: (_, { active }) => <Tag color={active ? 'success' : 'error'}>{active ? "Active" : "Disabled"}</Tag>
},
]

export const Users = () => {
    const { users, select } = useUser();
    const [selectedRowKeys, setSelectedRowKeys] = useState<Array<React.Key>>([]);

    console.log(selectedRowKeys)

    return <>
        <Flex>
            <Typography.Title level={5}>Selected {selectedRowKeys.length} user</Typography.Title>
            <Popconfirm title={`Disable ${selectedRowKeys.length} accounts`} okType="danger" disabled={!selectedRowKeys.length} placement="bottomLeft" okText="Disable">
                <Button type="primary" danger style={{ marginLeft: 20 }} size="small">Disable</Button>
            </Popconfirm>
        </Flex>
        <Table<IUser>
            style={{ marginTop: 10 }}
            rowSelection={{
                type: 'checkbox',
                getCheckboxProps: (data) => {
                    return data;
                },
                onChange(selectedRowKeys, selectedRows, info) {
                    setSelectedRowKeys(selectedRowKeys)
                },
            }}
            onRow={(e: IUser) => {
                return {
                    onClick: () => select(e)
                }
            }} tableLayout="auto" size="large" dataSource={users} bordered={true}
            columns={columns} rowKey={(record) => record.id}
        />
    </>
}