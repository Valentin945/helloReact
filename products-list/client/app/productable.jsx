import React from 'react';
import ProductRow from './ProductRow.jsx';
import SortableColumnHeader from './SortableColumnHeader.jsx';

class ProducTable extends React.Component {
  render () {
    let productsAsArray = Object.keys(this.props.products).map((pi) => this.props.products[pi]);
    let rows = [];
    productsAsArray.forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return; 
      }
      rows.push  
        <ProductRow product={product} key={product.id} />
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <SortableColumnHeader column="name"/>
            <SortableColumnHeader column="price"/>
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
