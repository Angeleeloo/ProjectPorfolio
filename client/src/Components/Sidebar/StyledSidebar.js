import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  background-color: #011627;
  color: white;
  padding: 40px 0px;
  position: fixed;
  top: 0;
  bottom: 0px;
  border-left: 1px rgba(255,255,255,0.15) solid;
  @media (max-width: 768px) {
    flex-direction: row;
    top: auto;
    bottom: auto;
    padding: 10px;
    overflow: hidden;
    position: fixed;
    width: -webkit-fill-available;
    z-index: 1;
    align-items: center;
  }
`;

export const Branding = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    background-color: #011627;
    top: 49px;
    left: 0;
    width: 100%;
    z-index: 1;
    padding: ${({mobileMenuDisplay}) => mobileMenuDisplay ? '20px 0px' : '0px'};
    transition: 0.3s;
    height: ${({mobileMenuDisplay}) => mobileMenuDisplay ? '200px' : '0px'};
    overflow-x: hidden;
  }
`;

export const HamburgerIcon = styled.div`
  cursor: pointer;
`;

export const HamburgerStrip = styled.div`
  width: 20px;
  height: 3px;
  background-color: white;
  margin: 5px;
`;

export const Item = styled.div`
  font-size: 16px;
  cursor: pointer;
  padding: 0px 50px;
  &:hover {
    color: rgba(255,255,255,.4);
  }
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
