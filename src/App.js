import React,{useState} from "react";
import './App.css';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from "./components/Header";
import User from "./components/User";
import Login from "./components/Login";
import ListBoard from "./components/ListBoard";
import Logout from "./components/Logout";
import {isUserLoggedIn} from "./apis/authApi";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {


  return (
      <Router>
          <div className='app'>
              <Navbar />
              <div className='container'>
                  <Switch>
                      <Route path='/' exact>
                          <Home/>
                      </Route>
                      <Route path='/login' exact>
                         <Login />
                      </Route>
                      <Route path='/logout' exact>
                          <Logout />
                      </Route>
                      <Route path='/listboard' exact>
                          <ListBoard />
                      </Route>
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;
