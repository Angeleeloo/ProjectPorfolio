import React, {useEffect} from 'react';
import {HomeContainer, TopContainer, Text, Name, Profession, Quote1, Quote2, SeparatorItem} from './StyledHome'
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
          <Name>Angelica Angress</Name>
          <Profession id={'profession'}/>
          { isMobile ? 
              <Quote1>
                <em>"It always seems impossible until it's done." -- Nelson Mandela</em>
              </Quote1>
          :
              <div>
                  <Quote1><em>"It always seems impossible until it's done."</em></Quote1>
                  <Quote2>-- Nelson Mandela</Quote2>
              </div>
          }
      </TopContainer>
      <SeparatorItem onClick={() => scrollToSection('Contact')}>CONTACT ME</SeparatorItem>
    </HomeContainer>
  );
};