import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0px 5px;
`;

export const InputText = styled.input.attrs({
  type: 'text',
})`
  background-color: #d6d9dc;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const InputMessage = styled.textarea`
  background-color: #d6d9dc;
  padding: 10px;
  margin: 5px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.input.attrs({
  type: 'submit',
})`
  background-color: #e71d36;
  padding: 10px;
  color: white;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: max-content;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 30px;
  border: solid 1px;
  background-image: url("https://prorez.caliberthemes.com/resume/wp-content/uploads/sites/2/2020/01/contact-address-min.jpg");
  color: white;
`;

export const Title = styled.h2`
  margin: 0px;
`;

export const Subtitle = styled.p`
  color: #d6d9dc;
`;

export const Detail = styled.a`
  color: #d6d9dc;
  padding: 5px;
`;

export const Footer = styled.div`
  
`;