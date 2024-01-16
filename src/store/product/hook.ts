import { CreateProductBody, FetchProductQuery } from "service/product";
import { useAppDispatch, useAppSelector } from "store"
import { createProduct, fetchProduct, softDeleteProduct } from "./action";
import { useParams } from "hooks/useParams";
import { useCallback, useEffect } from "react";
import { select } from ".";
import { FetchStatus } from "type/FetchStatus";

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
    await dispatch(createProduct(data));
    await fetch();
  }

  const _select = (selectedIds: Array<string | number>) => dispatch(select(selectedIds))

  const _softDelete = async () => {
    await dispatch(softDeleteProduct({ ids: state.selectedIds }))
    await fetch();
  };

  return {
    ...state,
    fetch,
    create,
    select: _select,
    softDelete: _softDelete,
  }
}
