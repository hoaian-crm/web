import { AttachTagBody, CreateTagBody } from "service/tag";
import { useAppDispatch, useAppSelector } from "store";
import { attachTag, createTag, getTag } from "./action";

export const useTags = () => {
  const state = useAppSelector((state) => state.tagReducer);
  const dispatch = useAppDispatch();



  const _fetchTag = async () => {
    dispatch(getTag());
  };

  const _createTag = async (data: CreateTagBody) => {
    await dispatch(createTag(data));
    _fetchTag();
  };

  const _attachTag = async (data: AttachTagBody) => {
    await dispatch(attachTag(data));
  }

  return {
    ...state,
    createTag: _createTag,
    fetchTag: _fetchTag,
    attachTag: _attachTag
  };
};
