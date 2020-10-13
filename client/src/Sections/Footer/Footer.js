import React from 'react';
import {Section} from '../../HOCs/Section/Section.js';
import {FooterContainer, SocialButtonsContainer, ButtonLink, SocialButton} from './StyledFooter';


export const Footer = () => {
  return (
    <Section id={'Footer'}>
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
    </Section>
  );
};