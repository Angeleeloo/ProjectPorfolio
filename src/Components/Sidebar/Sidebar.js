import React from 'react';
import {SidebarContainer, Branding, MenuItems, Item, SocialButtons} from './StyledSidebar'

export const Sidebar = () => {
  
const scrollToSection = (section) => {
  document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
};

  return (
    <SidebarContainer>
        <Branding>
            <div>Angelica Angress</div>
            <div style={{ fontWeight: "normal", fontSize: "17px"}}>Developer</div>
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
        <SocialButtons>
            <div>Li</div>
            <div>In</div>
            <div>SE</div>
        </SocialButtons>
    </SidebarContainer>
  );
};