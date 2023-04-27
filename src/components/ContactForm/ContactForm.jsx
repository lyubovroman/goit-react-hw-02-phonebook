import React, { Component } from 'react';


import PropTypes from 'prop-types';
import { Form, Button,Label, Input ,Title} from './ContactForm.styled';

export class ContactForm extends Component {
      state = {
    name: '',
    number: '',
  };
    

   handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({[name]:value})
};

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.resert();
    };

    resert = ()  =>{
        this.setState({name: '',
    number: ''})
    }




    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
               <Title>PhoneBook</Title> 
                <Label>Name
                   <Input
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        placeholder='Enter your name'
                        onChange={this.handleChange}
                        value={this.state.name}

                        required
                    />
                    </Label>

                
                <Label>Number
                    <Input
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        placeholder='Enter your number'
                        onChange={this.handleChange}
                        value={this.state.number}
                        required
                    />
                </Label>
                <Button type="submit">Add contact</Button>
        </Form>
    )
}
}

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    )
}