import React from 'react'
import './ProductRow.css'

class ProductRow extends React.Component {
  constructor(props)
  {
    super(props);
    this.onDel = this.onDel.bind(this);
  }

  onDel()
  {
    this.props.toDestroy(this.props.product.id);
  }

  render() {
    return (
      <tr>
        <td>
          <span className={this.props.product.stocked? '': 'ProductRow-out-of-stock'}>
          {this.props.product.name}
          </span>
        </td>
        <td>
          {this.props.product.price}
        </td>
        <td>
          <button onClick={this.onDel}>x</button>
        </td>
      </tr>
    );
  }
}

export default ProductRow;
