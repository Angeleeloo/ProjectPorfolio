import React from 'react';
import {Section} from '../../HOCs/Section/Section.js';
import {Intro, Description} from './StyledAbout';

export const About = () => {
  return (
    <Section id={'About'} title={'About'}>
        <Intro>
            Full Software Lifecycle ▪ Agile Development Practice ▪ B2B and B2C Development
            <br/>ReactJS ▪ ES6 ▪ CSS ▪ HTML ▪ Cross-browser compatibility
        </Intro>
        <Description>
            A delivery and results oriented Frontend Developer with 10+ years of experience in the hitech industry. 
            Having a ich background in Team Leadership, QA management and Frontend development, building, leading and growing together with multidisciplinary engineering teams from startup to corporate.
        </Description>        
    </Section>
  );
};