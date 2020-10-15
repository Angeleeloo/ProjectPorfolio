import React, { useState } from 'react';
import ReactGA from '../../Common/ga';
import {StyledScrollToTopButton, ScrollToTopIcon} from './StyledScrollToTopButton';

export const ScrollToTopButton = () => {
    const [displayState, setdisplayState] = useState(false);
    window.onscroll = () => {scrollFunction()};
    const scrollFunction = () => {
        if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
            setdisplayState(true);
          } else {
            setdisplayState(false);
          }
        }
    const scrollToTop = (fromScrollPosition) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        ReactGA.event({ category: 'ScrollToTopButton', action: 'Button_clicked', label: 'From_Scroll_Position_' + fromScrollPosition });
    }

    return (
        <StyledScrollToTopButton displayState={displayState} onClick={() => scrollToTop(window.scrollY.toString())}>
            <ScrollToTopIcon src={'./Images/arrow-up.svg'}/>
        </StyledScrollToTopButton>
    )
}