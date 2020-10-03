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
  margin: 50px;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #e71d36;
  margin: 0px;
`;

export const Name = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: black;
`;

export const Profession = styled(Text)`
  color: #757575;
`;

export const DownloadContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
`;

export const DownloadItem1 = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
  color: white;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.25px;
  background-color: #e71d36;
  padding: 23px 0px 21px 0px;
`;

export const DownloadItem2 = styled(DownloadItem1)`
  background-color: #06233B;
  cursor: pointer;
`;