
import { EditOutlined, MailOutlined, TagOutlined } from "@ant-design/icons";
import { Button, Col, Popconfirm, Popover, Row } from "antd";
import { TagInput } from "components/tag_input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICustomer } from "type/customer";

export const CustomerAction = ({ data }: { data: ICustomer }) => {
  const navigate = useNavigate();
  const [tag, setTag] = useState({});

  const onAttachTag = () => {

  }

  return (
    <Row gutter={[5, 0]}>
      <Col>
        <Button
          icon={<EditOutlined />}
          type="primary"
          shape="circle"
          size="small"
          onClick={() => navigate(`./${data.id}`)}
        />
      </Col>
      <Col>
        <Popconfirm
          title="Assign Tag" trigger="click" okType="primary"
          icon={null}
          okText="Assign"
          description={
            <TagInput onChange={(value) => { setTag(value) }} />
          }
          onConfirm={() => { console.log("submit: value", tag) }}
        >
          <Button size="small" icon={<TagOutlined />} type="primary" shape="circle" />
        </Popconfirm>
      </Col>
    </Row>
  );
};
