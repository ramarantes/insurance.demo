import React from 'react';
import {Route} from 'react-router-dom';
import Login from '../components/loggin'
import {withAppContext} from '../provider'

function SecuredRoute(props) {
  const {component: Component, path} = props;
  const isAuthenticated = props.appContext.isAuthenticated;
  
  return (
    <Route path={path} render={() => {
    //   if (checkingSession) return <h3 className="text-center">Validating session...</h3>;
        if (isAuthenticated) {
            return <Component {...props}/>
        }
        else
        {
            return <Login />
        }
        
    }} />
  );
}

export default withAppContext(SecuredRoute);