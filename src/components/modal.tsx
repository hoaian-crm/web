import React from "react";
import { useAppDispatch, useAppSelector } from "store";
import { closeModal } from "store/modal";
import styled from "styled-components";

export const Modal: React.FC = () => {
    const dispatch = useAppDispatch();
    const modalState = useAppSelector(state => state.modalReducer);

    const renderChild = () => {
        if (!modalState.currentModal) return;
        const Component = Modals[modalState.currentModal] as React.FC;
        return <Component />
    }

    return <Container open={modalState.open} onClick={() => dispatch(closeModal())} >
        {renderChild()}
    </Container>
}

const Container = styled.div<{ open: boolean }>`
    display: ${props => props.open ? "flex" : "none"};
    position: absolute;
    z-index: 100000;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5)
`


export enum ModalName {
    Ignore,
    Example,
    CreateRole
}

export const Modals: {
    [key in ModalName]?: React.FC
} = {
    [ModalName.Example]: () => <div style={{ height: 100, width: 100, backgroundColor: 'red' }}></div>,
}