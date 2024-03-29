import React, { Fragment } from 'react';
import {SectionContainer, SectionTitle} from './StyledSection';

export const Section = (props) => {
  const {title, children} = props;

  return (
    <SectionContainer id={title}>
        <SectionTitle>{title}</SectionTitle>
        <Fragment>
            {children}
        </Fragment>
    </SectionContainer>
  );
};