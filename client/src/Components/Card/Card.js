import React from 'react';
import ReactGA from 'react-ga';
import {CardContainer, CardIcon, Title, List, ListRow} from './StyledCard';

export const Card = (props) => {
    const {cardIcon, title, children, trackSection, trackAction} = props;
    const sendGAEvent = (hoveredCard) => { ReactGA.event({ category: trackSection, action: trackAction, label: hoveredCard }) };

    return (
        <CardContainer onMouseEnter={() => sendGAEvent(title)}>
            <ListRow>
                <CardIcon src={cardIcon}/>
                <Title>{title}</Title>
            </ListRow>
            <List>
                {children}
            </List>
        </CardContainer>
    )
}
