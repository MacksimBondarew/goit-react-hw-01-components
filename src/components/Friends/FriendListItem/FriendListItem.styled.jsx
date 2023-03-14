import styled from 'styled-components'

export const FriendItemList = styled.ul`
    display: block;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    width: inherit;
    padding: 0;
    width: 400px;
    margin-bottom: 20px;
`;

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    box-shadow: 0 0 10px #c6cccced;
    padding: 10px 20px;
    border-radius: 10px
`;
export const FriendItemStatus = styled.span`
    border-radius: 50px;
    margin-right: 20px;
    background-color: ${({ status }) => {
        if (status) {
            return `green`;
        } else {
            return `red`;
        }
    }};
    width: 10px;
    height: 10px;
`;
export const FriendItemAvatar = styled.img`
    width: 50px;
    margin-right: auto;
`;
export const FriendName = styled.p`
    font-weight: 500;
    font-size: 30px;
    color: #524a4d;
`;
