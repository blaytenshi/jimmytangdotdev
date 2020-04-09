import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/built-styles.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import TKSSIR from "./pages/TKSSIR";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
