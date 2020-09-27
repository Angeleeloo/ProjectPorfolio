import React from 'react';
import {SectionContainer, SectionTitle, Separator} from '../../Components/StyledMainPage.js';
import {ExperienceContainer, Date, JobDescription} from './StyledResume.js';

export const Resume = () => {
  return (
    <SectionContainer id={'Resume'}>
        <SectionTitle>Resume</SectionTitle>
        <Separator>___</Separator>
        <ExperienceContainer>
            <Date>2018 - PRESENT</Date>
            <JobDescription>
                <div>Developer | SimilarWeb</div>
                <div>Developing, refactoring and fixing web components, mainly in React and Typescript, some in AngularJS legacy code.</div>
            </JobDescription>
        </ExperienceContainer>
        <br/>
        <ExperienceContainer>
            <Date>2015 - 2018</Date>
            <JobDescription>
                <div>Scrum Team Leader & Web QA Engineer | SimilarWeb</div>
                <div>Established and led scrum teams. Managed project lifecycle from concept to launch, delivering measurable results. Implemented work procedure foundations turning a newly built team into result-oriented pioneers adapted by other teams.</div>
            </JobDescription>
        </ExperienceContainer>
        <br/>
        <ExperienceContainer>
            <Date>2011 - 2015</Date>
            <JobDescription>
                <div>QA Team Leader | Viber</div>
                <div>Built and managed several platform teams in Israel and abroad, adjusting together with the company’s quick paced growth from startup to corporate.</div>
            </JobDescription>
        </ExperienceContainer>
        <br/>
        <ExperienceContainer>
            <Date>2010 – 2011</Date>
            <JobDescription>
                <div>Mobile QA Engineer | Viber</div>
                <div>Defined and developed the QA infrastructure from the ground up.</div>
            </JobDescription>
        </ExperienceContainer>
    </SectionContainer>
  );
};