import { Button, Col, ColorPicker, Form, Input, Modal, Popconfirm, Row, Select, Tag, Typography } from "antd";
import React, { useEffect, useMemo, useState } from "react"
import { useTags } from "store/tag/hook"
import { FetchStatus } from "type/FetchStatus";
import { SketchPicker } from 'react-color';
import { PlusCircleFilled } from "@ant-design/icons";
import { CreateTagFrom } from "./tag_form";

export type TagInputProps = {
  onChange?: (e: { key: string, value: string }) => void;
}

export const TagInput: React.FC<TagInputProps> = (props) => {

  const [value, setValue] = useState({
    key: "",
    value: "",
  });
  const [search, setSearch] = useState("");
  const tag = useTags();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    value.key && value.value && props.onChange && props.onChange(value);
  }, [value])

  const isNewTag = useMemo(() => !tag.fetch.result.find(value => value.key === search), [search, tag.fetch.result])

  const selectTag = () => {
    return <Select
      autoFocus
      showSearch={true}
      onSearch={(e) => setSearch(e)}
      style={{ minWidth: 150 }}
      value={value.key}
      loading={tag.fetch.status === FetchStatus.Loading}
      onChange={(e) => {
        if (e === search && isNewTag) {
          form.setFieldsValue({
            key: search,
            color: "#3f3f3f3f",
            description: "New tag"
          })
          setOpen(true)
          return;
        };
        setValue({ ...value, key: e })
      }}>
      {tag.fetch.result.map(data => (<Select.Option value={data.key}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {data.key}
          <div style={{ width: 10, height: 10, backgroundColor: data.color, borderRadius: 100 }}></div>
        </div>
      </Select.Option>))}
      {
        search && !tag.fetch.result.find(value => value.key === search) ?
          <Select.Option value={search} onSelect={(e: any) => console.log(e)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
              {search || ""}
              <div style={{ width: 10, height: 10, backgroundColor: "#3f3f3f3f", borderRadius: 100 }} id="color"></div>
            </div>
          </Select.Option>
          : null
      }
    </Select >
  }

  return <>
    <Input addonBefore={selectTag()} onChange={(e) => setValue({ ...value, value: e.target.value })} />
    <Modal title="Create Tag" open={open} onCancel={() => setOpen(false)} okText="Create" onOk={() => form.submit()}>
      <CreateTagFrom
        form={form}
        initialValues={{
          key: search,
          color: "#3f3f3f3f",
          description: "New tag"
        }}
        onCreated={() => {
          setOpen(false)
          setValue({ ...value, key: search })
        }} />
    </Modal>
  </>
}