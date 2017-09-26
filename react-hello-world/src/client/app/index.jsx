import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './Component/AwesomeComponent.jsx'


class App extends React.Component {
  render() {
    
    return (
      <div>
        <p> Hello Mg </p>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
