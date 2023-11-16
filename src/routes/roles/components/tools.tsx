import { AddButton } from "components/add_button"
import { ModalName } from "components/modal"
import { Search } from "components/search"
import { TableTools } from "components/table_tools"
import { useParams } from "hooks/useParams"
import React from "react"
import { useAppDispatch } from "store"
import { openModal } from "store/modal"
import { ThemeProvider, useTheme } from "styled-components"
import { TableTheme } from "theme"
import { TQuery } from "type/api"
import { IRole } from "type/role"

export const Tools = () => {
    const theme = useTheme() as TableTheme;
    const dispatch = useAppDispatch();
    const [query, setQuery] = useParams<TQuery>({
        limit: "100",
        offset: "0",
        order: "id",
        direction: "desc",
        keyword: ""
    })

    return <TableTools<IRole> tableName={"Role management"}>
        <AddButton onClick={() => dispatch(openModal(ModalName.Example))} />
        <ThemeProvider theme={theme.searchBar}>
            <Search search={query.keyword} onSearch={(e) => setQuery({ ...query, keyword: e.target.value })} />
        </ThemeProvider>
    </TableTools>
}