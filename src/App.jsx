import logo from "./logo.svg";
import "./App.css";
import Trainer from "./components/Trainer";
import Navigation from "./components/Navigation";
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
          <Navigation />
          <Routes>
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Trainer />} />
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
