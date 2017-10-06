import React from 'react'
//import Todo from './todo.jsx'
import {Link} from 'react-router-dom'
import Popup from './popup.jsx'


class DossierList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.onHow = this.onHow.bind(this);
        this.togglePopup = this.togglePopup.bind(this)
        this.state = {
            showPopup: false
        }
    }

    togglePopup(value)
    {
        let val = localStorage.getItem('dir');
        if (!val)
        {
            val = [value];
        }
        else
        {
            val = JSON.parse(val);
            val.push(value);
        }
        localStorage.setItem('dir', JSON.stringify(val));
        this.setState({showPopup: !this.state.showPopup});
    }

    onHow(event)
    {
        let {value} = event.target;
        if (value === 'add')
        {
            this.setState({showPopup: true});
            return;
        }
    }

    render(){
        let rows = [];
        let val = localStorage.getItem('dir');
        if (val)
        {
            val = JSON.parse(val)
            val.forEach((val) =>
                {
                    rows.push(
                        <option value={val}>{val} </option>
                    )
                }
            );
        }
        return (
            <div>
                <select onChange={this.onHow}>
                    <option value="add">Add</option>
                    <option value="Front">Front</option>
                    <option value="Back">Back</option>
                    {rows}
                </select>
                {
                    this.state.showPopup?
                    <Popup
                      onSaveDir={this.togglePopup}
                    />: null
                }
            </div>
        );
    }
}

export default DossierList;