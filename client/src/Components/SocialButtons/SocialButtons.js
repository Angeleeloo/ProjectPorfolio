import React from 'react';
import ReactGA from 'react-ga';
import {SocialButtonsContainer, ButtonLink, SocialButton} from './StyledSocialButtons';

export const SocialButtons = (props) => {
    const {sourceClick} = props;
    const clickSocialButton = (socialLink) => {
        ReactGA.event({ category: sourceClick, action: 'Social_clicked', label: socialLink });
        window.location.href = socialLink;
    };

    return (
        <SocialButtonsContainer>
            <ButtonLink onClick={() => clickSocialButton('https://github.com/Angeleeloo')} target={'_blank'}>
                <SocialButton src={'./Images/github.svg'} alt={'github icon'}/>
            </ButtonLink>        
        </SocialButtonsContainer>
    );
};