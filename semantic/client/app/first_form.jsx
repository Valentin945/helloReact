import React from 'react'
import {
            Icon,
            Label,
            Grid,
            Form,
            Input
       } from 'semantic-ui-react'
import './imgs.css'


const RESET_VALUES = {firstName: '', lastName: '', gender: '', mailAdress: '', domaine: '', phoneNumber: '', familySituation: '', agree: false}

const options = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'}    
]

class FirstForm extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleMailAdress = this.handleMailAdress.bind(this);
        this.handleDomaine = this.handleDomaine.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);

        this.state = 
        {
            obj: Object.assign({}, RESET_VALUES),
            value: '',
            lastChange: '',
            errorDomaine: new Set()
        };

        

    }

    handleFirstName()
    {
        let {firstName} = this.state.obj;
        if (/^[a-z\-]+$/.test(firstName))
        {
            console.log(firstName)     
            this.setState(prevState => {
                prevState.errorDomaine.delete('firstName')
                return(prevState)
            });
        }
        else
        {
            this.setState(prevState => {
                prevState.errorDomaine.add('firstName')
                return (prevState)
            });
            console.log('bad')
        }
    }

    handleLastName()
    {
        let {lastName} = this.state.obj;

        if (/^[a-z\- ]+$/.test(lastName))
        {
            this.setState(prevState => {
                prevState.errorDomaine.delete('lastName')
                return (prevState)
            });
        }
        else
        {
            this.setState(prevState => {
                prevState.errorDomaine.add('lastName')
                return prevState;
            });
            
        }
    }

    handleMailAdress()
    {
        let {mailAdress} = this.state.obj;
        if (/^[a-z0-9._-]+\@[a-z0-9._]+\.[a-z]{2,6}$/.test(mailAdress))
        {
            
            this.setState(prevState => {
                prevState.errorDomaine.delete('mailAdress')
            });
            
        }
        else
        {
            this.setState(prevState => {
                prevState.errorDomaine.add('mailAdress')
            });
        }
    }

    handleDomaine()
    {
        let {domaine} = this.state.obj;
        console.log(domaine.toString().length)
        
        if (domaine.toString().length != 1)
        {
            console.log('Should have only one char');
            this.setState(prevState => {
                prevState.errorDomaine.add('domaine')
            });
            /// Doing an error message
            return;
        }
        else
        {
            if (/^[1-9]$/.test(domaine))
            {
                this.setState(prevState => {
                    prevState.errorDomaine.delete('domaine')
                });
                
            }
            else
            {
                this.setState(prevState => {
                    prevState.errorDomaine.add('domaine');
                });
                console.log('not a digit');
            }
        }
    }

    handlePhoneNumber(value)
    {
        let {phoneNumber} = this.state.obj;

        if (/^[0-9]{8}$/.test(phoneNumber))
        {
            this.setState(prevState => {
                prevState.errorDomaine.delete('phoneNumber')
                return prevState;
            })
        }
        else
        {
            this.setState(prevState => {
                prevState.errorDomaine.add('phoneNumber');
                return prevState;
            })
        }
    }

    handleChange(e)
    {
        let {name,  value, type} = e.target;
        let {lastChange} = this.state;

        console.log(this.state)
        this.setState((prevState) => 
        {
            prevState.obj[name] = value;
            return prevState;
        })

        if (lastChange === 'domaine' && name != 'domaine')
        {
            this.handleDomaine();
 
        }

        if (name != 'phoneNumber' && 'phoneNumber' === lastChange)
        {
            this.handlePhoneNumber();
        }

        if (name != 'firstName' && 'firstName' === lastChange)
        {
            this.handleFirstName();
        }

        if (name != 'lastName' && 'lastName' === lastChange)
        {
            this.handleLastName()
        }

        if (name != 'mailAdress' && 'mailAdress' === lastChange)
        {
            this.handleMailAdress();
        }

        this.setState({lastChange: name});

    }


    handleSubmit(e)
    {
        handleChange('');   
        // if (this.state.error)
        // {

        // }

        e.preventDefault();
    }

    render()
    {
        return (
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group width={16}>
                            <Form.Input icon={<Icon name='help circle' inverted  circular link className='visible'/>} name="firstName" placeholder='First name' label="First name" error={this.state.errorDomaine.has('firstName') } onChange={this.handleChange}/>
                            <Form.Input name="lastName" placeholder='Last name' label='Last name'  error={this.state.errorDomaine.has('lastName')} onChange={this.handleChange}/>
                            <Form.Select name="gender" label='Gender' options={options} placeholder='Gender' />
                        </Form.Group>
                        <Form.Input name="mailAdress" label='Mail Adress' error={this.state.errorDomaine.has('mailAdress') } placeholder='secretaire@wallix.com' onChange={this.handleChange}/>
                        <Form.Group widths={16}>
                            <Form.Field inline error={this.state.errorDomaine.has('domaine') } width={4}>
                                <Label ribbon size='large' > Domain number: <em>+33</em></Label>
                                <Input name="domaine" placeholder='X' onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field inline error={this.state.errorDomaine.has('phoneNumber')} width={12}>
                                <Label ribbon size='large'> Phone number </Label>
                                <Input name="phoneNumber"  placeholder='XX XX XX XX' onChange={this.handleChange} />
                            </Form.Field>
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