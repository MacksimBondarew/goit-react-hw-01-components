import PropTypes from 'prop-types';
import { ProfileMarkup, Description, PhotoUser, NameUser, TagUser,
LocationUser, StatsUser, StatsUserItem, StatsUserLabel, StatsUserLabelQuantity
} from './ProfileUser.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
    <ProfileMarkup key={username}>
        <Description>
            <PhotoUser
                src={avatar}
                alt="User avatar"
            />
            <NameUser>{username}</NameUser>
            <TagUser>@{tag}</TagUser>
            <LocationUser>{location}</LocationUser>
        </Description>
        <StatsUser>
            <StatsUserItem>
                <StatsUserLabel>Followers</StatsUserLabel>
                <StatsUserLabelQuantity>{stats.followers}</StatsUserLabelQuantity>
            </StatsUserItem>
            <StatsUserItem>
                <StatsUserLabel>Views</StatsUserLabel>
                <StatsUserLabelQuantity>{stats.views}</StatsUserLabelQuantity>
            </StatsUserItem>
            <StatsUserItem>
                <StatsUserLabel>Likes</StatsUserLabel>
                <StatsUserLabelQuantity>{stats.likes}</StatsUserLabelQuantity>
            </StatsUserItem>
        </StatsUser>
    </ProfileMarkup>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}