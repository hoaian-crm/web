import { SearchAddress } from "service/address";
import { useAppDispatch, useAppSelector } from "store";
import { searchAddress } from "./action";

export const useAddress = () => {
  const state = useAppSelector(state => state.addressReducer)
  const dispatch = useAppDispatch();

  const search = async (query: SearchAddress) => {
    return dispatch(searchAddress(query))
  }

  return {
    ...state,
    search
  }
}