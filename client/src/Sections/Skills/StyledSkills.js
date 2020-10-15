import styled from 'styled-components';
import { palette, mobileBreakPoint } from '../../Common/theme';

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SkillCard = styled.div`
  background-color: transparent;
  width: 250px;
  height: 350px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  @media (max-width: ${mobileBreakPoint}) {
    width: 100%;
    height: 250px;
  }
`;

export const SkillCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
  &:hover{
    transform: rotateY(180deg);
  }
`;

export const SkillFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  background-color: ${palette.primary};
`;

export const SkillBack = styled(SkillFront)`
  justify-content: normal;
  font-weight: normal;
  font-size: 14px;
  background-color: #06233B;
  transform: rotateY(180deg);
`;