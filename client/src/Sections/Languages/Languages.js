import React from 'react';
import ReactGA from '../../Common/ga.js';
import {Section} from '../../HOCs/Section/Section.js';
import {LanguagesContainer, LanguageWrapper, Language, Overlay} from './StyledLanguages'

export const Languages = () => {
  const sendGAEvent = (hoveredItem) => { ReactGA.event({ category: 'Languages', action: 'Item_hovered', label: hoveredItem }) };

  return (
    <Section title={'Languages'}>
        <LanguagesContainer>
            <LanguageWrapper onMouseEnter={() => sendGAEvent('English')} >
                <Language>English<br/>Mother tongue</Language>
                <Overlay>Howdie!</Overlay>
            </LanguageWrapper>
            <LanguageWrapper onMouseEnter={() => sendGAEvent('Hebrew')} >
                  <Language>Hebrew<br/>Bilingual proficiency</Language>
                  <Overlay hebrew>אהלן!</Overlay>
            </LanguageWrapper>                     
        </LanguagesContainer>
    </Section>
  );
};