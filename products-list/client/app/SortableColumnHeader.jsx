import React from 'react'
import './SortableColumnHeader.css';
    
class SortableColumnHeader extends React.Component{
  constructor(props)
  {
    super(props);
    this.handlingChange = this.handlingChange.bind(this);
    this.state = {
      sort: {
        column: this.props.column,
        direction: 'asc'
      }
    };
  }
  
  handlingChange(e)
  {
    var nextState = this.state.sort
    console.log(e.target.name);
    nextState.direction = e.target.name
    this.setState(nextState);
    this.props.toChange(this.state.sort);
  }

  render() {
    let currentSort = this.props.currentSort.column === this.props.column? this.props.currentSort.direction: false;
    return( 
      <th>
        {this.props.column}
        <button onClick={this.handlingChange} name="asc" className={currentSort === 'asc'? "SortableColumnHeader-current": ""}>&#x25B2;</button>
        <button onClick={this.handlingChange} name="desc" className={currentSort === 'desc'? "SortableColumnHeader-current": ""}>&#x25BC;</button>
      </th>
    );
  }
}

export default SortableColumnHeader;
