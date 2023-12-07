import { List } from "antd";
import React from "react";
import { useRole } from "store/roles/hook";
import { Role } from "./role";

export const Roles = () => {
  const { roles } = useRole();

  return (
      <List
        grid={{
          gutter: 0,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 5,
        }}
        size="small"
        dataSource={roles}
        itemLayout="vertical"
        renderItem={(item) => (
          <List.Item>
            <Role data={item} />
          </List.Item>
        )}
        style={{ alignContent: "flex-start" }}
      />
  );

  // return (
  //   <Grid>
  //     {roles.map((role) => (
  //       <Role data={role} />
  //     ))}
  //   </Grid>
  // );
};
