import React from 'react';
import ReactGA from 'react-ga';
import {Section} from '../../HOCs/Section/Section.js';
import {ContactContainer, Title, Subtitle, ContactDetail, ContactMeGif} from './StyledContact';

export const Contact = () => {
  const clickContactLink = (clickedLink) => {
    ReactGA.event({ category: 'Contact', action: 'Email_clicked' })
    window.location.href = clickedLink;
  };

  return (
    <Section title={'Contact'}>
        <ContactContainer>
            <Title>Let's talk</Title>
            <Subtitle>Wanna collaborate? Got an offer?</Subtitle>
            <ContactDetail onClick={() => clickContactLink(`mailto:angelicaisonline@gmail.com`)}>angelicaisonline@gmail.com</ContactDetail>
            <ContactMeGif />
        </ContactContainer>
    </Section>
  );
};