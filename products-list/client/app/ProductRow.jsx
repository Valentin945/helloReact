import React from 'react'
import './ProductRow.css'

class ProductRow extends React.Component {
  constructor(props)
  {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.onDel = this.onDel.bind(this);
    this.onSet = this.onSet.bind(this);
    this.onHow = this.onHow.bind(this);
    this.inBasket = this.inBasket.bind(this);
    const items = [
      {
        value: 0,
        label: "1"
      }
    ]
    const lot = items.map((item, index) => {
      return (
        <option key={index} value={item.value}>{item.label}</option>
      )
    })
    this.state = {
      commander: {
        quantite: 1,
        lot: 1,
        name: this.props.product.name,
        price: this.props.product.price
      },
      lot,
      count: 1
    };
  }

  inBasket()
  {
    this.props.toCommand(this.state.commander);
  }

  onSet()
  {
    this.props.toEdit(this.props.product.id);
  }

  onDel()
  {
    this.props.toDestroy(this.props.product.id);
  }

  handleSelect(val)
  {
    console.log(val)
    switch(val)
    {
      case 1:
        this.setState(prevState =>
        {
          let lot = prevState.lot;
          lot = [<option key='0' value='1'>1</option>];
          return {lot};
        });
        break;
      case 5:
        console.log('test');
        this.setState(prevState => 
        {
          let lot = prevState.lot;
          lot = [<option key='0' value='1'>1</option>, <option key='1' value='2'>5</option>]
          return {lot}
        });
        break;
      default:
        this.setState(prevState => {
          let lot = prevState.lot;
          lot = [<option key='0' value='1'>1</option>, <option key='1' value='2'>5</option>, <option key='2' value='3'>10</option>];
          return {lot};
        });
        break;
    }
    console.log(this.state.lot)
  }

  onHow(select)
  {
    console.log(select);
  
 
    const { value, options, selectedIndex } = select.target
    console.log(options[selectedIndex].innerHTML)

    switch(options[selectedIndex].innerHTML)
    {
      case '1':
        this.handleSelect(1);
        break;
      case '5':
        this.handleSelect(5);
        break;
      case '10':
        this.handleSelect(10);
        break;
      case '100':
        this.handleSelect(100);
        break;
      default:
        break;
    }
    this.setState(prevState => {
        let count = prevState.count + 1;
        return {count};
    });
    this.setState(prevState => {
        let commander = prevState.commander;
        commander.quantite = options[selectedIndex].innerHTML;
        return {commander};
    });
    console.log(this.state.commander);
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
          <select onChange={this.onHow}>
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">5</option>
            <option value="3">10</option>
            <option value="4">100</option>
          </select>
        </td>
        <td>
          Lot
          <select>
            {this.state.lot}
          </select>
        </td>
        <td>
          <button onClick={this.inBasket}>Add</button>
        </td>
      </tr>
    );
  }
}

export default ProductRow;