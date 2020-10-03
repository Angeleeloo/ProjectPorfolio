import React from 'react';
import {SectionContainer, SectionTitle, Separator} from '../../Components/StyledMainPage.js';
import {ContentContainer, EducationContainer, EducationItem, EducationDesc, TimelineSeparator, TimelineDot, TimelineConnector, Date, Title, Subtitle} from './StyledEducation';

export const Education = () => {
    const educationList = [
        {
            date: '2018',
            education: 'FrontEnd Development',
            school: 'Netcraft Academy'
        },
        {
            date: '2014',
            education: 'CMAP - Mobile App Testing',
            school: 'ITCB, Sela University'
        },
        {
            date: '2012',
            education: 'Management Development',
            school: 'Dr. Dvora Geller, Organizational Consulting'
        },
        {
            date: '2009',
            education: 'B.Sc. Computer Science',
            school: 'Clark University, Israel Branch'
        },
    ];

  return (
    <SectionContainer id={'Education'}>
        <SectionTitle>Education</SectionTitle>
        <Separator>___</Separator>
        
        <ContentContainer>
            <EducationContainer>
                { educationList.map((item) => (
                    <EducationItem key={item}>
                        <Date>{item.date}</Date>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <EducationDesc>
                            <Title>{item.education}</Title>
                            <Subtitle>{item.school}</Subtitle>
                        </EducationDesc>
                    </EducationItem>
                ))}
            </EducationContainer>
        </ContentContainer>    
    </SectionContainer>
  );
};