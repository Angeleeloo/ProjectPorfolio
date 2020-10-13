import React from 'react';
import {Section} from '../../HOCs/Section/Section.js';
import {SkillsContainer, SkillCard, SkillCardInner, SkillFront, SkillBack} from './StyledSkills.js';

export const Skills = () => {
    const skillsList = [
        {
            title: `Project Manager`,
            desc1: `Jira expert`,
            desc2: `Scrum, Kanban, sprint & backlog task management`,
            desc3: `Sprint monitoring and statistics via customized dashboard and reports`,
            desc4: `Work procedure documentation in Wiki`, 
            desc5: `Training guidelines in Wiki`,                
            desc6: `Roadmaps in Gantt charts`
        },
        {
            title: `Frontend Developer`,
            desc1: `HTML, CSS, Javascript`,
            desc2: `React, Redux, Webpack, Webstorm`,
            desc3: `Flow, Typescript`,
            desc4: `Gitlab, TeamCity`,
            desc5: `UTs with Jest`,
            desc6: `E2E automation with Selenium`
        },
        {
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
    <Section id={'Skills'} title={'Skills'}>
        <SkillsContainer>
            { skillsList.map((item, index) => (
                <SkillCard key={index}>
                    <SkillCardInner>
                        <SkillFront>{item.title}</SkillFront>
                        <SkillBack>
                            <ul>
                                <li>{item.desc1}</li>
                                <li>{item.desc2}</li>
                                <li>{item.desc3}</li>
                                <li>{item.desc4}</li>
                                <li>{item.desc5}</li>
                                <li>{item.desc6}</li>
                            </ul>
                        </SkillBack>
                    </SkillCardInner>
                </SkillCard>
            ))}
        </SkillsContainer>
    </Section>
  );
};