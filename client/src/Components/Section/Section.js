import React from 'react';


export const Section = () => {
  return (
    <Container>
        <Title>title={title}</Title>
        <Separator/>
        <Content>
            {children}
        </Content>
    </Container>
  );
};