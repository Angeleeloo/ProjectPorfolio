import React from 'react';
import {Section} from '../../HOCs/Section/Section.js';
import {LanguagesContainer, LanguageWrapper, Language, Overlay} from './StyledLanguages'

export const Languages = () => {
  return (
    <Section title={'Languages'}>
        <LanguagesContainer>
            <LanguageWrapper>
                <Language>English<br/>Mother tongue</Language>
                <Overlay>Howdie!</Overlay>
            </LanguageWrapper>
            <LanguageWrapper>
                  <Language>Hebrew<br/>Bilingual proficiency</Language>
                  <Overlay>אהלן!</Overlay>
            </LanguageWrapper>                     
        </LanguagesContainer>
    </Section>
  );
};