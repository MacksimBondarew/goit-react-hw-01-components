import { FriendListItem,  FriendItem, FriendItemStatus, FriendItemAvatar, FriendName} from './FriendList.styled'
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
    <FriendListItem>
        {friends.map(({ avatar, name, isOnline, id}) => (
            <FriendItem key={id}>
                <FriendItemStatus status={isOnline}></FriendItemStatus>
                <FriendItemAvatar src={avatar} alt="User avatar" width="48" />
                <FriendName>{name}</FriendName>
            </FriendItem>
        ))}
    </FriendListItem>)
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}

