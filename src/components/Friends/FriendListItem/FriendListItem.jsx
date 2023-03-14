import {
    FriendItemList,
    FriendItem,
    FriendItemStatus,
    FriendItemAvatar,
    FriendName,
} from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, friendName, isOnline, id }) => {
    return (
        <FriendItemList>
            <FriendItem key={id}>
                <FriendItemStatus status={isOnline} />
                <FriendItemAvatar src={avatar} alt="User avatar" width="48" />
                <FriendName>{friendName}</FriendName>
            </FriendItem>
        </FriendItemList>
    );
};

FriendListItem.prototype = {
    avatar: PropTypes.string.isRequired,
    friendName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
