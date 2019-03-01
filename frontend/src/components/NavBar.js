import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { withAppContext } from '../provider';

function NavBar(props) {
  const signOut = () => {
    confirmAlert({
        title: 'Logout',
        message: 'Deseja mesmo sair da aplicação?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {props.history.replace('/');
                                props.appContext.logout();
            }
          },
          {
            label: 'No',
            onClick: () => {}
          }
        ]
      })
    
  };
  console.log(props,'color:red');
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        SegFy
      </Link>
     
      {
        !props.appContext.isAuthenticated &&
        
        <Link className="btn btn-dark" to="/login">Sign In</Link>
        
      }
      {
        props.appContext.isAuthenticated &&
        
        <div>
            <Link className="navbar-brand" to="/insurancelist">
                InsuranceList
            </Link>
            <Link className="navbar-brand" to="/insurance">
                new insurance
            </Link>
        
      
          <label className="mr-2 text-white">{props.username}}</label>
          <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
        </div>
      }
      </nav>
 
  );
}

export default withRouter(withAppContext(NavBar));