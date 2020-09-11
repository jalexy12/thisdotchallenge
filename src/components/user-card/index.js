import React from 'react';

function UserCard({ user }) {
  console.log(user);
  return <div>{user.login}</div>
}

export default UserCard;
