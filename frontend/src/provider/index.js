import React, { Component } from 'react';
import API from '../API'

const AppContext = React.createContext();

class AppProvider extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: false,
      userName: '',
      token: ''
    }
  }

  logout = () => this.setState({ isAuthenticated: false, userName:'', token:'' });
  login = async props => {
    var x = await API.post('/login',{username:props.username, password: props.password});
    if(x.data.token){
      this.setState({ userName:props.username, token: x.data.token, isAuthenticated:true});
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