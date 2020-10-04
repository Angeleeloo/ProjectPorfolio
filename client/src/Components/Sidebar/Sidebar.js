import React, { useState } from 'react';
import {SidebarContainer, Branding, MenuItems, Item, SocialButtonsContainer, ButtonLink, SocialButton} from './StyledSidebar'

export const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('Home');
  const sidebarItems = ['Home', 'About', 'Skills', 'Resume', 'Education', 'Languages', 'Contact'];
  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
    setSelectedItem(section);
  };

  return (
    <SidebarContainer>
        <Branding>
            <div>AA</div>
        </Branding>
        <MenuItems>
            { sidebarItems.map((item) => (
              <Item key={item} selectedItem={selectedItem} onClick={() => scrollToSection(item)} 
              style={{borderLeft: selectedItem === item ? 'solid red' : 'none'}}>{item}</Item>
            ))}
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