import styled from 'styled-components';

export const HamburgerContainer = styled.div`
  cursor: pointer;
  display: inline-block;
`;

export const HamburgerStrip1 = styled.div`
  width: 20px;
  height: 3px;
  background-color: white;
  margin: 5px;
  transition: 0.4s;
  transform: ${({iconAnimation}) => iconAnimation ? 'rotate(-45deg) translate(-8px, 6px)' : 'none'};
`;

export const HamburgerStrip2 = styled.div`
  width: 20px;
  height: 3px;
  background-color: white;
  margin: 5px;
  transition: 0.4s;
  opacity:  ${({iconAnimation}) => iconAnimation ? 0 : 100};
`;

export const HamburgerStrip3 = styled.div`
  width: 20px;
  height: 3px;
  background-color: white;
  margin: 5px;
  transition: 0.4s;
  transform: ${({iconAnimation}) => iconAnimation ? 'rotate(45deg) translate(-5px, -3px)' : 'none'};
`;