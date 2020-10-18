import React, {useEffect} from 'react';
import {HomeContainer, TopContainer, Text, Name, Profession, Quote1, Quote2, DownloadContainer, DownloadItem1, DownloadItem2} from './StyledHome'
import {isMobile} from '../../Common/utils';
import ReactGA from 'react-ga';

export const Home = () => {
  const scrollToSection = (section) => {
    ReactGA.event({ category: 'Home', action: 'Scroll_to_section_clicked', label: section });
    document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
  };
  const downloadAndReport = (section) => {
    ReactGA.event({ category: 'Home', action: 'Download_Resume_clicked', label: section });
    window.location.href = section;
  };

  useEffect(() => {
    let i = 0;
    const txt = 'Developer';
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
      <DownloadContainer>
          <DownloadItem1 onClick={() => downloadAndReport('/Files/TBD.pdf')} download>DOWNLOAD RESUME</DownloadItem1>
          <DownloadItem2 onClick={() => scrollToSection('Contact')}>CONTACT ME</DownloadItem2>
      </DownloadContainer>
    </HomeContainer>
  );
};