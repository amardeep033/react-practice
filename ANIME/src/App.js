import React from 'react'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Book from './book/pages/Book'
import Notavlbl from './shared/comp/Notavlbl'
import Char from './book/pages/Char'
import List from './shared/navg/List'
import './App.css'

const App = () => {
  return (
    <React.Fragment>
    <Router>
      <List/>
      <Switch>
        <Route path="/" exact>
            <Book/>
        </Route>
        <Route path="/char" exact>
            <Char/>
        </Route>
        <Route path="/error" exact>
            <Notavlbl message="not found"/>
        </Route>
        <Redirect to="/error"/>
      </Switch>
    </Router>
    </React.Fragment>
  )
}

export default App