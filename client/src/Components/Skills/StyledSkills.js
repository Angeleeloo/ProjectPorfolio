import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SkillCard = styled.div`
  background-color: transparent;
  width: 250px;
  height: 250px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
`;

export const SkillCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
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
  font-size: 21px;
  background-color: #e71d36;
`;

export const SkillBack = styled(SkillFront)`
  font-weight: normal;
  font-size: 15px;
  background-color: #06233B;
  transform: rotateY(180deg);
`;