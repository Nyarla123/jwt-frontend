import React,{useState, useEffect} from "react";
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

function App() {

  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/hello")
        .then((response) => {
          setMessage(response.data)
        });
  });


  return (
      <Router>
        <Header />
        <Route>
          <User path='/'/>
        </Route>
          <Login />
      </Router>
  );
}

export default App;
