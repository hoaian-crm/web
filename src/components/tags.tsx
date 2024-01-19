import { SwapOutlined } from "@ant-design/icons";
import { Space, Tag } from "antd";
import React from "react";
import { IResourceTag } from "type/tag";

export type TagsProps = {
  data: Array<IResourceTag>;
};

export const Tags: React.FC<TagsProps> = (props) => {
  return (
    <Space wrap>
      {props.data.map((data) => (
        <Tag color={data.tag.color} bordered={false}>
          {data.key}: {data.value}
        </Tag>
      ))}
    </Space>
  );
};
