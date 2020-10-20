import styled from 'styled-components';
import { mobileBreakPoint, palette, fontSize } from '../../Common/theme';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 20px 0px;
    &:hover {
        transition: 0.5s;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    @media (max-width: ${mobileBreakPoint}) {
        width: -webkit-fill-available;
        margin: 20px;
    }
`;
	
export const CardIcon = styled.img`
    width: 30px;
    height: 30px;
`;

export const Title = styled.div`
    font-size: ${fontSize.subtitle};
    color: ${palette.darkest};
    margin: 10px;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ListRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ListIcon = styled.img`
    width: 15px;
    height: 15px;
    margin: 10px;
`;

export const ListItem = styled.div`
`;