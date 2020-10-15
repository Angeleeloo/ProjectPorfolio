import React, { useState, useLayoutEffect } from 'react';
import ReactGA from '../../Common/ga.js';
import {Section} from '../../HOCs/Section/Section.js';
import {ExperienceContainer, ExperienceItem, ExperienceDesc, Date, Title, Subtitle, TimelineSeparator, TimelineDot, TimelineConnector} from './StyledResume.js';

export const Resume = () => {
    const [dotActive, setDotActive] = useState([]);
    // const dot1 = document.getElementById('dot1'), 
    //       dot2 = document.getElementById('dot2'), 
    //       dot3 = document.getElementById('dot3'), 
    //       dot4 = document.getElementById('dot4');

    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top;
        console.log('topPos is ', topPos);
        // const dot1Pos = topPos(dot1),
        //       dot2Pos = topPos(dot2),
        //       dot3Pos = topPos(dot3),
        //       dot4Pos = topPos(dot3);
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            //modify trigger when scroll is center screen (window.innerHeight / 2?)
            if (scrollPos > 2100 && scrollPos < 2200) {
                setDotActive( ...dotActive, [1]);
                ReactGA.event({ category: 'Resume', action: 'Dot_active', label: '1' });
            } else if (scrollPos > 2200 && scrollPos < 2300) {
                setDotActive(...dotActive, [2]);
            } else if (scrollPos > 2300 && scrollPos < 2400) {
                setDotActive(...dotActive, [3]);
            } else if (scrollPos > 2400 && scrollPos < 2500) {
                setDotActive(...dotActive, [4]);
            } else if (scrollPos > 2500) {
                setDotActive(...dotActive, [5]);
            }
        };
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, []);

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
                            <TimelineDot id={`dot${index+1}`} style={{ backgroundColor: dotActive.includes(index+1) ? 'red' : 'white' }}/>
                            <TimelineConnector />
                        </TimelineSeparator> 
                        <ExperienceDesc>
                            <Title style={{ color: dotActive.includes(index+1) ? `${palette.primary}` : 'black' }}><b>{item.profession}</b> | {item.company}</Title>
                            <Subtitle>{item.jobDesc}</Subtitle>
                        </ExperienceDesc>
                    </ExperienceItem>
                ))}
            </ExperienceContainer>
    </Section>
  );
};