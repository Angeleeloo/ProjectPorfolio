import React from 'react';
import {SidebarContainer, Branding, MenuItems, Item, SocialButtonsContainer, ButtonLink, SocialButton} from './StyledSidebar'

export const Sidebar = () => {
  
const scrollToSection = (section) => {
  document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
};

  return (
    <SidebarContainer>
        <Branding>
            <div>AA | Developer</div>
        </Branding>
        <MenuItems>
            <Item onClick={() => scrollToSection('Home')}>Home</Item>
            <Item onClick={() => scrollToSection('About')}>About</Item>
            <Item onClick={() => scrollToSection('Skills')}>Skills</Item>
            <Item onClick={() => scrollToSection('Resume')}>Resume</Item>
            <Item onClick={() => scrollToSection('Education')}>Education</Item>
            <Item onClick={() => scrollToSection('Languages')}>Languages</Item>
            <Item onClick={() => scrollToSection('Contact')}>Contact</Item>
        </MenuItems>
        <SocialButtonsContainer>
            <ButtonLink href={'https://www.linkedin.com/'} target={'_blank'}>
                <SocialButton src={'./Images/linkedin.svg'} alt={'linkedin icon'}/>
            </ButtonLink>
            <ButtonLink href={'https://github.com/'} target={'_blank'}>
                <SocialButton src={'./Images/github.svg'} alt={'linkedin icon'}/>
            </ButtonLink>        
        </SocialButtonsContainer>
    </SidebarContainer>
  );
};