import PropTypes from 'prop-types';
import { FriendsItem, Status, Avatar, FriendName } from './FriendListItem.styled'

export const FriendListItem = ({id, avatar, name, isOnline}) => {
  return (
  <FriendsItem key={id}>
    <Status isOnline={isOnline}>&bull;</Status>
      <Avatar src={avatar} alt={name} width= '50'/>
      <FriendName>{name}</FriendName>
  </FriendsItem>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};