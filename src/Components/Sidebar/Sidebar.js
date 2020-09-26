import React from 'react';
import {SidebarContainer, Branding, MenuItems, SocialButtons} from './StyledSidebar'

export const Sidebar = () => {
  return (
    <SidebarContainer>
        <Branding>
            <div>Angelica Angress</div>
            <div>Developer</div>
        </Branding>
        <MenuItems>
            <div>Home</div>
            <div>About</div>
            <div>Skills</div>
            <div>Resume</div>
            <div>Education</div>
            <div>Languages</div>
            <div>Contact</div>
        </MenuItems>
        <SocialButtons>
            <div>Li</div>
            <div>In</div>
            <div>SE</div>
        </SocialButtons>
    </SidebarContainer>
  );
};