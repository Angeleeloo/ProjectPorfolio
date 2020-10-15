import styled from 'styled-components';
import { palette, mobileBreakPoint } from '../../Common/theme';

export const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 190px;
  }
`;

export const Language = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  color: white;
  background-color: ${palette.primary};
  padding: 20px;
  &:hover {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #06233B;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const LanguageWrapper = styled.div`
  position: relative;
  width: 49%;
  &:hover ${Overlay} {
    opacity: 1;
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 100%;
  }
`;