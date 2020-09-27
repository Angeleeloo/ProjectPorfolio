import React from 'react';
import {SectionContainer, SectionTitle, Separator} from '../../Components/StyledMainPage.js';
import {ContactContainer, InputForm, Input, Button, ContactDetails, Title, Subtitle, Detail} from './StyledContact'

export const Contact = () => {
  return (
    <SectionContainer id={'Contact'}>
        <SectionTitle>Contact</SectionTitle>
        <Separator>___</Separator>
        <ContactContainer>
            <InputForm>
                <Input>Name</Input>
                <Input>Email</Input>
                <Input>Phone</Input>
                <Input>Message</Input>
                <Button>SEND MESSAGE</Button>
            </InputForm>
            <ContactDetails>
                <Title>Let’s talk</Title>
                <Subtitle>Got an offer? Wanna collaborate?</Subtitle>
                <Detail>P - +972-54-544-3223</Detail>
                <Detail>E - angelica.avm@gmail.com</Detail>
                <Detail>A - Tel Aviv, Israel</Detail>
            </ContactDetails>
        </ContactContainer>
    </SectionContainer>
  );
};