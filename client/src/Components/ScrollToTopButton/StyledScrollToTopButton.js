import styled from 'styled-components';

export const StyledScrollToTopButton = styled.div`
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
