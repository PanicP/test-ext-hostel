import React from 'react'
import './App.css'
import { HomePage } from './pages'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/test/" component={ () => <div></div>}/>
            </Switch>
        </Router>
    )
}

export default App
