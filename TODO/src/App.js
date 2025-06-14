import React, { useCallback, useState, useEffect } from 'react'
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { authContext } from './auth-context';
import Login from './Login';
import AddForm from './AddForm'
import List from './List'
import Navg from './Navg';
import Signup from './Signup';
import './App.css'

const App = () => {
  const [todoDb, setTodoDb] = useState(() => {
    const DB = localStorage.getItem("todoDb");
    if (DB)
      return JSON.parse(DB);
    else
      return [];
  });

  const [userDb, setUserDb] = useState(() => {
    const DB = localStorage.getItem("userDb");
    if (DB)
      return JSON.parse(DB);
    else
      return [];
  });

  const [user, setUser] = useState(() => {
    const DB = localStorage.getItem("user");
    if (DB)
      return DB;
    else
      return null;
  });

  const AddTodoHandler = (user, title, desc) => {
    setTodoDb((prevTodoDb) => {
      return [...prevTodoDb, {
        id: uuid(),
        user: user,
        title: title,
        desc: desc
      }]
    })
  }

  const DeleteTodoHandler = (id) => {
    const updatedList = todoDb.filter((todo) => {
      return (todo.id !== id);
    });
    setTodoDb(updatedList);
  }

  const UpdateTodoHandler = (id, title, desc) => {
    setTodoDb(
      todoDb.map(item =>
        item.id === id
          ? { ...item, title: title, desc: desc }
          : item
      ))
  }

  useEffect(() => {
    localStorage.setItem("todoDb", JSON.stringify(todoDb));
  }, [todoDb]);

  const AddUserHandler = (user, email, passw) => {
    setUserDb((prevUserDb) => {
      return [...prevUserDb, {
        user: user,
        email: email,
        passw: passw
      }]
    })
  }

  const UpdatePasswordHandler=(newPassw)=>{
    setUserDb(
      userDb.map(item =>
        user === item.user
          ? { ...item,passw:newPassw}
          : item
      ))
  }

  const RemoveUserHandler=()=>{
    const updatedList = todoDb.filter((todo) => {
      return (todo.user !== user);
    });
    setTodoDb(updatedList);
    const updatedAuth = userDb.filter((it) => {
      return (it.user !== user);
    });
    setUserDb(updatedAuth);
    logout();
  }

  useEffect(() => {
    localStorage.setItem("userDb", JSON.stringify(userDb));
  }, [userDb]);


  const login = useCallback((user) => {
    localStorage.setItem("user", user);
    setUser(user);
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null);
  }, [])

  let routes;
  let className;
  if (user) {
    className = "login";
    routes = (
      <Switch>
        <Route path="/" exact>
          <AddForm AddHandler={AddTodoHandler} />
          <List todoDb={todoDb} DeleteTodoHandler={DeleteTodoHandler} UpdateTodoHandler={UpdateTodoHandler} />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }
  else {
    className = "logout";
    routes = (
      <Switch>
        <Route path="/auth" exact>
          <Signup userDb={userDb} AddUserHandler={AddUserHandler} />
          <Login userDb={userDb} />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    )
  }
  return (
    <authContext.Provider value={{ user: user, login: login, logout: logout }}>
      <Router>
        <Navg UpdatePasswordHandler={UpdatePasswordHandler} RemoveUserHandler={RemoveUserHandler}/>
        <main className={className}>
          {routes}
        </main>
      </Router>
    </authContext.Provider>
  )
}

export default App