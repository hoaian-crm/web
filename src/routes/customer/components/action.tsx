import { EditOutlined, TagOutlined } from "@ant-design/icons";
import { Button, Col, Popconfirm, Row } from "antd";
import { TagInput } from "components/tag_input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTags } from "store/tag/hook";
import { ICustomer } from "type/customer";

export const CustomerAction = ({ data }: { data: ICustomer }) => {
  const navigate = useNavigate();
  const [tag, setTag] = useState({
    key: "",
    value: "",
  });
  const tags = useTags();

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
          title="Assign Tag"
          trigger="click"
          okType="primary"
          icon={null}
          okText="Assign"
          description={
            <TagInput
              onChange={(value) => {
                setTag(value);
              }}
            />
          }
          onConfirm={() => {
            tags.attachTag({
              ...tag,
              resource: "customers",
              resource_id: data.id.toString(),
            });
          }}
        >
          <Button
            size="small"
            icon={<TagOutlined />}
            type="primary"
            shape="circle"
          />
        </Popconfirm>
      </Col>
    </Row>
  );
};
