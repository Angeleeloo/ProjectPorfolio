import React, {useEffect} from 'react';
import {HomeContainer, TopContainer, Text, Name, Profession, DownloadContainer, DownloadItem1, DownloadItem2} from './StyledHome'
import {Separator} from '../../Components/StyledMainPage.js';

export const Home = () => {
  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
  };

  useEffect(() => {
    let i = 0;
    const txt = 'Angelica Angress';
    const speed = 100;
    const typeWriter =() => {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
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
          <Name id={'demo'}/>
          <Separator>___</Separator>
          <Profession>Developer</Profession>
      </TopContainer>
      <DownloadContainer>
        <DownloadItem1 href='/Files/Angelica_Angress_CV.pdf' download>DOWNLOAD RESUME</DownloadItem1>
        <DownloadItem2 onClick={() => scrollToSection('Contact')}>CONTACT ME</DownloadItem2>
      </DownloadContainer>
    </HomeContainer>
  );
};