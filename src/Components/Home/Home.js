import React from 'react';
import {HomeContainer, TopContainer, Text, Name, Profession, DownloadContainer, DownloadItem1, DownloadItem2} from './StyledHome'
import {Separator} from '../../Components/StyledMainPage.js';

export const Home = () => {
  return (
    <HomeContainer id={'Home'}>
      <TopContainer>
          <Text>Hi, I'm</Text>
          <Name>Angelica <br/> Angress</Name>
          <Separator>___</Separator>
          <Profession>Developer</Profession>
      </TopContainer>
      <DownloadContainer>
        <DownloadItem1>DOWNLOAD RESUME</DownloadItem1>
        <DownloadItem2>CONTACT ME</DownloadItem2>
      </DownloadContainer>
    </HomeContainer>
  );
};