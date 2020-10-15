import React, { useState } from 'react';
import ReactGA from '../../Common/ga';
import {isMobile} from '../../Common/utils';
import {SocialButtons} from '../../Components/SocialButtons/SocialButtons';
import {HamburgerStrip1, HamburgerStrip2, HamburgerStrip3} from '../../Components/HamburgerMenu/StyledHamburgerMenu';
import {SidebarContainer, Branding, MenuItems, Item, HamburgerIcon} from './StyledSidebar'

export const Sidebar = () => {
  const sidebarItems = ['Home', 'About', 'Skills', 'Resume', 'Education', 'Languages', 'Contact'];
  const [selectedItem, setSelectedItem] = useState('Home');
  const [mobileMenuDisplay, setMobileMenuDisplay] = useState(false);
  const scrollToSection = (section) => {
      ReactGA.event({ category: 'Sidebar', action: 'Branding_clicked', label: section });
      document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
      setSelectedItem(section);
  };
  const toggleMenu = () => { setMobileMenuDisplay(!mobileMenuDisplay)} ;
  const scrollAndClose = (section) => { 
      ReactGA.event({ category: 'Sidebar', action: 'Menu_item_clicked', label: section });
      scrollToSection(section); 
      toggleMenu();
    };

  return (
    <SidebarContainer>
        <Branding onClick={() => scrollToSection('Home')}>AA</Branding>
        <MenuItems mobileMenuDisplay={mobileMenuDisplay}>
            { sidebarItems.map((item) => (
                <Item key={item} selectedItem={selectedItem} onClick={() => scrollAndClose(item)} 
                style={{borderLeft: selectedItem === item ? 'solid red' : 'none'}}>{item}</Item>
            ))}
        </MenuItems>
        { isMobile ?
            <HamburgerIcon onClick={() => setMobileMenuDisplay(!mobileMenuDisplay)}>
                <HamburgerStrip1 iconAnimation={mobileMenuDisplay}/>
                <HamburgerStrip2 iconAnimation={mobileMenuDisplay}/>
                <HamburgerStrip3 iconAnimation={mobileMenuDisplay}/>
            </HamburgerIcon>
            :
            <SocialButtons sourceClick={'Sidebar'}/>
        }
    </SidebarContainer>
  );
};