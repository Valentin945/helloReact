import React from 'react'
import './popup.css'

class Popup extends React.Component
{
    constructor(props)
    {
        super(props);
        this.saveDir = this.saveDir.bind(this);
        this.Cool = this.Cool.bind(this);
        this.Cool2 = this.Cool2.bind(this);
        this.state = {
            name: ''
        }
    }

    
    Cool(event)
    {
        this.setState({name: event.target.value});
    }

    Cool2(event)
    {
        console.log(event.target.value)
    }

    saveDir()
    {
        this.props.onSaveDir(this.state.name)
    }

    render()
    {   
        let sms = '';
        return(
            <div className="popup">
                <div className="popup_inner">
                    <input
                        type="text"
                        placeholder="Name.."
                        onChange={this.Cool}
                        name="dirName"
                    />
                    <textarea placeholder='Switton' name='Explain' onChange={this.Cool2}rows="10" cols="50"/>
                    <form>
                        <input
                            type="radio"
                            value="oj"
                            name="test"
                        />
                        <input
                            type="radio"
                            value="nija"
                            name='test'
                        /> nika
                    </form>
                    <button onClick={this.saveDir}>Valid</button>
                </div>
            </div>
        );
    }
}

export default Popup;