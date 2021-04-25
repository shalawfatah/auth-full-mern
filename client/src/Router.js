

import React, { useContext } from 'react'
import App from './App'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Register from './components/auth/Register'
import Nav from './components/layout/Nav'
import Login from './components/auth/Login'
import Customers from './components/customers/Customers'
import AuthContext from './context/AuthContext'

const Router = () => {
    const {loggedIn} = useContext(AuthContext)
    return (
        <BrowserRouter>
        <Nav />
        <Switch>
            <Route path='/' exact>
                <App />
            </Route>
            {loggedIn === false && (
                <>
                <Route path='/register' exact>
                <Register />
                </Route>
                <Route path='/login' exact>
                    <Login />
                </Route>
                </>
            )}
            { loggedIn === true && (
            <Route path='/customers' exact>
                <Customers />
            </Route>
            )}
        </Switch>
        </BrowserRouter>
    )
}

export default Router
