import React, {useState} from 'react';
import axios from 'axios';
import {Section} from '../../HOCs/Section/Section.js';
import {ContactContainer, InputForm, InputText, InputMessage, Button, ContactDetails, Title, Subtitle, Detail} from './StyledContact'
import ReactGA from '../../Common/ga.js';

export const Contact = () => {
  const [inputs, setInputs] = useState({name: '', email: '', phone: '', message: ''});
  const sendGAEvent = (clickedInput) => { ReactGA.event({ category: 'Contact', action: 'Form_input_clicked', label: clickedInput }); };
  const handleChange = e => {
    const {name, value} = e.target
    setInputs(prev => ({...prev, [name]: value }))
  }
  const handleSubmit = e => {
    ReactGA.event({ category: 'Contact', action: 'Form_button_clicked', label: 'Send_button' });
    alert(`Thanks! I'll get your message shortly.`);
    e.preventDefault()
    const {name,email,phone,message} = inputs
    axios.post('/sendtome', {
      name,
      email,
      phone,
      text: message
    }) 
  }
  const clickContactLink = (clickedLink) => {
    ReactGA.event({ category: 'Contact', action: 'Clicked_link', label: clickedLink })
    window.location.href = clickedLink;
  };

  return (
    <Section id={'Contact'} title={'Contact'}>
        <ContactContainer>
            <InputForm onSubmit={handleSubmit}>
                <InputText placeholder={'Name'} name={'name'} value={inputs.name} onChange={handleChange} onFocus={() => sendGAEvent('Name')}/>
                <InputText placeholder={'Email'} name={'email'} value={inputs.email} onChange={handleChange} onFocus={() => sendGAEvent('Email')}/>
                <InputText placeholder={'Phone'} name={'phone'} value={inputs.phone} onChange={handleChange} onFocus={() => sendGAEvent('Phone')}/>
                <InputMessage placeholder={'Write something'} name={'message'} value={inputs.message} onChange={handleChange} cols="30" rows="10" onFocus={() => sendGAEvent('Message')}/>
                <Button value={'SEND MESSAGE'}/>
                {/* show snackbar with message sent status (success or fail) */}
            </InputForm>
            <ContactDetails>
                <Title>Let’s talk</Title>
                <Subtitle>Wanna collaborate? Got an offer?</Subtitle>
                <Detail onClick={() => clickContactLink('tel:+123-45-678-9012')}>P - +123-45-678-9012</Detail>
                <Detail onClick={() => clickContactLink('mailto:testtest@test.com')}>E - testtest@test.com</Detail>
                <Detail onClick={() => clickContactLink('https://goo.gl/maps/a3mni3CdwYnQPYA29')} target={'_blank'}>A - City, Country</Detail>
            </ContactDetails>
        </ContactContainer>
    </Section>
  );
};