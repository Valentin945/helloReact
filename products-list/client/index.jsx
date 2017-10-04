/**
  \version 0
  \author Valentin LAMBERT
  \brief File that relates the React with the html file
*/


import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import Header from './app/header/header.jsx';
import { HashRouter as Router,
         Route,
         Switch} from 'react-router-dom';
import Footer from './app/footer.jsx';
import BasketComponent from './app/basketComponent.jsx';


class PrimaryLayout extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleCmd = this.handleCmd.bind(this);
    this.state = {
      command: []
    };
  }

  handleCmd(product)
  {
    this.setState(prevState => {
      let command = prevState.command;
      command.push(product);
      return {command};
    });а
    console.log(this.state.command);
  }

  render() {
    return (
      <div className="primary-layout">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={() => <App addCommand={this.handleCmd}/>}/>
            <Route path="/plo" component={App}/>
            <Route path="/basket" component={App}/>
          </Switch>
        </main>
        <hr />
        <Route exact path="/" component={Footer}/>
      </div>
    );

  }
}
const Start = () => (
  <Router>
    <PrimaryLayout />
  </Router>
)


ReactDOM.render(<Start />, document.getElementById('app'));
