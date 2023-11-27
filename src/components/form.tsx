import React, { FormHTMLAttributes } from "react"
import styled from "styled-components"
import { Text } from "./text"

export type FromProps<T extends Object> = {
    children?: React.ReactNode
    title?: string;
    className?: string;
} & FormHTMLAttributes<HTMLFormElement>

export function Form<T extends Object>(props: FromProps<T>) {


    return <Container {...props} onClick={(e) => {
        e.stopPropagation();
    }} className={props.className}>
        <Title>
            {props.title}
        </Title>
        {props.children}
    </Container>
}

const Title = styled(Text)`
    text-align: center;
    font-size: 20px;
    color: black;
    margin-bottom: 10px;
    font-weight: bold;
`

const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    background-color: white
`