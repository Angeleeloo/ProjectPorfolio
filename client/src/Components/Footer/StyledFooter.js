import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SocialButtonsContainer = styled.div`
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonLink = styled.a`
  text-decoration: none;
  &:hover {
    filter: contrast;
  }
`;

export const SocialButton = styled.img`
`;
