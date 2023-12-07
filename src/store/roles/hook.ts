import { AttachPermission, CreateRole, DetachPermission, RoleQuery } from 'service/role';
import { useAppDispatch, useAppSelector } from 'store';
import { deselectRole, selectRole } from '.';
import { attachPermission, createRole, detachPermission, fetchRole } from './action';

export const useRole = () => {
  const state = useAppSelector(state => state.roleReducer);
  const dispatch = useAppDispatch();

  const fetch = (query: RoleQuery) => {
    return dispatch(fetchRole(query))
  }

  const create = (data: CreateRole) => {
    return dispatch(createRole(data))
  }

  const attach = (data: AttachPermission) => {
    return dispatch(attachPermission(data))
  }

  const detach = (data: DetachPermission) => {
    return dispatch(detachPermission(data))
  }

  const select = (roleId: string) => {
    return dispatch(selectRole(roleId))
  }

  const deselect = () => {
    return dispatch(deselectRole());
  }


  return {
    ...state,
    fetch,
    create,
    attach,
    detach,
    select,
    deselect
  }
}