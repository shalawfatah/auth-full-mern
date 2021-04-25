

import React from 'react'
import App from './App'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Register from './components/auth/Register'
import Nav from './components/layout/Nav'

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
        </Switch>
        </BrowserRouter>
    )
}

export default Router
