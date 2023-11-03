import React from "react";
import styled from "styled-components";
import { Colors } from "theme/color";

export type LoadingProps = {
  loading: boolean;
  children?: React.ReactNode;
  size?: string;
  containerSize?: string;
};

export const Loading: React.FC<LoadingProps> = (props) => {
  if (!props.loading) return props.children;

  return (
    <Container size={props.size} containerSize={props.containerSize}>
      <div className="lds-hourglass"></div>
    </Container>
  );
};

const Container = styled.div<{
  size?: string;
  containerSize?: string;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .lds-hourglass {
    display: flex;
    position: relative;
    width: ${(props) => props.containerSize || "80px"};
    height: ${(props) => props.containerSize || "80px"};
    justify-content: center;
    align-items: center;
  }
  .lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: ${(props) => props.size} solid ${Colors.grey03};
    border-color: ${Colors.grey03} transparent ${Colors.grey03} transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;
