import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Modal, TagProps } from "antd";
import { CreateTagFrom } from "components/tag_form";
import React, { useState } from "react";
import { ITag } from "type/tag";

export type TagCardProps = {
  data: ITag;
} & TagProps;

export const TagCard: React.FC<TagCardProps> = (props) => {

  const [open, setOpen] = useState(false);


  return (
    <>
      <Card
        {...props}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" onClick={() => setOpen(true)} />,
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
      <Modal onCancel={() => setOpen(false)} open={open}>
        <CreateTagFrom initialValues={props.data} action="update" />
      </Modal>
    </>
  );
};
