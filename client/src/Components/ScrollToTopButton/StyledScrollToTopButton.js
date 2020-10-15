import styled from 'styled-components';
import { palette } from '../../Common/theme';

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
  background-color: ${palette.primary};
  &:hover {
    background-color: #555;
  }
`;

export const ScrollToTopIcon = styled.img`
  filter: invert(1);
  padding: 0px 5px;
`;
