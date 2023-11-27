import { CheckCircleFilled } from "@ant-design/icons";
import { Card, Modal, Typography } from "antd";
import { capitalizeFirstLetter } from "common/utils";
import React, { useState } from "react";
import { usePlugin } from "store/plugins";
import styled from "styled-components";
import { Colors } from "theme/color";
import { FetchStatus } from "type/api.d";
import { IPlugin } from "type/plugin";

type PluginProps = {
  data: IPlugin;
  children?: React.ReactNode;
  configured?: boolean;
};

export const Plugin: React.FC<PluginProps> = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const { create, createStatus } = usePlugin();

  const onSubmit = async () => {
    await create(props.data);
    setOpenModal(false)
  }

  return (
    <>
      <Card
        hoverable
        bodyStyle={{ padding: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        onClick={() => setOpenModal(true)}
        extra={props.configured ? <CheckCircleFilled style={{ color: Colors.green02, fontSize: 18 }} /> : null}
        title={capitalizeFirstLetter(props.data.name)}
      >
        <img src={props.data.image} alt="Load failed" style={{ width: 50, marginRight: 10 }} />
        <Typography.Text>{props.data.description}</Typography.Text>
      </Card>
      <Modal
        title={`Plugin configuration`}
        open={openModal}
        onCancel={() => setOpenModal(false)}
        onOk={onSubmit}
        confirmLoading={createStatus === FetchStatus.Loading}
      >
        {props.children}
      </Modal>
    </>
  );
};

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;
