import { Router, Switch, Route, withRouter } from "react-router-dom";
import React from 'react'
import Login from './components/loggin'
import SecuredRoute from './securedRoute'
import history from './history'
import NavBar from './components/NavBar'
import Insurance from './components/Insurance'
import InsuranceList from './components/InsuranceList'

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    

    login = e => {
        e.preventDefault();
        // var ret = { username: 'feliz' };
        // if (ret)
        //     this.setState({ isAuthenticated: true, username: ret.username });
    };

    render() {
        return (

            <Router history={history}>
                <div className="container">
                    <div className="row">
                        <NavBar/>
                    </div>
                    <div className="row justify-content-center">
                        <Switch>
                            <Route path="/login" component={Login} onSubmite={this.login} />
                            <SecuredRoute path="/Insurance" component={Insurance}  />
                            <SecuredRoute path="/" component={InsuranceList}  />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}