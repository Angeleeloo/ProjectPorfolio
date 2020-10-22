import React from 'react';
import {Section} from '../../HOCs/Section/Section.js';
import {SocialButtons} from '../../Components/SocialButtons/SocialButtons';
import {FooterContainer} from './StyledFooter';


export const Footer = () => {
  return (
    <Section id={'Footer'}>
        <FooterContainer>
            <div>(c) Angeleeloo 2020</div>
            <SocialButtons sourceClick={'Footer'}/>
        </FooterContainer>
    </Section>
  );
};