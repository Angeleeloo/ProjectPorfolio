import React, {useEffect} from 'react';
import {HomeContainer, TopContainer, Text, Name, Profession, Quote, SeparatorItem} from './StyledHome'
import {isMobile} from '../../Common/utils';
import ReactGA from 'react-ga';

export const Home = () => {
  const scrollToSection = (section) => {
    ReactGA.event({ category: 'Home', action: 'Scroll_to_section_clicked', label: section });
    document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
  };

  useEffect(() => {
    let i = 0;
    const txt = 'Frontend Developer';
    const speed = 130;
    const typeWriter =() => {
      if (i < txt.length) {
        document.getElementById('profession').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    typeWriter();
  }, []);

  return (
    <HomeContainer id={'Home'}>
      <TopContainer>
          <Text>Hi, I'm</Text>
          <Name>A A</Name>
          <Profession id={'profession'}/>
          { isMobile ? 
              <Quote>"It always seems impossible until it's done." -- Nelson Mandela</Quote>
          :
              <div>
                  <Quote>"It always seems impossible until it's done."
                    <br/>-- Nelson Mandela</Quote>
              </div>
          }
      </TopContainer>
      <SeparatorItem onClick={() => scrollToSection('Contact')}>CONTACT ME</SeparatorItem>
    </HomeContainer>
  );
};