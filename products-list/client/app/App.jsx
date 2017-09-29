/**
  \author Valentin LAMBERT
  \brief Main file for the react parts of the project
*/

import React from 'react'
import Filters from './filters.jsx'
import ProducTable from './productable.jsx'
import ProductForm from './productform.jsx'

var PRODUCTS = {

  '1': {id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
  '2': {id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Cello'},
  '3': {id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false,
        name: 'Fortepiano'},
  '4': {id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
  '5': {id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '6': {id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'}

};

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.saveProduct = this.saveProduct.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handlingEdit = this.handlingEdit.bind(this);
    this.state = {
      filterText: '',
      inStockOnly: false,
      products: PRODUCTS,
      formProducts: {
        edit: false,
        product: {}
      }
    };
  }

  handlingEdit(id)
  {
    this.setState((prevState) =>
    {
      let formProducts = prevState.formProducts;
      formProducts.edit = true;
      formProducts.product = prevState.products[id];
      return {formProducts};
    });
  }


  handleDestroy(productId)
  {
    this.setState((prevState) => {
      let products = prevState.products;
      delete products[productId];
      return {products};
    });

  }

  saveProduct(product) {
    product.id = new Date().getTime();
    this.setState((prevState) => {
      let products = prevState.products;
      products[product.id] = product;
      return {products};
    });
  }

  handleFilter(filterInput)
  {
    this.setState(filterInput);
  }

  render() {
    return (
      <div>
        <Filters
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilter={this.handleFilter}
        />
        <ProducTable
          products={PRODUCTS}
          toEdit={this.handlingEdit}
          onDestroy={this.handleDestroy}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductForm
          currentProduct={this.state.formProducts}
          onSave={this.saveProduct}
        />
      </div>
    );
  }

}

export default App;
