import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  background-color: #011627;
  color: white;
  padding: 40px;
  position: fixed;
  top: 0;
  bottom: 0px;
  border-left: 1px rgba(255,255,255,0.15) solid;
`;

export const Branding = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
`;

export const Item = styled.div`
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: rgba(255,255,255,.4);
  }
`;

export const SocialButtonsContainer = styled.div`
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
  filter: invert(1);  
`;
