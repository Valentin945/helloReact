import React from 'react'

class BasketLine extends React.Component
{
    constructor(props)
    {
        super(props);
        this.calculator = this.calculator.bind(this);
    }

    calculator()
    {

    }

    render()
    {
        return(
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                <td>{this.props.product.quantite}</td>
                <td>{this.props.product.lot}</td>
                <td> <h1> Coming soon </h1></td>
                <td>{this.calculator}</td>
            </tr>
            
        );
    }

}

export default BasketLine;