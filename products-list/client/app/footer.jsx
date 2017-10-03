import React from 'react'
import {Link} from 'react-router-dom'

class Footer extends React.Component
{
    render()
    {
        return(
            <div>
                <Link to="/Payment"> Basket </Link>
            </div>
        );
    }
}

export default Footer;