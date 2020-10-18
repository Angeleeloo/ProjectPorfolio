import styled from 'styled-components';
import { fontSize, palette, mobileBreakPoint } from '../../Common/theme';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  margin: 50px;
`;

export const Text = styled.div`
  font-size: ${fontSize.subtitle};
  color: grey;
  margin: 0px;
`;

export const Name = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: ${palette.darkest};
  line-height: 1;
`;

export const Profession = styled.div`
  color: ${palette.light};
  font-size: ${fontSize.title};
  font-weight: bold;
  margin: 0px;
`;

export const Quote1 = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  color: ${palette.light};
  font-size: ${fontSize.subtitle};
  @media (max-width: ${mobileBreakPoint}) {
    text-align: center;
  }
`;

export const Quote2 = styled.div`
  display: flex;
  color: grey;
  padding: 0px;
  justify-content: center;
  color: ${palette.light};
  font-size: ${fontSize.subtitle};
`;

export const DownloadContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
`;

export const DownloadItem1 = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
  color: white;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.25px;
  background-color: ${palette.light};
  padding: 23px 0px 21px 0px;
  cursor: pointer;
  &:hover {
    background-color: ${palette.lightest};
  }
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 12px;
  }
`;

export const DownloadItem2 = styled(DownloadItem1)`
  background-color: ${palette.darkest};
  cursor: pointer;
`;