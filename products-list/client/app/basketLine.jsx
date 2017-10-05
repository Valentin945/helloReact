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
        let tmp2 = parseFloat(this.props.product.quantite, 10);
        let tmp = parseFloat(this.props.product.price.replace(/[^\d.]/g, ''), 10);
        console.log(tmp);
        return tmp * tmp2;
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
                <td>{this.calculator()}</td>
            </tr>
            
        );
    }

}

export default BasketLine;