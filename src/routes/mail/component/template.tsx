import { Image } from "antd";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import React from "react";
import { ITemplate } from "type/template";

type TemplateProps = {
  data: ITemplate;
};

export const Template: React.FC<TemplateProps> = (props) => {
  return (
    <Card
      hoverable={true}
      cover={
        <Image
          src={"http://13.212.154.57:30020/storages" + props.data.previewImage}
          style={{ objectFit: "cover", height: 250 }}
        />
      }
      bodyStyle={{ height: 150 }}
    >
      <Meta title={props.data.name} description={props.data.description} />
    </Card>
  );
};
