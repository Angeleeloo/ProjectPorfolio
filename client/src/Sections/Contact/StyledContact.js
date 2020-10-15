import styled from 'styled-components';
import { palette, mobileBreakPoint } from '../../Common/theme';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
    justify-content: space-between;
    height: 680px;
  }
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0px 5px;
  @media (max-width: ${mobileBreakPoint}) {
    width: auto;
  }
`;

export const InputText = styled.input.attrs({
  type: 'text',
})`
  background-color: #ebebeb;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  &:focus{
    background-color: ${palette.lightest};
  }
  @media (max-width: ${mobileBreakPoint}) {
    margin: 5px 0px;
  }
`;

export const InputMessage = styled.textarea`
  background-color: #ebebeb;
  padding: 10px;
  margin: 5px;
  height: 200px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
    &:focus{
    background-color: ${palette.lightest};
  }
  @media (max-width: ${mobileBreakPoint}) {
    margin: 5px 0px;
  }
`;

export const Button = styled.input.attrs({
  type: 'submit',
})`
  background-color: ${palette.light};
  padding: 10px;
  color: white;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: max-content;
  &:hover {
    background-color: ${palette.lightest};
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 30px;
  border: solid 1px;
  background-size: cover;
  background-position: center;
  background-image: url("https://media.giphy.com/media/dxsoqMClq5jGKlAwXl/giphy.gif");
  color: white;
  border-radius: 5px;
  &:hover {
    background-image:
      linear-gradient(#00000052,#0000007a),
      url("./Images/contactMeDino.png");
  }
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
    color: ${palette.lightest};
  }
`;

export const Footer = styled.div`
  
`;