import { useAppSelector } from "store"

export const useAuth = () => {
  const state = useAppSelector(state => state.authReducer);
  return { ...state }
}
