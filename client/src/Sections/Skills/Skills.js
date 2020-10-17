import React from 'react';
import {Section} from '../../HOCs/Section/Section.js';
import {Card} from '../../Components/Card/Card.js';
import {SkillsContainer} from './StyledSkills.js';

export const Skills = () => {
    const skillsList = [
        {
            icon: './Images/pm-icon.svg',
            title: `Project Manager`,
            desc1: `Jira expert`,
            desc2: `Scrum, Kanban, sprint & backlog task management`,
            desc3: `Sprint monitoring and statistics via customized dashboard and reports`,
            desc4: `Work procedure documentation in Wiki`, 
            desc5: `Training guidelines in Wiki`,                
            desc6: `Roadmaps in Gantt charts`
        },
        {
            icon: './Images/dev-icon.svg',
            title: `Frontend Developer`,
            desc1: `HTML, CSS, Javascript`,
            desc2: `React, Redux, Webpack, Webstorm`,
            desc3: `Flow, Typescript`,
            desc4: `Gitlab, TeamCity`,
            desc5: `UTs with Jest`,
            desc6: `E2E automation with Selenium`
        },
        {
            icon: './Images/qa-icon.svg',
            title: `QA Team Leader`,
            desc1: `Web page testing`,
            desc2: `Cross browser validations`,
            desc3: `Mobile application testing`,
            desc4: `iOS & Android platforms`,
            desc5: `E2E automation runs in Java via Selenium`,
            desc6: `STPs documented in Enterprise Tester and excel`,
        }
    ];

  return (
    <Section title={'Skills'}>
        <SkillsContainer>
            { skillsList.map((item) => (
                <Card
                    cardIcon={item.icon}
                    title={item.title}
                    listIcon={'./Images/checkbox-icon.svg'}
                    listItem={item.desc1}
                    gaCategory={'Skills'}
                    gaAction={'Item_hovered'}/>
            ))}
        </SkillsContainer>
    </Section>
  );
};