import { useAppDispatch, useAppSelector } from "store";
import { createTag, getTag } from "./action";
import { useEffect, useMemo } from "react";
import { FetchStatus } from "type/FetchStatus";
import { CreateTagBody } from "service/tag";

export const useTags = () => {
  const state = useAppSelector((state) => state.tagReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state.fetch.status === FetchStatus.NoAction) {
      dispatch(getTag());
    }
  }, []);

  const _fetchTag = async () => {
    dispatch(getTag());
  };

  const _createTag = async (data: CreateTagBody) => {
    await dispatch(createTag(data));
    _fetchTag();
  };

  return {
    ...state,
    createTag: _createTag,
    fetchTag: _fetchTag,
  };
};
