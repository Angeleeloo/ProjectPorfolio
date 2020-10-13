import React, { useState } from 'react';
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
    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }

    return (
        <StyledScrollToTopButton displayState={displayState} onClick={scrollToTop}>
            Scroll to top <ScrollToTopIcon src={'./Images/arrow-up.svg'}/>
        </StyledScrollToTopButton>
    )
}