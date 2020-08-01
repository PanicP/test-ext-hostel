import React from 'react'
import './App.css'
import { HomePage, LoginPage, RegisterPage } from './pages'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/login' component={LoginPage} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/register" component={RegisterPage}/>
            </Switch>
        </Router>
    )
}

export default App
