

import React from 'react'
import App from './App'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Register from './components/auth/Register'
import Nav from './components/layout/Nav'
import Login from './components/auth/Login'

const Router = () => {
    return (
        <BrowserRouter>
        <Nav />
        <Switch>
            <Route path='/' exact>
                <App />
            </Route>
            <Route path='/register' exact>
                <Register />
            </Route>
            <Route path='/login' exact>
                <Login />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router
