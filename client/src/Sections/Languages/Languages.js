import React from 'react';
import {Section} from '../../HOCs/Section/Section.js';
import {FlipCard} from '../../Components/FlipCard/FlipCard.js';
import {LanguagesContainer} from './StyledLanguages'

export const Languages = () => {

  return (
    <Section title={'Languages'}>
        <LanguagesContainer>            
            <FlipCard
                contentFront={'English | Mother tongue'}
                contentBack={'Howdy!'}
                trackSection={'Languages'}
                trackAction={'Item_hovered'}
                GALabel={'English'}
                bgImage={'https://media.giphy.com/media/35pTQFiy14OeA/giphy.gif'}/>
            <FlipCard
                contentFront={'Hebrew | Bilingual proficiency'}
                contentBack={'אהלן!'}
                trackSection={'Skills'}
                trackAction={'Item_hovered'}
                GALabel={'Hebrew'}
                bgImage={'https://media.giphy.com/media/QB4wuim3QhuohnnliO/giphy-downsized.gif'}/>
        </LanguagesContainer>
    </Section>
  );
};