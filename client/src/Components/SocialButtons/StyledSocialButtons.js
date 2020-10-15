import styled from 'styled-components';

export const SocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ButtonLink = styled.div`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    filter: contrast(0.5);
  }
`;

export const SocialButton = styled.img`
`;
