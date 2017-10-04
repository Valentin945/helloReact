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
        let rows = [];
        this.props.products.forEach(product => {
            rows.push(
                <BasketLine
                    product = {product}
                />
            );
        });

        return(
            
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Your name </th>
                            <th>Your Price </th>
                            <th>Your quantity </th>
                            <th>Your lot </th>
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