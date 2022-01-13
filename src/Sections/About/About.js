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
            A delivery and results oriented Frontend Developer, based in Tel Aviv, with 12 years of diverse R&D experience. 
            A proven track record in building multi-disciplinary teams, leading complex technical projects, achieving high velocity delivery turnarounds 
            and developing products to scale and scope under highly demanding hyper growth conditions of startups turned corporate.
        </Description>        
    </Section>
  );
};