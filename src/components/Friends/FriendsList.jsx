import { FriendListItem,  FriendItem, FriendItemStatus, FriendItemAvatar, FriendName} from './FriendList.styled'

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