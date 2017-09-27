import React from 'react'

class ProductForm extends React.Component {
  render() {
    return (
      <form>
        <h3> Enter a new product </h3>
        <p>
          <label>
            Name
            <br />
            <input type="text" name="name"/>
          </label>
        </p>
        <p>
          <label>
            Category
            <br />
            <input type="text" name="category"/>
          </label>
        </p>
        <p>
          <label>
            Price
            <br />
            <input type="text" name="price"/>
          </label>
        </p>
        <p>
          <label>2
            <input type="checkbox" name="stocked"/>
            &nbsp;In stock?
          </label>
        </p>
        <input type="submit" value="save"/>
      </form>
    );
  }
}

export default ProductForm;
