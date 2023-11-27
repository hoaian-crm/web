import { PrimaryButton } from "components/button"
import { Form } from "components/form"
import { OnChange, PrimaryInput } from "components/input"
import { Text } from "components/text"
import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "store"
import { closeModal } from "store/modal"
import { FetchRoleStatus } from "store/roles"
import { createRole } from "store/roles/action"
import styled from "styled-components"
import { IRole } from "type/role"

export const CreateRole = () => {

    const [input, setInput] = useState<IRole | undefined>()
    const dispatch = useAppDispatch();
    const roleState = useAppSelector(state => state.roleReducer);

    const onChange: OnChange = (e) => {
        setInput({
            ...(input || {}),
            [e.target.name]: e.target.value
        } as any)
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) return;
        await dispatch(createRole(input));
        dispatch(closeModal());
        // console.log("roleState", roleState.fetchStatus)
    }

    return <CreateRoleFrom<IRole> title="Create role" onSubmit={onSubmit}>
        <Input type={"text"} onChange={onChange} placeHolder={"Enter name of role"} name="name" label="Role name" required />
        <Input type={"text"} onChange={onChange} placeHolder={"Enter description for role"} name="description" label="Role description" />
        <Button
            disabled={roleState.fetchStatus === FetchRoleStatus.Loading}
        >
            <Text>Create</Text>
        </Button>
    </CreateRoleFrom>
}

const Input = styled(PrimaryInput)`
    width: 100%;
`

const CreateRoleFrom = styled(Form)`
    width: 400px;
`

const Button = styled(PrimaryButton)`
    margin-top: 10px;
`