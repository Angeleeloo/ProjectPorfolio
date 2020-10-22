import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import {isMobile} from '../../Common/utils';
import {SocialButtons} from '../../Components/SocialButtons/SocialButtons';
import {HamburgerStrip1, HamburgerStrip2, HamburgerStrip3} from '../../Components/HamburgerMenu/StyledHamburgerMenu';
import {SidebarContainer, Branding, MenuItems, Item, HamburgerIcon} from './StyledSidebar'
import { palette } from '../../Common/theme';

export const Sidebar = () => {
  const sidebarItems = ['Home', 'About', 'Skills', 'Experience', 'Education', 'Languages', 'Contact'];
  const [selectedItem, setSelectedItem] = useState('Home');
  const [mobileMenuDisplay, setMobileMenuDisplay] = useState(false);
  const scrollToSection = (section) => {
      ReactGA.event({ category: 'Sidebar', action: 'Branding_clicked', label: section });
      document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
  };
  const toggleMenu = () => { setMobileMenuDisplay(!mobileMenuDisplay)} ;
  const scrollAndClose = (section) => { 
      ReactGA.event({ category: 'Sidebar', action: 'Menu_item_clicked', label: section });
      scrollToSection(section); 
      toggleMenu();
    };

    const sectionInView = () => {
        
        const sectionHome = document.getElementById('Home'),
              sectionAbout = document.getElementById('About'),
              sectionSkills = document.getElementById('Skills'),
              sectionExperience = document.getElementById('Experience'),
              sectionEducation = document.getElementById('Education'),
              sectionLanguages = document.getElementById('Languages'),
              sectionContact = document.getElementById('Contact');

        const sectionHomePos = sectionHome.getBoundingClientRect(),
              sectionAboutPos = sectionAbout.getBoundingClientRect(),
              sectionSkillsPos = sectionSkills.getBoundingClientRect(),
              sectionExperiencePos = sectionExperience.getBoundingClientRect(),
              sectionEducationPos = sectionEducation.getBoundingClientRect(),
              sectionLanguagesPos = sectionLanguages.getBoundingClientRect(),
              sectionContactPos = sectionContact.getBoundingClientRect();

        if (sectionHomePos.top >= 0) {
            setSelectedItem('Home');
        } else if (sectionAboutPos.top >= 0) {
            setSelectedItem('About');
        } else if (sectionSkillsPos.top >= 0) {
            setSelectedItem('Skills');
        } else if (sectionExperiencePos.top >= 0) {
            setSelectedItem('Experience');
        } else if (sectionEducationPos.top >= 0) {
            setSelectedItem('Education');
        } else if (sectionLanguagesPos.top >= 0) {
            setSelectedItem('Languages');
        } else if (sectionContactPos.top >= 0) {
            setSelectedItem('Contact');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', sectionInView);
        return () => window.removeEventListener('scroll', sectionInView);
    });    

  return (
    <SidebarContainer>
        <Branding onClick={() => scrollToSection('Home')}>AA</Branding>
        <MenuItems mobileMenuDisplay={mobileMenuDisplay}>
            { sidebarItems.map((item) => (
                <Item key={item} selectedItem={selectedItem} onClick={() => scrollAndClose(item)} 
                style={{borderLeft: selectedItem === item ? `solid ${palette.light}` : 'none'}}>{item}</Item>
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