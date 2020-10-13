import React, { Fragment } from 'react';
import {MainContainer, LeftPane, RightPane, ContentContainer} from './StyledMainPage';
import {Sidebar} from '../Sections/Sidebar/Sidebar';
import {Home} from '../Sections/Home/Home';
import {About} from '../Sections/About/About';
import {Resume} from '../Sections/Resume/Resume';
import {Skills} from '../Sections/Skills/Skills';
import {Education} from '../Sections/Education/Education';
import {Languages} from '../Sections/Languages/Languages';
import {Contact} from '../Sections/Contact/Contact';
import {Footer} from '../Sections/Footer/Footer';
import {ScrollToTopButton} from '../Components/ScrollToTopButton/ScrollToTopButton';
import {isMobile} from '../Common/utils';

export const MainPage = () => {
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
                <ScrollToTopButton />
            </MainContainer>
        }
    </Fragment>
  );
}

export default MainPage;