import styled from 'styled-components';
import {palette} from '../Common/theme';

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
  background-color: ${palette.darkest};
`;

export const RightPane = styled.div`
  width: 70%;
  background-color: ${palette.dark};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  max-width: 800px;
  margin-left: 30px;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 30px;
  &:before {
    top: 0;
    background-color: ${palette.dark};
    content: '';
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    z-index: 2;
  }
  &:after {
    bottom: 0;
    background-color: ${palette.dark};
    content: '';
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    z-index: 2;
  }
`;