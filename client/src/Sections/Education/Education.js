import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import { palette } from '../../Common/theme.js';
import {Section} from '../../HOCs/Section/Section.js';
import {EducationContainer, EducationItem, EducationDesc, TimelineSeparator, TimelineDot, TimelineConnector, Date, Title, Subtitle} from './StyledEducation';

export const Education = () => {
    const [dotEdActive, setdotEdActive] = useState();

    const onScroll = () => {
        const dotEd1 = document.getElementById('dotEd1'),
              dotEd2 = document.getElementById('dotEd2'),
              dotEd3 = document.getElementById('dotEd3'),
              dotEd4 = document.getElementById('dotEd4');

        const topPos = (dotEd) => dotEd.getBoundingClientRect().top;
        const dotEd1Pos = topPos(dotEd1),
              dotEd2Pos = topPos(dotEd2),
              dotEd3Pos = topPos(dotEd3),
              dotEd4Pos = topPos(dotEd4);

        const centerScreen = window.innerHeight / 2;

        if (dotEd1Pos >= centerScreen-10 && dotEd1Pos <= centerScreen+10) {
            setdotEdActive(1);
            ReactGA.event({ category: 'Education', action: 'dotEd_active', label: '1' });
            } else if (dotEd2Pos >= centerScreen-10 && dotEd2Pos <= centerScreen+10) {
                setdotEdActive(2);
            } else if (dotEd3Pos >= centerScreen-10 && dotEd3Pos <= centerScreen+10) {
                setdotEdActive(3);
            } else if (dotEd4Pos >= centerScreen-10 && dotEd4Pos <= centerScreen+10) {
                setdotEdActive(4);
        };
    };

    useEffect(() => {   
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    });

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
                        <TimelineDot id={`dotEd${index+1}`} style={{ backgroundColor: dotEdActive === index+1 ? `${palette.light}` : 'white' }}/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <EducationDesc>
                        <Title style={{ color: dotEdActive === index+1 ? `${palette.light}` : 'black' }}>{item.education}</Title>
                        <Subtitle>{item.school}</Subtitle>
                    </EducationDesc>
                </EducationItem>
            ))}
        </EducationContainer>
    </Section>
  );
};