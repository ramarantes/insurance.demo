import React from 'react'
import {withAppContext} from '../provider'
import History from '../classes/history'
export default withAppContext(class extends React.Component{
    login = e => {
        e.preventDefault();
        var form = {username: e.target[0].value, password: e.target[1].value}
        // this.appContext.login(e);
        var logado = this.props.appContext.login(form);
        if(logado) History.push('/');
    }

    render(){
         return(
            <div className="col-4 text-center">
            <form className="form-signin" onSubmit={this.login}>
            <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label  className="sr-only">Email address</label>
            <input type="email" name="inputEmail" id="inputEmail" className="form-control" placeholder="Email address" required  />
            <label className="sr-only">Password</label>
            <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" name="check" value="remember-me" />
                <p>Rememeber-me</p>
            </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

            </form>
            </div>       
        )
    }
})
