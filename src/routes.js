import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { AccountService } from './services/accountService';

import Login from './pages/Authentication/Login';
import LoggedArea from './pages/LoggedArea';
import RecoveryPassword from './pages/Authentication/RecoveryPassword';
import CreateAccount from './pages/Authentication/CreateAccount';

function PrivateRoute({children, ...rest}) {
    return (
        <Route 
            {...rest}
            render={({ location }) => 
                AccountService.loggedIn() ? ( children ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: location }
                    }} />
                )
            }
        />
    )
}

function Routes() {  
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/recoveryPassword" component={RecoveryPassword} />
                <Route path="/createAccount" component={CreateAccount} />
                <PrivateRoute path="/main">
                    <LoggedArea />
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;