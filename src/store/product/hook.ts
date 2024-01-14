import { useDispatch } from "react-redux";
import { CreateProductBody, FetchProductQuery } from "service/product";
import { useAppDispatch, useAppSelector } from "store"
import { createProduct, fetchProduct } from "./action";
import { useParams } from "hooks/useParams";
import { useCallback, useEffect } from "react";

export const useProducts = () => {
  const state = useAppSelector(state => state.productReducer);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useParams({
    limit: "10",
    offset: "0",
    keyword: ""
  }, 'product');

  const fetch = useCallback(async () => {
    return dispatch(fetchProduct(query));
  }, [query])

  const create = async (data: CreateProductBody) => {
    return dispatch(createProduct(data));
  }

  useEffect(() => {
    fetch();
  }, [query])

  return {
    ...state,
    fetch,
    create
  }
}
