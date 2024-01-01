import { Row, Space, theme } from "antd";
import React from "react";
import { Customers } from "./components/customers";

const Page = () => {

    const { token } = theme.useToken();

    return <Row style={{ padding: token.padding, width: "100%" }}>
        <Customers />
    </Row >

}

export default Page;