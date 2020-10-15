import styled from 'styled-components';
import { palette, mobileBreakPoint } from '../../Common/theme';

export const StyledScrollToTopButton = styled.div`
  display: ${({ displayState }) => displayState ? 'flex' : 'none'};
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  width: 30px;
  height: 30px;
  color: white;
  padding: 15px;
  cursor: pointer;
  border-radius: 50%;
  justify-content: center;
  background-color: ${palette.light};
  &:hover {
    background-color: ${palette.lightest};
  }
  @media (max-width: ${mobileBreakPoint}) {
    opacity: 0.5;
    padding: 10px;
    border: 10px solid white;
  }
`;

export const ScrollToTopIcon = styled.img`
  filter: invert(1);
  padding: 0px 5px;
`;
