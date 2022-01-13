import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import {palette} from '../../Common/theme';
import {Section} from '../../HOCs/Section/Section.js';
import {ExperienceContainer, ExperienceItem, ExperienceDesc, Date, Title, Subtitle, TimelineSeparator, TimelineDot, TimelineConnector} from './StyledExperience.js';

export const Experience = () => {
    const [dotActive, setdotActive] = useState();

    const onScroll = () => {
        const dot1 = document.getElementById('dot1'),
              dot2 = document.getElementById('dot2'),
              dot3 = document.getElementById('dot3'),
              dot4 = document.getElementById('dot4');

        const topPos = (dot) => dot.getBoundingClientRect().top;
        const dot1Pos = topPos(dot1),
              dot2Pos = topPos(dot2),
              dot3Pos = topPos(dot3),
              dot4Pos = topPos(dot4);

        const centerScreen = window.innerHeight / 2;

        if (dot1Pos >= centerScreen-10 && dot1Pos <= centerScreen+10) {
            setdotActive(1);
            ReactGA.event({ category: 'Experience', action: 'Dot_active', label: '1' });
            } else if (dot2Pos >= centerScreen-10 && dot2Pos <= centerScreen+10) {
                setdotActive(2);
            } else if (dot3Pos >= centerScreen-10 && dot3Pos <= centerScreen+10) {
                setdotActive(3);
            } else if (dot4Pos >= centerScreen-10 && dot4Pos <= centerScreen+10) {
                setdotActive(4);
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
                jobDesc: `Developing a large scale B2C product with millions of users worldwide.
                    Developing the product by building new pages and refactoring existing pages, creating reusable components in Reactjs together with dynamic styling in Styled Components and Material UI. 
                    E2E responsibility (design, code, test, deploy) as part of a delivering scrum team (Product Manager, Designer, Web and Mobile Developers).`
            },
            {
                date: '2015 - 2018',
                profession: 'Agile R&D Team Leader & QA',
                company: 'SimilarWeb',
                jobDesc: `Built and led 2 scrum teams, managed technical projects from concept to launch. 
                    Achieved delivery turnarounds and grew the product to a solid level of maturity in terms of 
                    customer value, quality, and maintainability, during the company’s rapid expansion from 100 to 300 employees 
                    within my 1st year there. Created quality guidelines and maintained stability of SimilarWeb’s flagship B2B product.`
            },
            {
                date: '2011 - 2015',
                profession: 'QA Department Leader',
                company: 'Viber',
                jobDesc: `Established Viber’s QA department from the ground up, hiring and mentoring up to 30 QA engineers 
                    divided into 5 platform teams (iPhone, Android, Desktop, Feature Phones, Automation) and 
                    managing each platform’s team leader in Israel and abroad, under the highly demanding conditions of the application’s rapid growth and 
                    business transition from startup to corporate (7 to 300 employees) contributing to one of Israel’s biggest exit in 2014 - Japan's Rakuten buys chat app Viber for $900 million.`
            },
            {
                date: '2010 – 2011',
                profession: 'Mobile QA Engineer',
                company: 'Viber',
                jobDesc: `Defined and developed from scratch the QA infrastructure upon which Viber works today.`
            },
      ];

    return (
    <Section title={'Experience'}>
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