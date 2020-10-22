import React from 'react';
import ReactGA from 'react-ga';
import {ContactDetailsContainer, Title, Subtitle, Detail} from './StyledContactDetails';

export const ContactDetails = (props) => {
  const {title, subtitle, telephone, email, locationLink, locationText, trackSection} = props;
  const clickContactLink = (clickedLink) => {
    ReactGA.event({ category: trackSection, action: 'Detail_clicked', label: clickedLink })
    window.location.href = clickedLink;
  };

  return (
    <ContactDetailsContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Detail onClick={() => clickContactLink(`tel:${telephone}`)}>Phone - {telephone}</Detail>
        <Detail onClick={() => clickContactLink(`mailto:${email}`)}>Email - {email}</Detail>
        <Detail onClick={() => clickContactLink(locationLink)} target={'_blank'}>Location - {locationText}</Detail>
    </ContactDetailsContainer>
  );
};