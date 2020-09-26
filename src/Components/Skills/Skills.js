import React from 'react';
import {SectionContainer, SectionTitle, Separator} from '../../Components/StyledMainPage.js';
import {SkillsContainer, SkillContent} from './StyledSkills.js';

export const Skills = () => {
  return (
    <SectionContainer>
        <SectionTitle>Skills</SectionTitle>
        <Separator>___</Separator>
        <SkillsContainer>
            <SkillContent>Project Management<br/>
                Jira boards (Scrum, Kandban, customized dashboards), sprint statistics and reports, work
                procedure documentation and training guidelines. Gantt charts using TeamGantt.
            </SkillContent>
            <SkillContent>Frontend Development<br/>
                HTML, CSS, Javascript, React, AngularJS, Typescript, Grunt, Webpack, Webstorm, Gitlab,
                TeamCity.
            </SkillContent>
            <SkillContent>QA<br/>
                Software and web application testing. iOS, Android, desktop platforms. TeamCity deployments and automation
                runs. STPs documented in Enterprise Tester and excel. Use of ADB tools.
            </SkillContent>
        </SkillsContainer>
    </SectionContainer>
  );
};