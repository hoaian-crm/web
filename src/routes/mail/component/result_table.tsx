import { EyeOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import Table from "antd/es/table";
import { timeAgo } from "index";
import React, { useState } from "react";
import { useMail } from "store/mail";
import styled from "styled-components";
import { FetchStatus } from "type/FetchStatus";
import { IMail } from "type/email";
import { SendMail } from "./send_mail";

export const ResultTable = () => {
  const { result, status, total } = useMail();
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

  return (
    <>
      <SendMail />
      <Table
        columns={columns}
        dataSource={result}
        loading={
          status === FetchStatus.Loading || status === FetchStatus.NoAction
        }
        pagination={{
          total: +total,
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
