import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const LeftPane = styled.div`
  width: 30%;
  background-color: #011627;
`;

export const RightPane = styled.div`
  width: 70%;
  background-color: #334452;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  width: 800px;
`;

export const SectionContainer = styled.div`
  margin: 10px;
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  margin: 0px;
  color: #151b25;
`;

export const Separator = styled.div`
  color: #e71d36;
  margin-bottom: 20px;
`;