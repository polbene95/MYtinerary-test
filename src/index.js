import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index2.css';
import HomePage from './home.js';
import CitiesPage from './cities';
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducers/rootReducer'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, applyMiddleware(thunk))

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

  ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'))