import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  margin: 10px;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #e71d36;
`;

export const Name = styled.h1`
  margin: 0px;
  font-size: 60px;
  font-weight: bold;
`;

export const Profession = styled(Text)`
  font-size: 18px;
  color: black;
`;

export const DownloadContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
`;

export const DownloadItem1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  background-color: #e71d36;
`;

export const DownloadItem2 = styled(DownloadItem1)`
  background-color: #06233B;
`;