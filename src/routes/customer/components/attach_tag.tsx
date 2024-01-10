import { TagOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import { TagInput } from "components/tag_input";
import React, { useState } from "react";
import { useCustomers } from "store/customers/hook";
import { useTags } from "store/tag/hook";

export const AttachTagCustomers = () => {
  const { selectedCustomer, reload } = useCustomers();
  const {attachTag} = useTags();
  const [tag, setTag] = useState({
    key: "",
    value: ""
  });
  return (
    <Popconfirm
      title={`Assign tag to ${selectedCustomer.length} customer`}
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
      onConfirm={() => attachTag({
        ...tag,
        resource: 'customers',
        resource_ids: selectedCustomer,
      }).then(() => reload())}
    >
      <Button
        icon={<TagOutlined />}
        disabled={selectedCustomer.length === 0}
        size="small"
        shape="circle"
        type="primary"
      />
    </Popconfirm>
  );
};
