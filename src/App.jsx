import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock";
import Trainer from "./components/Trainer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";

function Settings() {
  return (
    <div>
      <h1>This is the settings page</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Router>
          <Link to="/settings">Settings</Link>
          <Link to="/">Trainer</Link>
          <Routes>
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/"
              element={
                <React.Fragment>
                  <Trainer />
                  <Clock />
                </React.Fragment>
              }
            />
          </Routes>
        </Router>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
