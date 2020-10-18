import React, {useState, useEffect} from 'react';

/* HOC that lets it's children know when the user scrolled until a certain Y point */

export const WithPageScroll = (yPoint, children) => {
    const [hasReachedPoint, setHasReachedPoint] = useState(false);

    useEffect(() => {
        const doc = document;
        const onScroll = () => {
            if (doc.body.scrollTop > yPoint || doc.documentElement.scrollTop > yPoint) {
                setHasReachedPoint(true);
            } else {
                setHasReachedPoint(false);
            }
        };
        doc.addEventListener('scroll', onScroll);
        return () => {
            doc.removeEventListener('scroll', onScroll);
        };
    });

    return (
        <React.Fragment>
            {children(hasReachedPoint)}
        </React.Fragment>
    );
};
