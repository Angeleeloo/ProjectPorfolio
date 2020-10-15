import styled from 'styled-components';
import { fontSize, mobileBreakPoint } from '../../Common/theme';

export const SectionContainer = styled.div`
  padding: 80px;
  border-bottom: 1px solid #bbb;
  @media (max-width: ${mobileBreakPoint}) {
    padding: 80px 20px;
  }
`;

export const SectionTitle = styled.div`
  font-size: ${fontSize.title};
  font-weight: bold;
  margin-bottom: 30px;
  color: #151b25;
`;