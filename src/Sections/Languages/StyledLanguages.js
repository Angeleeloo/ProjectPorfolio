import styled from 'styled-components';
import { mobileBreakPoint } from '../../Common/theme';

export const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;