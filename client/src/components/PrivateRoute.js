import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = () => {
    return (
        <Route render = {() => {
            if(0===5) {
                return null;
            }
            else {
                return <Redirect to = "/login" />;
            }
        }} />
    );
}

export default PrivateRoute;