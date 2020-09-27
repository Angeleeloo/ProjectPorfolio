import React from 'react';
import {SectionContainer, SectionTitle, Separator} from '../../Components/StyledMainPage.js';
import {LanguagesContainer, Language} from './StyledLanguages'

export const Languages = () => {
  return (
    <SectionContainer id={'Languages'}>
        <SectionTitle>Languages</SectionTitle>
        <Separator>___</Separator>
        <LanguagesContainer>
            <Language>English<br/>Mother tongue</Language>
            <Language>Hebrew<br/>Bilingual proficiency</Language>
        </LanguagesContainer>
    </SectionContainer>
  );
};