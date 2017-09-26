/**
  \version 0
  \author Valentin LAMBERT
  \brief File that relates the React with the html file
*/


import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.jsx';

class root extends React.Component {
  render() {
    return  console.log('rien') ;
  }
}



ReactDOM.render(<root/>, document.getElementById('app'));
