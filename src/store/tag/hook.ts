import { AttachTagBody, CreateTagBody, DeleteTagParam, UpdateTagBody } from "service/tag";
import { useAppDispatch, useAppSelector } from "store";
import { attachTag, createTag, deleteTag, getTag, updateTag } from "./action";

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

  const _updateTag = async (data: UpdateTagBody) => {
    await dispatch(updateTag(data))
    await _fetchTag();
  }

  const _deleteTag = async (param: DeleteTagParam) => {
    await dispatch(deleteTag(param));
    await _fetchTag();
  }

  return {
    ...state,
    createTag: _createTag,
    fetchTag: _fetchTag,
    attachTag: _attachTag,
    updateTag: _updateTag,
    deleteTag: _deleteTag
  };
};
