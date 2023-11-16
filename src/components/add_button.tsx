import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Icons } from "common"
import React from "react"
import styled, { ThemeProvider, useTheme } from "styled-components"
import { ButtonTheme, Theme } from "theme"
import { ButtonProps } from "./button"

export const AddButton: React.FC<ButtonProps> = (props) => {
    const theme = useTheme() as Theme;

    return <ThemeProvider theme={theme.foregroundButton}>
        <Container>
            <ButtonCore {...props}>
                <AddIcon icon={Icons.AddIcon} />
            </ButtonCore>
        </Container>
    </ThemeProvider>
}

const Container = styled.div<{ theme: ButtonTheme }>`
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 100px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    :hover{
        cursor: pointer;
        background-color: ${props => props.theme.hoverColor};
        border-radius: 100px;
    }
`
const ButtonCore = styled.button`
  width: 100%;
  background: none;
  border: none;
`;
const AddIcon = styled(FontAwesomeIcon) <{ theme: ButtonTheme }>`
    color: ${props => props.theme.childrenTheme.color};
    font-size: 20px;
`