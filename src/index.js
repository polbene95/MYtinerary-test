import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index2.css';
import HomePage from './home.js';





const routing = (
    <Router>
      <div>
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={HomePage} />
        <Route path="/cities" component={HomePage} />
        <Route path="/signup" component={HomePage} />
      </div>
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'))