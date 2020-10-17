import React, { useState, useLayoutEffect } from 'react';
import ReactGA from 'react-ga';
import { palette } from '../../Common/theme.js';
import {Section} from '../../HOCs/Section/Section.js';
import {EducationContainer, EducationItem, EducationDesc, TimelineSeparator, TimelineDot, TimelineConnector, Date, Title, Subtitle} from './StyledEducation';

export const Education = () => {
    const [dotActive, setDotActive] = useState([]);

    useLayoutEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if (scrollPos > 2700 && scrollPos < 2800) {
                setDotActive( ...dotActive, [1]);
                ReactGA.event({ category: 'Education', action: 'Dot_active', label: '1' });
            } else if (scrollPos > 2800 && scrollPos < 2900) {
                setDotActive(...dotActive, [2]);
            } else if (scrollPos > 2900 && scrollPos < 3000) {
                setDotActive(...dotActive, [3]);
            } else if (scrollPos > 3000) {
                setDotActive(...dotActive, [4]);
            }
        };
    
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
      }, []);

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
    <Section id={'Education'} title={'Education'}>
        <EducationContainer>
            { educationList.map((item, index) => (
                <EducationItem key={index}>
                    <Date>{item.date}</Date>
                    <TimelineSeparator>
                        <TimelineDot id={`dot${index+1}`} style={{ backgroundColor: dotActive.includes(index+1) ? `${palette.light}` : 'white' }}/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <EducationDesc>
                        <Title style={{ color: dotActive.includes(index+1) ? `${palette.light}` : 'black' }}>{item.education}</Title>
                        <Subtitle>{item.school}</Subtitle>
                    </EducationDesc>
                </EducationItem>
            ))}
        </EducationContainer>
    </Section>
  );
};