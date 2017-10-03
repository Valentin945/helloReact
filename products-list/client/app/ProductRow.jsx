import React from 'react'
import './ProductRow.css'

class ProductRow extends React.Component {
  constructor(props)
  {
    super(props);
    this.onDel = this.onDel.bind(this);
    this.onSet = this.onSet.bind(this);
    this.state = {
      commander: [],
      lot: [<option value="20">on </option>, <option value="30"> in </option>],
      count: 0
    };
  }

  onSet()
  {
    this.props.toEdit(this.props.product.id);
  }

  onDel()
  {
    this.props.toDestroy(this.props.product.id);
  }

  onHow(select)
  {
    console.log(select);
    switch(select.value)
    {
      case 1:
        this.setState(prevState => {
          let legend = this.state.lot;
          legend.push(<option value={this.state.count}> 1 </option>);
          return {legend};
        });
        break;
      default:
        break;
    }
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
        <td>
          <button onClick={this.onSet} className={'SettingButton'}>Edit</button>
        </td>
        <td>
          Quantite
          <select onchange={this.onHow(this)}>
            <option value="1">1 </option>
            <option value="2">2 </option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="100">100</option>
          </select>
        </td>
        <td>
          Lot
          <select>
            {this.state.lot}
          </select>
        </td>
      </tr>
    );
  }
}

export default ProductRow;
