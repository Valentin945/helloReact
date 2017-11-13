/**
  \version 0
  \author Valentin LAMBERT
  \brief File that relates the React with the html file
*/


import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import {
  HashRouter as Router
} from 'react-router-dom'

const Index = () => (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('app'));
