import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "routes/layout";
import { useAppDispatch, useAppSelector } from "store";
import { getProfile } from "store/auth/actions";
import { FetchStatus } from "type/api.d";

export const PrivateRoute: React.FC<any> = (props) => {
  const navigate = useNavigate();
  const { getProfileStatus } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (getProfileStatus === FetchStatus.Failed) {
      navigate("/login");
    }
    if (!localStorage["accessToken"]) navigate("/login");
    if (getProfileStatus === FetchStatus.NoAction) {
      dispatch(getProfile());
    }
  }, [getProfileStatus]);

  return <Layout>{props.children}</Layout>;
};
