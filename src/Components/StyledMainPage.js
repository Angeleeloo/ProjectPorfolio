import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const LeftPane = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
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

export const ScrollToTopButton = styled.div`
  display: ${({ displayState }) => displayState ? 'flex' : 'none'};
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
  scroll-behavior: smooth;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #555;
  }
`;

export const ScrollToTopIcon = styled.img`
  filter: invert(1);
  padding: 0px 5px;
`;

export const SectionContainer = styled.div`
  padding: 50px;
  border-bottom: 1px solid #bbb;
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

