import styled from 'styled-components';
import { palette, mobileBreakPoint, fontSize } from '../../Common/theme';

export const FlipCardContainer = styled.div`
  background-color: transparent;
  width: 49.5%;
  height: 180px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  @media (max-width: ${mobileBreakPoint}) {
    width: 100%;
    height: 250px;
  }
`;

export const FlipCardInner = styled.div`
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

export const FlipCardFront = styled.div`
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
  background-color: ${palette.light};
`;

export const FlipCardBack = styled(FlipCardFront)`
  justify-content: normal;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  font-size: ${fontSize.title};
  background-color: ${palette.lightest};
  transform: rotateY(180deg);
  background-position: center;
  background-size: cover;
  text-shadow: 3px 3px ${palette.light};
  background-image: url(${props => props.bgImage});
`;