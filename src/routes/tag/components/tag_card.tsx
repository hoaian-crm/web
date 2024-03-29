import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ExportOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import { Card, Modal, TagProps, Form, Popconfirm } from "antd";
import { CreateTagFrom } from "components/tag_form";
import React, { useState } from "react";
import { useTags } from "store/tag/hook";
import { FetchStatus } from "type/FetchStatus";
import { ITag } from "type/tag";

export type TagCardProps = {
  data: ITag;
} & TagProps;

export const TagCard: React.FC<TagCardProps> = (props) => {

  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const tags = useTags();


  return (
    <>
      <Card
        {...props}
        actions={[
          <EditOutlined key="edit" onClick={() => setOpen(true)} />,
          <Popconfirm title="Do you want to delete this tag" onConfirm={() => tags.deleteTag({ key: props.data.key })}>
            <DeleteOutlined key="setting" />
          </Popconfirm>,
          <ExportOutlined key="ellipsis" />,
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
      <Modal onCancel={() => setOpen(false)}
        open={open}
        onOk={() => form.submit()}
        okText="Update"
        confirmLoading={tags.update.status === FetchStatus.Loading}
      >
        <CreateTagFrom initialValues={props.data} action="update" form={form} onUpdated={() => setOpen(false)} />
      </Modal >
    </>
  );
};
