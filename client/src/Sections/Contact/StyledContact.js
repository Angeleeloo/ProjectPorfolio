import styled from 'styled-components';
import { mobileBreakPoint, palette } from '../../Common/theme';

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Title = styled.div`
  margin: 20px 0px;
  font-size: 30px;
  font-weight: bold;
`;

export const Subtitle = styled.div`
`;

export const ContactDetail = styled.a`
  font-size: 20px;
  margin: 20px 0px;
  cursor: pointer;
  &:hover {
    color: ${palette.light}
  }
`;

export const ContactMeGif = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  background-image: url("https://media.giphy.com/media/dxsoqMClq5jGKlAwXl/giphy.gif");
  &:hover {
    background-image: url("https://media.giphy.com/media/eM7IhAAqs9cZ4RyD7j/giphy.gif");
  }
`;
