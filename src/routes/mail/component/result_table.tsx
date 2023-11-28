import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { IMail } from "type/email";
import Table from "antd/es/table";
import { useMail } from "store/mail";
import { FetchStatus } from "type/api.d";
import { timeAgo } from "index";
import { Button, Modal } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const ResultTable = () => {
  const { data, status, fetch } = useMail();
  const [html, setHtml] = useState();
  const columns: ColumnsType<IMail> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Send to",
      dataIndex: "to",
      key: "to",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Send at",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => timeAgo.format(new Date(text).getTime()),
    },
    {
      title: "Content",
      dataIndex: "html",
      key: "html",
      render: (html) => (
        <Button onClick={() => setHtml(html)}>
          <EyeOutlined />
        </Button>
      ),
      align: "center",
    },
  ];

  useEffect(() => {
    if (status === FetchStatus.NoAction) fetch({ limit: "10", keyword: "" });
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={data.result}
        loading={
          status === FetchStatus.Loading || status === FetchStatus.NoAction
        }
        pagination={{
          total: +data.total,
        }}
        bordered={true}
      />
      <HtmlModal
        open={!!html}
        footer={null}
        closeIcon={null}
        onCancel={() => setHtml(undefined)}
        width={"fit-content"}
      >
        <div
          dangerouslySetInnerHTML={{ __html: html || "" }}
          style={{ borderRadius: 20 }}
        ></div>
      </HtmlModal>
    </>
  );
};

const HtmlModal = styled(Modal)`
  padding: 0;
  .ant-modal-content {
    padding: 0;
    border-radius: 20px;
    overflow: hidden;
  }
`;
