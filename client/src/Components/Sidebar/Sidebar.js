import React, { useState } from 'react';
import {SidebarContainer, Branding, MenuItems, Item, HamburgerIcon, HamburgerStrip, SocialButtonsContainer, ButtonLink, SocialButton} from './StyledSidebar'

export const Sidebar = (props) => {
  const [selectedItem, setSelectedItem] = useState('Home');
  const [mobileMenuDisplay, setMobileMenuDisplay] = useState(false);
  const sidebarItems = ['Home', 'About', 'Skills', 'Resume', 'Education', 'Languages', 'Contact'];
  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
    setSelectedItem(section);
  };
  const toggleMenu = () => { setMobileMenuDisplay(!mobileMenuDisplay)} ;
  const scrollAndClose = (section) => { scrollToSection(section); toggleMenu() };

  return (
    <SidebarContainer>
        <Branding onClick={() => scrollToSection('Home')} >
            <div>AA</div>
        </Branding>
        <MenuItems mobileMenuDisplay={mobileMenuDisplay}>
            { sidebarItems.map((item) => (
                <Item key={item} selectedItem={selectedItem} onClick={() => scrollAndClose(item)} 
                style={{borderLeft: selectedItem === item ? 'solid red' : 'none'}}>{item}</Item>
            ))}
        </MenuItems>
        { props.isMobile ?
            <HamburgerIcon onClick={() => setMobileMenuDisplay(!mobileMenuDisplay)}>
                <HamburgerStrip />
                <HamburgerStrip />
                <HamburgerStrip />
            </HamburgerIcon>
            :
            <SocialButtonsContainer>
                <ButtonLink href={'https://www.linkedin.com/'} target={'_blank'}>
                    <SocialButton src={'./Images/linkedin.svg'} alt={'linkedin icon'}/>
                </ButtonLink>
                <ButtonLink href={'https://github.com/'} target={'_blank'}>
                    <SocialButton src={'./Images/github.svg'} alt={'linkedin icon'}/>
                </ButtonLink>        
            </SocialButtonsContainer>
        }
    </SidebarContainer>
  );
};