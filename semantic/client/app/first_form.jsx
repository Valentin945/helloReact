import React from 'react'
import {
            Grid,
            Form,
            Input
       } from 'semantic-ui-react'
import './imgs.css'


const RESET_VALUES = {firstName: '', lastName: '', gender: '', mail: '', domaine: '', phoneNumber: '', familySituation: '', agree: false}

const options = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'}    
]

class FirstForm extends React.Component
{
    constructor(props)
    {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
        this.handleDomaine = this.handleDomaine.bind(this);
        this.handleDigit = this.handleDigit.bind(this);
        
        this.state = 
        {
            obj = Object.assign({}, RESET_VALUES),
            value: ''
        }
    }

    handleDomaine()
    {

    }

    handleDigit()
    {
        
    }

    handleChange(e)
    {
        let {name,  value, type} = e.target;
        if (name === 'domaine')
        {
            this.handleDomaine(value);
            return;
        }

    }


    handleSubmit(e)
    {



        e.preventDefault();
    }

    render()
    {
        return (
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group width={16}>
                            <Form.Input name="FirstName" placeholder='First name' label="First name" onChange={this.handleChange}/>
                            <Form.Input name="LastName" placeholder='Last name' label='Last name'  />
                            <Form.Select name="Gender" label='Gender' options={options} placeholder='Gender' />
                        </Form.Group>
                        <Form.Input name="MailAdress"label='Mail Adress' placeholder='secretaire@wallix.com'/>
                        <Form.Group widths={16}>
                            <Form.Field inline>
                                <label> Phone number: <em>+33</em></label>
                                <Input name="domaine" placeholder='X' onChange={this.onChange}/>
                            </Form.Field>
                            <Form.Input name="phoneNumber" placeholder='XX XX XX XX'/>
                        </Form.Group>
                        <Form.Group className="family"> 
                            <label>Family Situation: </label>
                             <Form.Radio label='Single' value='sg' checked={this.state.value === 'sg'} onChange={() => {this.setState({value: 'sg'})}}/>
                             <Form.Radio label='Married' value='mr' checked={this.state.value === 'mr'} onChange={() => {this.setState({value: 'mr'})}}/>
                             <Form.Radio label='Engaged' value='en' checked={this.state.value === 'en'} onChange={() => {this.setState({value: 'en'})}}/>
                        </Form.Group>
                        <Form.Group>
                             <Form.Checkbox label='I agree to the Terms and Conditions'/>
                        </Form.Group>
                        <Form.Button primary content='Submit'/>
                    </Form>

        );
    }
}

export default FirstForm;