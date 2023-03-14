import {
    FriendItem,
    FriendItemStatus,
    FriendItemAvatar,
    FriendName,
} from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, friendName, isOnline, id }) => {
    return (
            <FriendItem key={id}>
                <FriendItemStatus status={isOnline} />
                <FriendItemAvatar src={avatar} alt="User avatar" width="48" />
                <FriendName>{friendName}</FriendName>
            </FriendItem>
    );
};

FriendListItem.prototype = {
    avatar: PropTypes.string.isRequired,
    friendName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
