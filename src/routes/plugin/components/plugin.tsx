import { Card, Form, Input, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import styled from "styled-components";
import { IPlugin } from "type/plugin";
import { FontColorsOutlined } from "@ant-design/icons";
import { capitalizeFirstLetter } from "common/utils";

type PluginProps = {
  data: IPlugin;
};

export const Plugin: React.FC<PluginProps> = (props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card
        hoverable
        style={{ width: 250 }}
        bodyStyle={{ height: 100, padding: 10 }}
        cover={<img src={props.data.image} alt="Load failed"></img>}
        onClick={() => setOpenModal(true)}
      >
        <Meta
          title={props.data.name}
          description={props.data.description}
          style={{ padding: 0 }}
        />
      </Card>
      <Modal
        title={`Plugin configuration`}
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <Form layout="vertical">
          {Object.keys(props.data.config).map((key) => (
            <Form.Item label={capitalizeFirstLetter(key)} name={key}>
              <Input
                size="large"
                placeholder={key}
                prefix={<FontColorsOutlined />}
              />
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </>
  );
};

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;
