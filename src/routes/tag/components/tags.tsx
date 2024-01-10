import { Space } from "antd";
import React from "react";
import { useTags } from "store/tag/hook";
import { TagCard } from "./tag_card";

export const TagSpace = () => {
  const tags = useTags();

  return (
    <Space wrap>
      {tags.fetch.result.map((tag) => (
        <TagCard data={tag}></TagCard>
      ))}
    </Space>
  );
};
