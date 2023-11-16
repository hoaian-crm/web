import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalName } from "components/modal";

type ModalState = {
    open: boolean,
    currentModal?: ModalName
}

const initialState: ModalState = {
    open: false,
    currentModal: undefined
}

const slice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalName>) => {
            state.open = true;
            state.currentModal = action.payload;
        },
        closeModal: (state) => {
            state.open = false;
        }
    }
});

export const modalReducer = slice.reducer;
export const {
    openModal,
    closeModal
} = slice.actions;