import React from 'react';
import {SectionContainer, SectionTitle, Separator} from '../../Components/StyledMainPage.js';
import {ContactContainer, InputForm, InputText, InputMessage, Button, ContactDetails, Title, Subtitle, Detail} from './StyledContact'

export const Contact = () => {
  return (
    <SectionContainer id={'Contact'}>
        <SectionTitle>Contact</SectionTitle>
        <Separator>___</Separator>
        <ContactContainer>
            <InputForm>
                <InputText id={'name'} name={'name'} placeholder={'Name'}/>
                <InputText id={'email'} name={'email'} placeholder={'Email'}/>
                <InputText id={'phone'} name={'phone'} placeholder={'Phone'}/>
                <InputMessage id={'message'} name={'message'} placeholder={'Write something'}/>
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