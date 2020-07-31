import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("token");
    return (
        <Route
            {...rest}
            render = {() => {
            if(token === "loggedout") {
                return <Redirect to = "/login" />;
            }
            else {
                return <Component />;
            }
        }} />
    );
}

export default PrivateRoute;