import React, { Fragment } from 'react';
import ReactGA from 'react-ga';
import {FlipCardContainer, FlipCardInner, FlipCardFront, FlipCardBack} from './StyledFlipCard';

export const FlipCard = (props) => {
    const {key, title,item1, item2, item3, item4, item5, item6, GACategory, GAAction} = props;
    const sendGAEvent = (hoveredItem) => { ReactGA.event({ category: GACategory, action: GAAction, label: hoveredItem }) };

    return (
        <Fragment>
            <FlipCardContainer key={key}>
                <FlipCardInner onMouseEnter={() => sendGAEvent(title)} >
                    <FlipCardFront>{title}</FlipCardFront>
                    <FlipCardBack>
                        <ul>
                            <li>{item1}</li>
                            <li>{item2}</li>
                            <li>{item3}</li>
                            <li>{item4}</li>
                            <li>{item5}</li>
                            <li>{item6}</li>
                        </ul>
                    </FlipCardBack>
                </FlipCardInner>
            </FlipCardContainer>
        </Fragment>

    )
}
