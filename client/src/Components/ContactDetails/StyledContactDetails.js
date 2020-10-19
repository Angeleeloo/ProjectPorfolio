import styled from 'styled-components';
import { palette, mobileBreakPoint } from '../../Common/theme';

export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  padding: 30px;
  border: solid 1px;
  color: white;
  border-radius: 5px;
  background-color: ${palette.lightest};
  @media (max-width: ${mobileBreakPoint}) {
    width: auto;
  }
`;

export const Title = styled.h2`
  margin: 0px;
`;

export const Subtitle = styled.p`
  color: white;
`;

export const Detail = styled.a`
  padding: 5px;
  color: white;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: ${palette.light};
  }
`;