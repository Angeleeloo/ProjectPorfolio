import React from 'react';
import {MainContainer, LeftPane, RightPane, ContentContainer} from './StyledMainPage';
import {Sidebar} from './Sidebar/Sidebar';
import {Home} from './Home/Home';
import {About} from './About/About';
import {Resume} from './Resume/Resume';
import {Skills} from './Skills/Skills';
import {Education} from './Education/Education';
import {Languages} from './Languages/Languages';
import {Contact} from './Contact/Contact';

export const MainPage = () => {
  return (
    <MainContainer>
        <LeftPane>
            <Sidebar/>
        </LeftPane>
        <RightPane>
            <ContentContainer>
                <Home/>
                <About/>
                <Skills/>
                <Resume/>
                <Education/>
                <Languages/>
                <Contact/>
            </ContentContainer>
        </RightPane>
    </MainContainer>
  );
}

export default MainPage;