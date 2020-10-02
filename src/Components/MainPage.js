import React, { useState } from 'react';
import {MainContainer, LeftPane, RightPane, ContentContainer, ScrollToTopButton, ScrollToTopIcon} from './StyledMainPage';
import {Sidebar} from './Sidebar/Sidebar';
import {Home} from './Home/Home';
import {About} from './About/About';
import {Resume} from './Resume/Resume';
import {Skills} from './Skills/Skills';
import {Education} from './Education/Education';
import {Languages} from './Languages/Languages';
import {Contact} from './Contact/Contact';

export const MainPage = () => {
  const [displayState, setdisplayState] = useState(false);
  window.onscroll = () => {scrollFunction()};
  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setdisplayState(true);
    } else {
      setdisplayState(false);
    }
  }
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

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
        <ScrollToTopButton displayState={displayState} onClick={scrollToTop}>
            Scroll to top <ScrollToTopIcon src={'./Images/arrow-up.svg'}/>
        </ScrollToTopButton>
    </MainContainer>
  );
}

export default MainPage;