import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  background-color: #011627;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 40px;
  border: 1px white solid;
  position: absolute;
  top: 0;
  bottom: 0px;
`;

export const Branding = styled.div`
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
`;

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;