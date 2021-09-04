import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Components/Home/index'
import Login from './Components/Login/index'
import { createBrowserHistory as history} from 'history';

function App() {
  return (
    
      <Router >
        <Switch>
      <Route path="/Login" component={Login}>
      <Login/>
      </Route>
      <Route path="/" component={Home}>
      <Home/>
      </Route>
      </Switch>
      </Router>
   
  )
}

export default App
