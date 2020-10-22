import React, {useState} from 'react';
import axios from 'axios';
import {ContactContainer, InputForm, InputText, InputMessage, Button} from './StyledContactForm'
import ReactGA from 'react-ga';

export const ContactForm = () => {
  const [inputs, setInputs] = useState({name: '', email: '', phone: '', message: ''});

  const sendGAEvent = (clickedInput) => { 
    ReactGA.event({ category: 'Contact', action: 'Form_input_clicked', label: clickedInput }); 
  };
  
  const handleChange = e => {
    const {name, value} = e.target
    setInputs(prev => ({...prev, [name]: value }))
  }
  const handleSubmit = e => {
    ReactGA.event({ category: 'Contact', action: 'Form_button_clicked', label: 'Send_button' });
    e.preventDefault()
    const {name,email,phone,message} = inputs
    axios.post('/sendtome', {
      name,
      email,
      phone,
      text: message
    }) 
  }

  return (
    <ContactContainer>
        <InputForm onSubmit={handleSubmit}>
            <InputText placeholder={'Name'} name={'name'} value={inputs.name} onChange={handleChange} onFocus={() => sendGAEvent('Name')}/>
            <InputText placeholder={'Email'} name={'email'} value={inputs.email} onChange={handleChange} onFocus={() => sendGAEvent('Email')}/>
            <InputText placeholder={'Phone'} name={'phone'} value={inputs.phone} onChange={handleChange} onFocus={() => sendGAEvent('Phone')}/>
            <InputMessage placeholder={'Write something'} name={'message'} value={inputs.message} onChange={handleChange} cols="30" rows="10" onFocus={() => sendGAEvent('Message')}/>
            <Button value={'SEND MESSAGE'}/>
            {/* show snackbar with message sent status (success or fail) */}
        </InputForm>
    </ContactContainer>
  );
};