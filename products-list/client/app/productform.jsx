import React from 'react'

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name:''};


class ProductForm extends React.Component
{
    constructor(props)
    {
      super(props);
      this.handleSave = this.handleSave.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.isEmpty = this.isEmpty.bind(this);
      this.state = {
        product: Object.assign({}, RESET_VALUES),
        errors: {},
        test : '',
        subName: 'save'
      };
    }

    isEmpty()
    {
      let empty = false;
      let product = this.state.product;
      let errors = {};
      for (var id in product)
      {
        if (id === 'stocked' || id === 'id' || id ==='name')
        {
          continue;
        }
        if (product[id] === '')
        {
          console.log(id)
          empty = true;
          var nop = id;
          errors[id] = "This field shouldn't be empty " + product[id] ;
        }
      }
      this.setState((prevState) =>
      {
        return {errors};
      });

      return empty;
    }

    componentWillReceiveProps(nextProps)
    {
	  console.log(nextProps);
      if (nextProps.currentProduct.edit === false)
      {
          return;
      }

      this.setState({subName: 'edit'});

      this.setState((prevState) =>
      {
        let product = nextProps.currentProduct.product;
        return {product};
      });

    }


    handleChange(e) {
      let target = e.target;
      let value = target.type === 'checkbox'? target.checked: target.value;
      let name = target.name;

      this.setState((prevState) => {
        prevState.product[name] = value;
        return {product: prevState.product};
      });
    }

    handleSave(e) {
      if (this.isEmpty())
      {
        e.preventDefault();
        return;
      }
      if (this.state.subName === 'edit')
      {
        this.props.toEdit(this.state.product.id);
      }
      else
      {
        this.props.onSave(this.state.product);
      }
      e.preventDefault();

    }

  render() {
    return (
      <form>
        <h3> Enter a new product </h3>
        <p>
          <label>
            Name
            <br />
            <input type="text"
             name="name"
             onChange={this.handleChange}
             value={this.state.product.name}
            />
          </label>
        </p>
        <p>
          <label>
            Category
            <br />
            <input
             type="text"
             name="category"
             onChange={this.handleChange}
             value={this.state.product.category}
            />
          </label>
        </p>
        <p>
          <label>
            Price
            <br />
            <input
             type="text"
             name="price"
             onChange={this.handleChange}
             category="price"
             value={this.state.product.price}
            />
          </label>
        </p>
        <p>
          <label>
            <input
             type="checkbox"
             name="stocked"
             onChange={this.handleChange}
             checked={this.state.product.stocked}
            />
            &nbsp;In stock?
          </label>
        </p>
        <input
         type="submit"
         value={this.state.subName}
         onClick={this.handleSave}
        />
      </form>
    );
  }
}

export default ProductForm;
