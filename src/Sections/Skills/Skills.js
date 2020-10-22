import React from 'react';
import {Section} from '../../HOCs/Section/Section.js';
import {Card} from '../../Components/Card/Card.js';
import {ListRow, ListIcon, ListItem} from '../../Components/Card/StyledCard.js';
import {SkillsContainer} from './StyledSkills.js';

export const Skills = () => {
    const skillsList = [
        {
            icon: './Images/dev-icon.svg',
            title: `Frontend Developer`,
            listItems: [
                `HTML, CSS, Javascript, ES6`,
                `React, Styled Components, Material UI, Flow, Typescript, Webpack`,
                `GA Events, i18n key value translations`,
                `CI/CD with Gitlab, DevOps deployments inTeamCity`,
                `Testing UTs with Jest and E2E Selenium automation in Java`,
                `React Routes, Redux, Node.js and Express.`,
                `Agile methodology, task management in Jira`
            ]
        },
        {
            icon: './Images/pm-icon.svg',
            title: `Project Manager`,
            listItems: [
                `Jira expert, Scrum, Kanban, sprint & backlog task management`,
                `Sprint monitoring and statistics via customized dashboard and reports`,
                `Created Wiki documentations for work procedure and training guidelines`,
                `Roadmaps in Gantt charts`
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
                `STPs and STDs documented in Enterprise Tester and excel`,
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
                        trackSection={'Skills'}
                        trackAction={'Item_hovered'} >
                            { item.listItems.map((subitem) => {
                                return (
                                    <ListRow key={subitem}>
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