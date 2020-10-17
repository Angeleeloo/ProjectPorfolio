import React from 'react';
import {Section} from '../../HOCs/Section/Section.js';
import {FlipCard} from '../../Components/FlipCard/FlipCard.js';
import {SkillsContainer} from './StyledSkills.js';

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
    <Section title={'Skills'}>
        <SkillsContainer>
            { skillsList.map((item, index) => (
                <FlipCard 
                    key={index} 
                    title={item.title} 
                    item1={item.desc1}
                    item2={item.desc2}
                    item3={item.desc3}
                    item4={item.desc4}
                    item5={item.desc5}
                    item6={item.desc6}
                    GACategory={'Skills'}
                    GAAction={'Item_hovered'}/>
            ))}
        </SkillsContainer>
    </Section>
  );
};