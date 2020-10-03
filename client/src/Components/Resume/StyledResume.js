import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExperienceItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ExperienceDesc = styled.div`
  width: 500px;
  padding-bottom: 20px;
`;

export const Title = styled.div`
  color: #151b25;
  font-size: 20px;
  line-height: 24px;
`;

export const Date = styled.div`
  color: #757575;
  font-size: 15px;
  line-height: 20px;
  width: 150px;
  text-align: end;
`;

export const Subtitle = styled.div`
  color: #757575;
  font-size: 15px;
  line-height: 20px;
`;

export const TimelineSeparator = styled.div`
`;

export const TimelineDot = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  border: 1px solid red;
  margin: 0px 11px;
`;

export const TimelineConnector = styled.div`
  background-color: red;
  width: 1px;
  height: 100%;
  margin: 0px 15px;
`;