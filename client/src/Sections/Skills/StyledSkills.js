import styled from 'styled-components';
import { mobileBreakPoint } from '../../Common/theme';

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
    align-items: center;
  }
`;