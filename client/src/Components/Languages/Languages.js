import React from 'react';
import {SectionContainer, SectionTitle, Separator} from '../../Components/StyledMainPage.js';
import {LanguagesContainer, LanguageWrapper, Language, Overlay} from './StyledLanguages'

export const Languages = () => {
  return (
    <SectionContainer id={'Languages'}>
        <SectionTitle>Languages</SectionTitle>
        <Separator>___</Separator>
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
    </SectionContainer>
  );
};