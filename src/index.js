import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index2.css';
import HomePage from './home.js';
import CitiesPage from './cities'


const routing = (
    <Router>
      <div>
        <Route path="/web/home" component={HomePage} />
        <Route path="/web/login" component={HomePage} />
        <Route path="/web/cities" component={CitiesPage} />
        <Route path="/web/signup" component={HomePage} />
      </div>
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'))