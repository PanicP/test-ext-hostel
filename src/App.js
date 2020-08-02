import React from 'react'
import './App.css'
import {
    HomePage,
    LoginPage,
    RegisterPage,
    HostelDetailPage,
    HostelBookingListPage,
} from './pages'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'
import { PrivateRoute } from './components/auth'

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <PrivateRoute exact path="/hostel/:id" component={HostelDetailPage} />
                <PrivateRoute
                    exact
                    path="/hostel-booking-list"
                    component={HostelBookingListPage}
                />
            </Switch>
        </Router>
    )
}

export default App
