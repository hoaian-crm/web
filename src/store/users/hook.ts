import { useSearchParams } from "react-router-dom";
import { ListUserQuery } from "service/user";
import { useAppDispatch, useAppSelector } from "store";
import { IUser } from "type/user";
import { listUsers } from "./action";
import { deselectUser, selectUser } from "./user";

export const useUser = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useSearchParams({
    keyword: "",
    limit: "20",
  });
  const state = useAppSelector((state) => state.userReducer);

  const fetch = async (query: ListUserQuery) => {
    return await dispatch(listUsers(query));
  };

  const select = (user: IUser) => dispatch(selectUser(user));
  const deselect = () => dispatch(deselectUser());

  return {
    ...state,
    fetch,
    query,
    setQuery,
    select,
    deselect
  };
};
