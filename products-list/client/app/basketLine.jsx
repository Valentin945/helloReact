import React from 'react'

class BasketLine extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                <td>{this.props.product.quantite}</td>
                <td>{this.props.product.lot}</td>
                <td> <h1 style='backgroundColor: Black color: white;'> Coming soon </h1></td>
            </tr>

        );
    }

}

export default BasketLine;