import React from 'react'
import './App.css'
import {
    HomePage,
    LoginPage,
    RegisterPage,
    HostelDetailPage,
    HostelListPage,
    HostelBookingListPage,
} from './pages'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/hostel/:id" component={HostelDetailPage} />
                <Route exact path="/hostel-list" component={HostelListPage} />
                <Route
                    exact
                    path="/hostel-booking-list"
                    component={HostelBookingListPage}
                />
            </Switch>
        </Router>
    )
}

export default App
