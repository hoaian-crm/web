import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "common";
import { Text } from "components/text";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "store";
import styled from "styled-components";

export const Profile: React.FC = () => {
  const { currentUser } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();

  return (
    <ProfileContainer>
      <Avatar src={currentUser?.avatar} />
      <InformationContainer>
        <Name>{currentUser?.displayName}</Name>
        <Role>Admin</Role>
      </InformationContainer>
      <LogoutButton
        onClick={() => {
          console.log("voday")
          localStorage["accessToken"] = "";
          navigate("/login");
        }}
      >
        <FontAwesomeIcon icon={Icons.LogoutIcon} />
      </LogoutButton>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-top: auto;
  margin-bottom: 100px;
`;

const InformationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled(Text)`
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

const Role = styled(Text)`
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

const Avatar = styled.img`
  border-radius: 100px;
  width: 40px;
  height: 40px;
`;

const LogoutButton = styled.div`
  color: ${(props) => props.theme.primaryTextColor};
  font-size: 20px;

  :hover {
    cursor: pointer;
  }
`;
