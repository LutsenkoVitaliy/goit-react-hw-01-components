import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  flex-basis: calc(100% / 5);
  margin-left: 30px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const colorOnline = ({ isOnline }) => {
  return isOnline ? 'green' : 'red'
}

export const Status = styled.span`
  font-size: 36px;
  margin-right: 5px;
  color: ${colorOnline};
`;

export const Avatar = styled.img`
  border-radius: 25%;
  background-color: #ffffff;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #000000;
`;
