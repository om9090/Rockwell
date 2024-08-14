import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PrivateRoute = () => {
    const { userInfo } = useContext(UserContext);
    const isLogged = userInfo ? true : false;

    if (isLogged) {
        return <Outlet />
    }else{
        return <Navigate to="/login" />
    }
}

export default PrivateRoute