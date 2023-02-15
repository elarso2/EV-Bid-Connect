import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
