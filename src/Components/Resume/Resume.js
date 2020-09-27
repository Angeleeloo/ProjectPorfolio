import React from 'react';
import {SectionContainer, SectionTitle, Separator} from '../../Components/StyledMainPage.js';
import {ExperienceContainer, Date, JobDescription} from './StyledResume.js';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

export const Resume = () => {
    const experienceList = [
        {
            date: '2018-PRESENT',
            jobTitle: 'Developer, B2B team',
            company: 'SimilarWeb',
            jobDesc: 'Developing, refactoring and fixing web components, mainly in React and Typescript, some in AngularJS legacy code.'
        },
        {
            date: '2015 - 2018',
            jobTitle: 'Scrum Team Leader & Web QA Engineer',
            company: 'SimilarWeb',
            jobDesc: 'Established and led scrum teams. Managed project lifecycle from concept to launch, delivering measurable results. Implemented work procedure foundations turning a newly built team into result-oriented pioneers adapted by other teams.'
        },
        {
            date: '2011 - 2015',
            jobTitle: 'QA Team Leader',
            company: 'Viber',
            jobDesc: 'Built and managed several platform teams in Israel and abroad, adjusting together with the company’s quick paced growth from startup to corporate.'
        },
        {
            date: '2010 – 2011',
            jobTitle: 'Mobile QA Engineer',
            company: 'Viber',
            jobDesc: 'Defined and developed the QA infrastructure from the ground up.'
        }
    ];

    return (
    <SectionContainer id={'Resume'}>
        <SectionTitle>Resume</SectionTitle>
        <Separator>___</Separator>
            <ExperienceContainer>
                <Timeline>
                    { experienceList.map((experience) => 
                        <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography color="textSecondary">
                                <Date>{experience.date}</Date>
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography>
                                <JobDescription>
                                    <div>{experience.jobTitle} | {experience.company}</div>
                                    <div>{experience.jobDesc}</div>
                                </JobDescription>
                            </Typography>
                        </TimelineContent>
                        </TimelineItem> 
                    )}
                    </Timeline>
            </ExperienceContainer>
    </SectionContainer>
  );
};