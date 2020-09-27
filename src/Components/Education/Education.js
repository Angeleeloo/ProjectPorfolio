import React from 'react';
import {SectionContainer, SectionTitle, Separator} from '../../Components/StyledMainPage.js';
import {EducationContainer, Date, EducationDesc} from './StyledEducation';

export const Education = () => {
  return (
    <SectionContainer id={'Education'}>
        <SectionTitle>Education</SectionTitle>
        <Separator>___</Separator>
        <EducationContainer>
            <Date>2018</Date>
            <EducationDesc>
                <div>FrontEnd Development | Netcraft Academy</div>
            </EducationDesc>
        </EducationContainer>
        <br/>
        <EducationContainer>
            <Date>2014</Date>
            <EducationDesc>
                <div>CMAP - Mobile App Testing | ITCB, Sela University</div>
            </EducationDesc>
        </EducationContainer>
        <br/>
        <EducationContainer>
            <Date>2012</Date>
            <EducationDesc>
                <div>Management Development | Dr. Dvora Geller, Organizational Consulting</div>
            </EducationDesc>
        </EducationContainer>
        <br/>
        <EducationContainer>
            <Date>2009</Date>
            <EducationDesc>
                <div>B.Sc. Computer Science | Clark University, Israel Branch</div>
            </EducationDesc>
        </EducationContainer>
    </SectionContainer>
  );
};