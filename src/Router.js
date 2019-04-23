import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage'
import CartPage from './pages/cartpage'
import AdminPage from './pages/adminpage'

const Router = () => (
    <Switch>
        <Route exact path='/' activeClassName="active" component={HomePage} />
        <Route exact path='/cart' activeClassName="active" component={CartPage} />
        <Route exact path='/admin' activeClassName="active" component={AdminPage} />
    </Switch>
)

export default Router;