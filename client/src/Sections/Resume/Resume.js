import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import {palette} from '../../Common/theme';
import {Section} from '../../HOCs/Section/Section.js';
import {ExperienceContainer, ExperienceItem, ExperienceDesc, Date, Title, Subtitle, TimelineSeparator, TimelineDot, TimelineConnector} from './StyledResume.js';

export const Resume = () => {
    const [dotActive, setDotActive] = useState();

    const onScroll = () => {
        const dot1 = document.getElementById('dot1'),
              dot2 = document.getElementById('dot2'),
              dot3 = document.getElementById('dot3'),
              dot4 = document.getElementById('dot4'),
              dot5 = document.getElementById('dot5');

        const topPos = (dot) => dot.getBoundingClientRect().top;
        const dot1Pos = topPos(dot1),
              dot2Pos = topPos(dot2),
              dot3Pos = topPos(dot3),
              dot4Pos = topPos(dot4),
              dot5Pos = topPos(dot5);

        const centerScreen = window.innerHeight / 2;

        if (dot1Pos >= centerScreen-10 && dot1Pos <= centerScreen+10) {
            setDotActive(1);
            ReactGA.event({ category: 'Resume', action: 'Dot_active', label: '1' });
            } else if (dot2Pos >= centerScreen-10 && dot2Pos <= centerScreen+10) {
                setDotActive(2);
            } else if (dot3Pos >= centerScreen-10 && dot3Pos <= centerScreen+10) {
                setDotActive(3);
            } else if (dot4Pos >= centerScreen-10 && dot4Pos <= centerScreen+10) {
                setDotActive(4);
            } else if (dot5Pos >= centerScreen-10 && dot5Pos <= centerScreen+10) {
                setDotActive(5);
        };
    };

    useEffect(() => {   
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    });

      const experienceList = [
            {
                date: '2018 - PRESENT',
                profession: 'FrontEnd Developer',
                company: 'SimilarWeb',
                jobDesc: `Working with React, Typescript, Flow, Styled Components, Material UI, GA Events, i18n in Webstorm. 
                    Built responsive web pages for both desktop and mobile.
                    Familiarity with Redux, Node.js and Express.
                    CI/CD in Gitlab.
                    Ran and maintained Java automation on Selenium with VSCode.
                    Environment deployments made via TeamCity.
                    Managed tasks in Jira`
            },
            {
                date: '2015 - 2018',
                profession: 'Scrum Team Leader',
                company: 'SimilarWeb',
                jobDesc: `Established and led scrum teams. 
                    Managed project lifecycle from concept to launch, delivering measurable results. 
                    Implemented work procedure foundations turning a newly built team into result-oriented pioneers adapted by other teams.`
            },
            {
                date: '2015 - 2018',
                profession: ' Web QA Engineer',
                company: 'SimilarWeb',
                jobDesc: `Created quality guidelines and maintained stability of SimilarWeb’s flagship B2B product.`
            },
            {
                date: '2011 - 2015',
                profession: 'QA Team Leader',
                company: 'Viber',
                jobDesc: `Built and managed several platform teams in Israel and abroad, adjusting together with the company’s quick paced growth from startup to corporate.`
            },
            {
                date: '2010 – 2011',
                profession: 'Mobile QA Engineer',
                company: 'Viber',
                jobDesc: `Defined and developed the QA infrastructure from the ground up.`
            },
      ];

    return (
    <Section title={'Resume'}>
        <ExperienceContainer>
            { experienceList.map((item, index) => (
                <ExperienceItem key={index}>
                    <Date>{item.date}</Date>
                    <TimelineSeparator>
                        <TimelineDot id={`dot${index+1}`} style={{ backgroundColor: dotActive === index+1 ? `${palette.light}` : 'white' }}/>
                        <TimelineConnector />
                    </TimelineSeparator> 
                    <ExperienceDesc>
                        <Title style={{ color: dotActive === index+1 ? `${palette.light}` : 'black' }}><b>{item.profession}</b> | {item.company}</Title>
                        <Subtitle>{item.jobDesc}</Subtitle>
                    </ExperienceDesc>
                </ExperienceItem>
            ))}
        </ExperienceContainer>
    </Section>
  );
};