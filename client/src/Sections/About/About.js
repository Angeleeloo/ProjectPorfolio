import React from 'react';
import {Section} from '../../HOCs/Section/Section.js';
import {Intro, Description} from './StyledAbout';

export const About = () => {
  return (
    <Section id={'About'} title={'About'}>
        <Intro>
            Full Software Lifecycle ▪ Agile Development Practice ▪ B2B and B2C Development ▪ ReactJS ▪ ES6 ▪ CSS ▪ HTML ▪ Cross-browser compatibility
        </Intro>
        <Description>
            A delivery and results oriented Frontend Developer, based in Tel Aviv, with 10+ years of experience in the Hi-Tech industry. 
            Having a rich background in Team Leadership, QA management and Frontend development, building, leading and growing together with multidisciplinary engineering teams from startup to corporate.
        </Description>        
    </Section>
  );
};