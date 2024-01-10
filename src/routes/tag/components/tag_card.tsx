import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, TagProps } from "antd";
import React from "react";
import { ITag } from "type/tag";

export type TagCardProps = {
  data: ITag;
} & TagProps;

export const TagCard: React.FC<TagCardProps> = (props) => {
  return (
    <Card
      {...props}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Card.Meta
        avatar={
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 1000,
              backgroundColor: props.data.color,
            }}
          />
        }
        title={props.data.key}
        description={props.data.description}
      />
    </Card>
  );
};
