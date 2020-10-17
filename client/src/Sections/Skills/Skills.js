import React from 'react';
import {Section} from '../../HOCs/Section/Section.js';
import {Card} from '../../Components/Card/Card.js';
import {ListRow, ListIcon, ListItem} from '../../Components/Card/StyledCard.js';
import {SkillsContainer} from './StyledSkills.js';

export const Skills = () => {
    const skillsList = [
        {
            icon: './Images/pm-icon.svg',
            title: `Project Manager`,
            listItems: [
                `Jira expert`,
                `Scrum, Kanban, sprint & backlog task management`,
                `Sprint monitoring and statistics via customized dashboard and reports`,
                `Work procedure documentation in Wiki`,
                `Training guidelines in Wiki`,
                `Roadmaps in Gantt charts`
            ]
        },
        {
            icon: './Images/dev-icon.svg',
            title: `Frontend Developer`,
            listItems: [
                `HTML, CSS, Javascript`,
                `React, Redux, Webpack, Webstorm`,
                `Flow, Typescript`,
                `Gitlab, TeamCity`,
                `UTs with Jest`,
                `E2E automation with Selenium`
            ]
        },
        {
            icon: './Images/qa-icon.svg',
            title: `QA Team Leader`,
            listItems: [
                `Web page testing`,
                `Cross browser validations`,
                `Mobile application testing`,
                `iOS & Android platforms`,
                `E2E automation runs in Java via Selenium`,
                `STPs documented in Enterprise Tester and excel`,
            ]
        }        
    ];

  return (
    <Section title={'Skills'}>
        <SkillsContainer>
            { skillsList.map((item) => (
                    <Card
                        key={item.title}
                        cardIcon={item.icon}
                        title={item.title}                        
                        gaCategory={'Skills'}
                        gaAction={'Item_hovered'} >
                            { item.listItems.map((subitem) => {
                                return (
                                    <ListRow>
                                        <ListIcon src={'./Images/checkmark-icon.svg'}/>
                                        <ListItem>{subitem}</ListItem>
                                    </ListRow>
                                )
                            })}
                    </Card>
                )
            )}
        </SkillsContainer>
    </Section>
  );
};