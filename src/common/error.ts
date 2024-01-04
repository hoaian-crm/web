import { PayloadAction } from "@reduxjs/toolkit";
import { ErrorResponse } from "react-router-dom";
import { FetchStatus } from "type/FetchStatus";
import { showToastMessage } from "./toast";

export const errorHandler = <T>(
  action: PayloadAction<ErrorResponse>
): FetchStatus => {
  if (action.payload?.status === 403) {
    return FetchStatus.PermissionDenied;
  }
  showToastMessage(action.payload.data.messages);
  return FetchStatus.Failed;
};
