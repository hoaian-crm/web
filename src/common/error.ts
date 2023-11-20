import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ErrorResponse } from "react-router-dom";
import { FetchStatus } from "type/api.d";
import { showToastMessage } from "./toast";

export const errorHandler = <T>(
  action: PayloadAction<ErrorResponse>
): FetchStatus => {
  console.log("action.payload is: ", action.payload.status)
  if (action.payload.status === 403) {
    return FetchStatus.PermissionDenied;
  }
  showToastMessage(action.payload.data.message);
  return FetchStatus.Failed;
};
