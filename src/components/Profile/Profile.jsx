import PropTypes from 'prop-types';
import { Description, Image, Name, Tag, Location, StatsList, StatsItem, StatLabel, StatQuantity} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
  return (
    <Description>
      <Image src={avatar} alt={username} />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
      <StatsList>
      <StatsItem>
        <StatLabel>Followers</StatLabel>
        <StatQuantity>{followers}</StatQuantity>
      </StatsItem>
      <StatsItem>
        <StatLabel>Views</StatLabel>
        <StatQuantity>{views}</StatQuantity>
      </StatsItem>
      <StatsItem>
        <StatLabel>Likes</StatLabel>
        <StatQuantity>{likes}</StatQuantity>
      </StatsItem>
    </StatsList>
    </Description>
  )
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}
