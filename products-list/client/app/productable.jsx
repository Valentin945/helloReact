import React from 'react';
import ProductRow from './ProductRow.jsx';
import SortableColumnHeader from './SortableColumnHeader.jsx';

class ProducTable extends React.Component {
  constructor(props)
  {
    super(props);

    this.sortByColumnAndDirection = this.sortByColumnAndDirection.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handlingChange = this.handlingChange.bind(this);

    this.state = {
      sort: {
        column: 'price',
        direction: 'desc'
      }
    };
  }

  handlingChange(ssort)
  {
    this.setState((prevState) => 
    {
      let sort = prevState.sort;
      sort.direction = ssort.direction;
      return {sort};
    });
  }

  sortByColumnAndDirection(objectA, objectB)
  {
    let isDesc = this.state.sort.direction === 'desc'? 1:-1;
    let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];

    if (this.state.sort.column === 'price')
    {
      [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d.]/g, ''), ''), 10);
    }

    if (a > b)
    {
      return 1 * isDesc;
    }

    if (a < b)
    {
      return -1 * isDesc;
    }

    return;
  }

  handleDestroy(elmtID)
  {
    this.props.onDestroy(elmtID);
  }

  sortProducts() {
    let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
    return productsAsArray.sort(this.sortByColumnAndDirection);
  }
  render () {
    let rows = [];
    this.sortProducts().forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return; 
      }
      rows.push( 
        <ProductRow product={product} key={product.id} toDestroy={this.handleDestroy} />
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <SortableColumnHeader 
              currentSort={this.state.sort}
              toChange={this.handlingChange}
              column="name"
              />
            <SortableColumnHeader 
              currentSort={this.state.sort}
              toChange={this.handlingChange}
              column="price"
            />
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

};

export default ProducTable;
