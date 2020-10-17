import React, { Fragment } from 'react';
import ReactGA from 'react-ga';
import {FlipCardContainer, FlipCardInner, FlipCardFront, FlipCardBack} from './StyledFlipCard';

export const FlipCard = (props) => {
    const { contentFront, contentBack, bgImage, GACategory, GAAction} = props;
    const sendGAEvent = (hoveredItem) => { ReactGA.event({ category: GACategory, action: GAAction, label: hoveredItem }) };

    return (
        <Fragment>
            <FlipCardContainer>
                <FlipCardInner onMouseEnter={() => sendGAEvent(contentFront)} >
                    <FlipCardFront>{contentFront}</FlipCardFront>
                    <FlipCardBack bgImage={bgImage}>{contentBack}</FlipCardBack>
                </FlipCardInner>
            </FlipCardContainer>
        </Fragment>

    )
}
