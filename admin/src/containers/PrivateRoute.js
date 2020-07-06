import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {sessionKey} from '../config';

export const PrivateRoute = ({component: PrivateRouteComponent, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      window.sessionStorage.getItem(sessionKey) ? (
        <PrivateRouteComponent {...props} />
      ) : (
        <Redirect to={{pathname: '/login', state: {from: props.location}}} />
      )
    }
  />
);
