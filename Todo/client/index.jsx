/**
  \version 0
  \author Valentin LAMBERT
  \brief File that relates the React with the html file
*/


import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import {HashRouter as Router,
        Route,
        Switch} from 'react-router-dom'
import Header from './app/header.jsx'
import DossierList from "./app/dossierlist.jsx"


class primaryLayout extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      listTodo: {}
    }
  }

  render()
  {
    <div className="app">
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <Switch>
            <Route exact path="/" component={() => <DossierList/>}/>
          </Switch>
        </div>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
