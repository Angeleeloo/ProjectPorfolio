import styled from 'styled-components';
import { fontSize, palette, mobileBreakPoint } from '../../Common/theme';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  margin: 50px;
`;

export const Text = styled.div`
  font-size: ${fontSize.subtitle};
  color: grey;
  margin: 0px;
`;

export const Name = styled.h1`
  font-size: 70px;
  font-weight: bold;
  color: ${palette.darkest};
  line-height: 1;
  font-family: 'Parisienne', cursive;
  text-align: center;
`;

export const Profession = styled.div`
  margin: 0px;
  line-height: 1;
  font-weight: bold;
  text-align: center;
  color: ${palette.light};
  font-size: ${fontSize.title};
  font-family: 'Source Code Pro', monospace;
`;

export const Quote1 = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  color: ${palette.light};
  font-size: ${fontSize.subtitle};
  @media (max-width: ${mobileBreakPoint}) {
    text-align: center;
  }
`;

export const Quote2 = styled.div`
  display: flex;
  color: grey;
  padding: 0px;
  justify-content: center;
  color: ${palette.light};
  font-size: ${fontSize.subtitle};
`;

export const SeparatorItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${palette.light};
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: ${palette.lightest};
  }
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 12px;
  }
`;