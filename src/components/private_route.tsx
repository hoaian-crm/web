import React, { useEffect } from "react";
import { redirect } from "react-router";

export const PrivateRoute: React.FC<any> = (props) => {

    useEffect(() => {
        redirect('/login');
    }, [])


    return props.children;
}