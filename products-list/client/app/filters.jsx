import React from 'react';

class Filters extends React.Component {
  render() {
    return ( 
      <form>
        <input type="text" placeholder="Search" value={this.props.filterText}/>
        <p>
          <label>
          <input type="checkbox" checked={this.props.inStockOnly}/>
          &nbsp;
          Only show producs in stock
          </label>
        </p>
      </form>
    );
  }
}

export default Filters;
