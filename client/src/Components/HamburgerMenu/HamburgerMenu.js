import React, { useState } from 'react';
import { HamburgerContainer, HamburgerStrip1, HamburgerStrip2, HamburgerStrip3 } from './StyledHamburgerMenu';

export const HamburgerMenu = () => {
  const [iconAnimation, setIconAnimation] = useState(false);

  return (
      <HamburgerContainer onClick={() => setIconAnimation(!iconAnimation)}>
          <HamburgerStrip1 iconAnimation={iconAnimation} />
          <HamburgerStrip2 iconAnimation={iconAnimation} />
          <HamburgerStrip3 iconAnimation={iconAnimation} />
      </HamburgerContainer>
  );
};