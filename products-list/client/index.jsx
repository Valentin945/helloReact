/**
  \version 0
  \author Valentin LAMBERT
  \brief File that relates the React with the html file
*/


import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import Header from './app/header/header.jsx'
import {Redirect, BrowserRouter, Route, Switch} from 'react-router-dom'



class PrimaryLayout extends React.Component
{

  render() {
    return (
      <div className="primary-layout">
        <Header />
        <main>
          <Switch>
            <Route path="/" component={App}/>
            <Route path="/plo" component={App}/>
          </Switch>
        </main>
      </div>
    );

  }
}
const Start = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)


ReactDOM.render(<Start />, document.getElementById('app'));
