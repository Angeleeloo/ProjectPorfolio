import React from 'react';
import ReactGA from 'react-ga';
import {CardContainer, CardIcon, Title, List, ListRow, ListIcon, ListItem} from './SlyedCard';

export const Card = (props) => {
    const {cardIcon, title, listIcon, listItem, gaCategory, gaAction} = props;
    const sendGAEvent = (hoveredCard) => { ReactGA.event({ category: gaCategory, action: gaAction, label: hoveredCard }) };

    return (
        <CardContainer onMouseEnter={() => sendGAEvent(title)}>
            <ListRow>
                <CardIcon src={cardIcon}/>
                <Title>{title}</Title>
            </ListRow>
            <List>
                <ListRow>
                    <ListIcon src={listIcon}/>
                    <ListItem>{listItem}</ListItem>
                </ListRow>
            </List>
        </CardContainer>
    )
}
