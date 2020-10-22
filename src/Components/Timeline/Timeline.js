import React from 'react';
import {palette} from '../../Common/theme.js';
import {TimelineSeparator, TimelineDot, TimelineConnector} from './StyledTimeline';

export const Timeline = (props) => {
    const {dotNumber, dotActive} = props;

    return (
        <TimelineSeparator>
            <TimelineDot id={`dotEd${dotNumber}`} style={{ backgroundColor: dotActive === dotNumber ? `${palette.light}` : 'white' }}/>
            <TimelineConnector />
        </TimelineSeparator>
    );
};