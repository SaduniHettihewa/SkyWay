import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Home from './Components/Home/index'
import Login from './Components/Login/index'
import Signup from './Components/Signup';

function App() {
  return (
    
      <Router >
        <Switch>
      <Route path="/Login" component={Login}>
      <Login/>
      </Route>
      <Route path="/Signup" component={Signup}>
      <Signup/>
      </Route>
      <Route path="/Dashboard" component={Dashboard}>
      <Dashboard/>
      </Route>
      <Route path="/" component={Home}>
      <Home/>
      </Route>
     
      </Switch>
      </Router>
   
  )
}

export default App
