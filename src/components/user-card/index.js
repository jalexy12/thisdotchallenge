import React from 'react';
import styles from './styles.module.css';

// avatar_url: "https://avatars3.githubusercontent.com/u/32080604?v=4"
// followers_url: "https://api.github.com/users/testerting/followers"
// following_url: "https://api.github.com/users/testerting/following{/other_user}"
// html_url: "https://github.com/testerting"
// id: 32080604
// login: "testerting"
// organizations_url: "https://api.github.com/users/testerting/orgs"
// repos_url: "https://api.github.com/users/testerting/repos"
// starred_url: "https://api.github.com/users/testerting/starred{/owner}{/repo}"
// url: "https://api.github.com/users/testerting"

function UserCard({ user }) {
  // console.log(user);
  return (
    <div className={styles.userCard}>
      <span>{user.id}</span>
      <img src={user.avatar_url} />
      <span>{user.login}</span>
      <a href={user.url}>API Data</a>
      <a href={user.html_url} target="_blank">Profile</a>
    </div>
  )
}

export default UserCard;
