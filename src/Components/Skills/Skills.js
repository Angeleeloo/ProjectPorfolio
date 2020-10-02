import React from 'react';
import {SectionContainer, SectionTitle, Separator} from '../../Components/StyledMainPage.js';
import {SkillsContainer, SkillCard, SkillCardInner, SkillFront, SkillBack} from './StyledSkills.js';

export const Skills = () => {
  return (
    <SectionContainer id={'Skills'}>
        <SectionTitle>Skills</SectionTitle>
        <Separator>___</Separator>

        <SkillsContainer>
            <SkillCard>
                <SkillCardInner>
                    <SkillFront>Project<br/>Manager</SkillFront>
                    <SkillBack>
                        Jira boards (Scrum, Kandban, customized dashboards), sprint statistics and reports, work
                        procedure documentation and training guidelines. Gantt charts using TeamGantt.
                    </SkillBack>
                </SkillCardInner>
            </SkillCard>

            <SkillCard>
                <SkillCardInner>
                    <SkillFront>Frontend<br/>Developer</SkillFront>
                    <SkillBack>
                        HTML, CSS, Javascript, React, AngularJS, Typescript, Grunt, Webpack, Webstorm, Gitlab, TeamCity.
                    </SkillBack> 
                </SkillCardInner>
            </SkillCard>   

            <SkillCard>
                <SkillCardInner>
                    <SkillFront>QA<br/>Team Leader</SkillFront>
                    <SkillBack>
                        Software and web application testing. iOS, Android, desktop platforms. TeamCity deployments and automation
                        runs. STPs documented in Enterprise Tester and excel. Use of ADB tools.
                    </SkillBack>
                </SkillCardInner>
            </SkillCard>
            
        </SkillsContainer>

    </SectionContainer>
  );
};