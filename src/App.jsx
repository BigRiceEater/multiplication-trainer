import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

import Navigation from "./components/Navigation";
import Trainer from "./components/Trainer";
import Settings from "./components/Settings";

function App() {
  const [settingsValue, setSettingsValue] = useState({});

  function handleSettingsChanged(values) {
    setSettingsValue(values);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Router>
          <Navigation />
          <Routes>
            <Route
              path="/settings"
              element={
                <Settings
                  defaultValues={settingsValue}
                  onChange={handleSettingsChanged}
                />
              }
            />
            <Route
              path="/"
              element={
                <Trainer
                  min={settingsValue.min}
                  max={settingsValue.max}
                  fixedOperand={settingsValue.multiplier}
                />
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
