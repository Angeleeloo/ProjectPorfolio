import React, { useRef, useState, useLayoutEffect } from 'react';
import {SectionContainer, SectionTitle, Separator} from '../../Components/StyledMainPage.js';
import {ExperienceContainer, ExperienceItem, ExperienceDesc, Date, Title, Subtitle, TimelineSeparator, TimelineDot, TimelineConnector} from './StyledResume.js';

export const Resume = () => {
    const dot1 = useRef(null), 
          dot2 = useRef(null),
          dot3 = useRef(null),
          dot4 = useRef(null);
    const [dotActive, setDotActive] = useState({
        dot1: false,
        dot2: false,
        dot3: false,
        dot4: false
    });

    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top;
        console.log('topPos is ', topPos);
        const dot1Pos = topPos(dot1.current),
              dot2Pos = topPos(dot2.current),
              dot3Pos = topPos(dot3.current),
              dot4Pos = topPos(dot3.current);
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if (scrollPos > 1660 && scrollPos < 1860) {
                setDotActive(state => ({ ...state, dot1: true }));
            } else if (scrollPos > 1860 && scrollPos < 2060) {
                setDotActive(state => ({ ...state, dot2: true }));
            } else if (scrollPos > 2060 && scrollPos < 2260) {
                setDotActive(state => ({ ...state, dot3: true }));
            } else if (scrollPos > 2260) {
                setDotActive(state => ({ ...state, dot4: true }));
            }
        };
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, []);

    return (
    <SectionContainer id={'Resume'}>
        <SectionTitle>Resume</SectionTitle>
        <Separator>___</Separator>
            <ExperienceContainer>
                <ExperienceItem>
                    <Date>2018 - PRESENT</Date>
                    <TimelineSeparator>
                        <TimelineDot ref={dot1} style={{ backgroundColor: dotActive.dot1 ? 'red' : 'white' }}/>
                        <TimelineConnector />
                    </TimelineSeparator> 
                        <ExperienceDesc>
                            <Title><b>Developer, B2B team</b> | SimilarWeb</Title>
                            <Subtitle>Developing, refactoring and fixing web components, mainly in React and Typescript, some in AngularJS legacy code.</Subtitle>
                        </ExperienceDesc>
                </ExperienceItem>
                <ExperienceItem>
                    <Date>2015 - 2018</Date>
                    <TimelineSeparator>
                    <TimelineDot ref={dot2} style={{ backgroundColor: dotActive.dot2 ? 'red' : 'white' }}/>
                        <TimelineConnector />
                    </TimelineSeparator>    
                        <ExperienceDesc>
                            <Title><b>Scrum Team Leader</b> & Web QA Engineer | SimilarWeb</Title>
                            <Subtitle>Established and led scrum teams. Managed project lifecycle from concept to launch, delivering measurable results. Implemented work procedure foundations turning a newly built team into result-oriented pioneers adapted by other teams.</Subtitle>
                        </ExperienceDesc>
                </ExperienceItem> 
                <ExperienceItem>
                    <Date>2011 - 2015</Date>
                    <TimelineSeparator>
                    <TimelineDot ref={dot3} style={{ backgroundColor: dotActive.dot3 ? 'red' : 'white' }}/>
                        <TimelineConnector />
                    </TimelineSeparator>
                        <ExperienceDesc>
                            <Title><b>QA Team Leader</b> | Viber</Title>
                            <Subtitle>Built and managed several platform teams in Israel and abroad, adjusting together with the company’s quick paced growth from startup to corporate.</Subtitle>
                        </ExperienceDesc>
                </ExperienceItem> 
                <ExperienceItem>
                    <Date>2010 – 2011</Date>
                    <TimelineSeparator>
                    <TimelineDot ref={dot4} style={{ backgroundColor: dotActive.dot4 ? 'red' : 'white' }}/>
                        <TimelineConnector />
                    </TimelineSeparator>    
                        <ExperienceDesc>
                            <Title><b>Mobile QA Engineer</b> | Viber</Title>
                            <Subtitle>Defined and developed the QA infrastructure from the ground up.</Subtitle>
                        </ExperienceDesc>
                </ExperienceItem>
            </ExperienceContainer>
    </SectionContainer>
  );
};