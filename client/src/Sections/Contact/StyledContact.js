import styled from 'styled-components';
import { mobileBreakPoint } from '../../Common/theme';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ContactMeGif = styled.div`
  width: 49%;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  background-image: url("https://media.giphy.com/media/dxsoqMClq5jGKlAwXl/giphy.gif");
  &:hover {
    background-image:
      linear-gradient(#00000052,#0000007a),
      url("./Images/contactMeDino.png");
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: auto;
  }
`;
