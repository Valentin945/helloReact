import React from 'react'
import BasketLine from './basketLine.jsx'

class BasketComponent extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let count = 0;
        let rows = [];
        this.props.products.forEach(product => {
            rows.push(
                <BasketLine
                    key={count}
                    product = {product}
                />
            );
            count++;
        });

        return(
            
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Your name </th>
                            <th>Price for one </th>
                            <th>Your quantity </th>
                            <th>Your lot </th>
                            <th>Product</th>
                            <th>Price for the quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BasketComponent;