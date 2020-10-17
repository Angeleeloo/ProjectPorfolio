import styled from 'styled-components';
import { palette, fontSize } from '../../Common/theme';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    margin: 5px;
`;