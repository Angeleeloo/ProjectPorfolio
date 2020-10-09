import React, { Fragment, useState } from 'react';
import {MainContainer, LeftPane, RightPane, ContentContainer, ScrollToTopButton, ScrollToTopIcon} from './StyledMainPage';
import {Sidebar} from './Sidebar/Sidebar';
import {Home} from './Home/Home';
import {About} from './About/About';
import {Resume} from './Resume/Resume';
import {Skills} from './Skills/Skills';
import {Education} from './Education/Education';
import {Languages} from './Languages/Languages';
import {Contact} from './Contact/Contact';
import {Footer} from './Footer/Footer';

export const MainPage = () => {
  const [displayState, setdisplayState] = useState(false);
  window.onscroll = () => {scrollFunction()};
  const scrollFunction = () => {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
      setdisplayState(true);
    } else {
      setdisplayState(false);
    }
  }
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const isAndroid = navigator.userAgent.includes('Android');
  const isiPhone = navigator.userAgent.includes('iPhone');
  const isMobile = isAndroid || isiPhone;

  return (
    <Fragment>
        { isMobile ?
            <div style={{ width: '100%' }}>
                <Sidebar isMobile={isMobile}/>
                <Home isMobile={isMobile}/>
                <About/>
                <Skills/>
                <Resume/>
                <Education/>
                <Languages/>
                <Contact/>
                <Footer/>
            </div>
            :
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
                        <Footer/>
                    </ContentContainer>
                </RightPane>
                <ScrollToTopButton displayState={displayState} onClick={scrollToTop}>
                    Scroll to top <ScrollToTopIcon src={'./Images/arrow-up.svg'}/>
                </ScrollToTopButton>
            </MainContainer>
        }
    </Fragment>
  );
}

export default MainPage;