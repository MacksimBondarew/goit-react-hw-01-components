import PropTypes from 'prop-types';
import { FriendListItem } from './../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
    friends.map(({ avatar, name, isOnline, id}) => (
        <FriendListItem key={id} avatar={avatar}
        friendName={name}
        isOnline={isOnline}
        id={id}
        />
        )))
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
}

