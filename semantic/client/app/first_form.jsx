import React from 'react'
import {
            Icon,
            Label,
            Grid,
            Form,
            Input,
            Message,
            Select,
            Dropdown
       } from 'semantic-ui-react'
import './imgs.css'


const RESET_VALUES = {firstName: '', lastName: '', gender: '', mailAdress: '', domaine: '', phoneNumber: '', familySituation: '', agree: false}

const options = [
    { text: 'Female', value: 'female'},
    { text: 'Male', value: 'male'},
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
            showError: false,
            showWarning: false,
            lastChange: '',
            errorDomaine: new Set(),
            errorList: [],
            warningList: []
        };

        

    }

    handleFirstName()
    {
        let {firstName} = this.state.obj;
        if (/^[A-Za-z\-]+$/.test(firstName))
        {  
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
        }
    }

    handleLastName()
    {
        let {lastName} = this.state.obj;

        if (/^[A-Za-z\- ]+$/.test(lastName))
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
        if (/^[A-Za-z0-9._-]+\@[a-z0-9._]+\.[a-z]{2,6}$/.test(mailAdress))
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
        
        if (domaine.toString().length != 1)
        {
            
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

        if (name != 'mainForm')
        {
            this.setState((prevState) => 
            {
                
                prevState.obj[name] = value;
                return prevState;
            })
        }

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
        let error = false;
        let {errorList, warningList, showError, showWarning, errorDomaine} = this.state;

        errorList = [];
        warningList = [];
        showWarning = false;
        showError = false;

        if (errorDomaine.size > 0)
        {
            showError = true;
            error = true;
            for (let item of errorDomaine)
            {  
                errorList.push(`${item} there are errors`);
            }
        }
 
        let {obj} = this.state;
        for (var prop in this.state.obj)
        {
            if (typeof obj[prop] === 'string')
            {
                if (obj[prop].length === 0)
                {
                    error = true;
                    showWarning = true
                    warningList.push(`The field ${prop} can't be empty`)
                }
            }
            else if (typeof obj[prop] === 'boolean')
            {
                if (obj[prop] === false)
                {
                    error = true;
                    showError = true;
                    errorList.push('You have to accept the terms and conditions.')
                    
                }
            }
        }

        this.setState({
            errorList: errorList,
            warningList: warningList,
            showError: showError,
            showWarning: showWarning,
            errorDomaine: errorDomaine
        })

        if (!error)
        {
            
            this.props.getData(this.state.obj);
        }

        e.preventDefault();
    }

    render()
    {
        let {obj} = this.state;
        let {familySituation} = obj
        // console.log(gender)
        return (
            <div className="ui sixteen wide column">
                    { <Form id="foo" name="mainForm" onSubmit={this.handleSubmit}>
                        <Form.Group width={16}>
                            <Form.Input icon={<Icon name='help circle' inverted  circular link className='info_error'/>} name="firstName" placeholder='First name' label="First name" error={this.state.errorDomaine.has('firstName') } onChange={this.handleChange}/>
                            <Form.Input name="lastName" placeholder='Last name' label='Last name'  error={this.state.errorDomaine.has('lastName')} onChange={this.handleChange}/>
                            <Form.Select label='Gender' options={options} placeholder='Gender' onChange={(e) => {   obj.gender = e.target.value;
                                                                                                                    this.setState({obj: obj})}}/>
                        </Form.Group>
                        <Form.Input name="mailAdress" label='Mail Adress' error={this.state.errorDomaine.has('mailAdress') } placeholder='secretaire@wallix.com' onChange={this.handleChange}/>
                        <Form.Group widths={16}>
                            <Form.Field inline error={this.state.errorDomaine.has('domaine') } width={4}>
                                <Label ribbon size='large' > Domain number: <em>+33</em></Label>
                                <Input name="domaine" placeholder='X' onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field inline error={this.state.errorDomaine.has('phoneNumber')} width={12}>
                                <Label  ribbon size='large'> Phone number </Label>
                                <Input name="phoneNumber"  placeholder='XX XX XX XX' onChange={this.handleChange} />
                            </Form.Field>
                        </Form.Group> 
                   
                        <Form.Group className="family"> 
                            <label>Family Situation: </label>
                             <Form.Radio label='Single' value='sg'  checked={familySituation  ==='sg'} onChange={() => {    let tmp = this.state.obj;
                                                                                                                            tmp.familySituation = 'sg';
                                                                                                                            this.setState({obj: tmp})}}/>
                             <Form.Radio label='Married' value='mr' checked={familySituation === 'mr'}  onChange={() => {   let tmp = this.state.obj;
                                                                                                                            tmp.familySituation = 'mr'
                                                                                                                            this.setState({obj: tmp})}}/>
                             <Form.Radio label='Engaged' value='en' checked={familySituation ==='en'} onChange={() => {   let tmp = this.state.obj;
                                                                                                                            tmp.familySituation = 'en';
                                                                                                                            this.setState({obj: tmp})}}/>
                        </Form.Group>
                        <Form.Group>
                             <Form.Checkbox label='I agree to the Terms and Conditions' onChange={() => {   let tmp = this.state.obj;
                                                                                                            tmp.agree = !tmp.agree;
                                                                                                            this.setState({obj: tmp})}}/>
                        </Form.Group>
                        <Form.Button primary content='Submit'/>

                     


                    </Form> }
                       <Message hidden={!this.state.showError} error header='Errors' list={this.state.errorList}/>
                       <Message hidden={!this.state.showWarning} warning header='Warning' list={this.state.warningList}/>
                        
                      
                </div>

        );
    }
}

export default FirstForm;