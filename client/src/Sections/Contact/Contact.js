import React from 'react';
import {Section} from '../../HOCs/Section/Section.js';
import {ContactContainer, ContactMeGif} from './StyledContact'
import {ContactDetails} from '../../Components/ContactDetails/ContactDetails.js';

export const Contact = () => {

  return (
    <Section title={'Contact'}>
        <ContactContainer>
            <ContactDetails
                title={`Let’s talk`}
                subtitle={`Wanna collaborate? Got an offer?`}
                telephone={`+123-45-678-9012`}
                email={`angelicaisonline@gmail.com`}
                locationLink={`https://goo.gl/maps/a3mni3CdwYnQPYA29`}
                locationText={`Tel-Aviv, Israel`}
                trackSection={'Contact'}
            />
            <ContactMeGif />
        </ContactContainer>
    </Section>
  );
};