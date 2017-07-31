import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import PeopleList from './components/PeopleList';
import PersonDetail from './components/PersonDetail';

import './App.css';

const App = () => (
  <Router>
    <Home>
      <Route exact path="/people" component={PeopleList} />
      <Route path="/people/:id" component={PersonDetail} />
    </Home>
  </Router>
);

export default App;
