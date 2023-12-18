import { PermissionQuery } from "service/permission";
import { useAppDispatch, useAppSelector } from "store";
import { fetchPermission } from "./action";

export const usePermission = () => {
  const state = useAppSelector(state => state.permissionReducer);
  const dispatch = useAppDispatch();

  const fetch = async (query: PermissionQuery) => {
    return dispatch(fetchPermission(query))
  }

  return {
    ...state,
    fetch
  }
}