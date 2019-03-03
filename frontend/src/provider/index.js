import React from 'react';
import API from '../API'
import {constants} from '../constants'

const AppContext = React.createContext();

class AppProvider extends React.Component{

  constructor(props){
    super(props);
    var localState = localStorage.getItem(constants.LOCAL_STORAGE_STATE);
    if(localState)
    {
      var parsedState = JSON.parse(localState);
      this.state = {...parsedState};
    }
    else
    {

      this.state = {
        isAuthenticated: false,
        userName: '',
        token: ''
      }
    }  
  }

  logout = () => {
    this.setState({ isAuthenticated: false, userName:'', token:'' });
    localStorage.removeItem(constants.LOCAL_STORAGE_STATE);
  };
  login = async props => {
    var x = await API.post('/login',{username:props.username, password: props.password});
    if(x.data.token){
      this.setState({ userName:props.username, token: x.data.token, isAuthenticated:true});
      localStorage.setItem(constants.LOCAL_STORAGE_STATE,JSON.stringify(this.state));
      return true;
    }
    else 
      return false;
  }
  
  render(){
   return (<AppContext.Provider value={{ 
       ...this.state,
       logout: this.logout,
       login: this.login
   }}> 
      {this.props.children}
    </AppContext.Provider>)
  }
}



function withAppContext(Component){ 
  
  return function(props){
    return (
      <AppContext.Consumer>
        {(context=> <Component {...props} appContext={context} />)}
      </AppContext.Consumer>
    )
  }      
}

export {AppProvider,withAppContext};