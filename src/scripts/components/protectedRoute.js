import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import AuthMiddleware from './AuthMiddleware';

const ProtectedRoute = (component, ...rest)=>(
    <Route 
        {...rest}
        render={ props =>
            AuthMiddleware.isAuthenticated 
            ? (<Component {...props} />)
            : (
                <Redirect
                    to={{
                        pathname: '/login',
                        //state: {from: props.location}
                    }}
                />
            )
        }
    />
);

export default ProtectedRoute;