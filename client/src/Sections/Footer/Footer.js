import React from 'react';
import {SectionContainer} from '../StyledMainPage.js';
import {FooterContainer, SocialButtonsContainer, ButtonLink, SocialButton} from './StyledFooter';


export const Footer = () => {
  return (
    <SectionContainer id={'Footer'}>
        <FooterContainer>
            <div>
                @ 2020 Angeleeloo
            </div>
            <SocialButtonsContainer>
                <ButtonLink href={'https://www.linkedin.com/'} target={'_blank'}>
                    <SocialButton src={'./Images/linkedin.svg'} alt={'linkedin icon'}/>
                </ButtonLink>
                <ButtonLink href={'https://github.com/'} target={'_blank'}>
                    <SocialButton src={'./Images/github.svg'} alt={'linkedin icon'}/>
                </ButtonLink>        
            </SocialButtonsContainer>
        </FooterContainer>
    </SectionContainer>
  );
};