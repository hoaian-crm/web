import { Space, Typography } from "antd";
import React, { useEffect } from "react";
import { useUser } from "store/users/hook";
import { Users } from "./components/users";

const Page = () => {

    const { fetch, fetchUsersStatus, query, setQuery } = useUser();

    useEffect(() => {
        fetch(query);
    }, [query])


    return <Space style={{ padding: 10, width: "100%" }} direction="vertical">
        <Typography.Title level={3}>User management</Typography.Title>
        <Users />
        {/* <UserForm /> */}
    </Space>
}

export default Page;