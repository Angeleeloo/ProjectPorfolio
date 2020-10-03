import React, {useState} from 'react';
import axios from 'axios';
import {SectionContainer, SectionTitle, Separator} from '../../Components/StyledMainPage.js';
import {ContactContainer, InputForm, InputText, InputMessage, Button, ContactDetails, Title, Subtitle, Detail} from './StyledContact'

export const Contact = () => {
  const [inputs, setInputs] = useState({name: '', email: '', phone: '', message: ''})
  const handleChange = e => {
    const {name, value} = e.target
    setInputs(prev => ({...prev, [name]: value }))
  }
  const handleSubmit = e => {
    e.preventDefault()
    //destructure from inputs 
    const {name,email,phone,message} = inputs
    axios.post('/sendtome', {
      //make an object to be handled from req.body on the backend. 
      name,
      email,
      phone,
      text: message
    }) 
  }

  return (
    <SectionContainer id={'Contact'}>
        <SectionTitle>Contact</SectionTitle>
        <Separator>___</Separator>
        <ContactContainer>
            <InputForm onSubmit={handleSubmit}>
                <InputText placeholder={'Name'} name={'name'} value={inputs.name} onChange={handleChange}/>
                <InputText placeholder={'Email'} name={'email'} value={inputs.email} onChange={handleChange} />
                <InputText placeholder={'Phone'} name={'phone'} value={inputs.phone} onChange={handleChange} />
                <InputMessage placeholder={'Write something'} name={'message'} value={inputs.message} onChange={handleChange} cols="30" rows="10"/>
                <Button value={'SEND MESSAGE'}/>
            </InputForm>
            <ContactDetails>
                <Title>Let’s talk</Title>
                <Subtitle>Got an offer? Wanna collaborate?</Subtitle>
                <Detail href={'tel:+972-54-544-3223'}>P - +972-54-544-3223</Detail>
                <Detail href={'mailto:angelica.avm@gmail.com'}>E - angelica.avm@gmail.com</Detail>
                <Detail href={'https://goo.gl/maps/a3mni3CdwYnQPYA29'} target={'_blank'}>A - Tel Aviv, Israel</Detail>
            </ContactDetails>
        </ContactContainer>
    </SectionContainer>
  );
};