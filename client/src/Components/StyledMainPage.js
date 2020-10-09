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
  margin-left: 30px;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 30px;
  &:before {
    top: 0;
    background-color: #334452;
    content: '';
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    z-index: 2;
  }
  &:after {
    bottom: 0;
    background-color: #334452;
    content: '';
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    z-index: 2;
  }
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
  padding: 80px;
  border-bottom: 1px solid #bbb;
  @media screen and (max-width: 797px) {
    padding: 80px 20px;
  }
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

