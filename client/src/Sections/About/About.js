import React from 'react';
import {Section} from '../../HOCs/Section/Section.js';
import {Intro, Description} from './StyledAbout';

export const About = () => {
  return (
    <Section id={'About'} title={'About'}>
        <Intro>
            Full Software Lifecycle ▪ Agile Development Practice ▪ B2B and B2C Development
            <br/>JavaScript development ▪ Cross-browser compatibility
            <br/>ReactJS ▪ ES6 ▪ CSS ▪ HTML 
        </Intro>
        <Description>
            A delivery and results oriented Front End Developer with 10+ years of experience in both startup and corporate companies in the hitech industry. 
            8 years of Team Leadership experience, building, growing and leading multidisciplinary engineering teams. 
            2 years of Frontend development experience, expertise in React, building and refactoring webpages focusing on reusable component based architecture.
        </Description>        
    </Section>
  );
};