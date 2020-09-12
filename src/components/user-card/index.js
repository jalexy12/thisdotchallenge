import React, { useState } from 'react';
import { DotLoader } from 'react-spinners';
import githubQuery from '../../api-query';
import AdditionalUserDetails from './additional-user-details';
import styles from './styles.module.css';

function UserCard({ user }) {
  const [loading, setLoading]                               = useState(false);
  const [additionalDetails, setAdditionalDetails]           = useState(null);
  const [additionalDetailsError, setAdditionalDetailsError] = useState(null);

  function fetchAdditionalDetails() {
    const userDetailsQuery = githubQuery.formulateUserDetailsQuery(user);
    setLoading(true);

    githubQuery
      .searchMany(userDetailsQuery)
      .then((
        [{ data: followersData }, { data: followingData }, { data: reposData }, { data: starredData }]
      ) => {
        setLoading(false);
        setAdditionalDetails({ followersData, followingData, reposData, starredData })
      })
      .catch(e => {
        setLoading(false);
        setAdditionalDetailsError("Error fetching additional details");
      });
  }

  return (
    <div className={styles.userCard}>
      <span className={styles.userId}>{user.id}</span>
      <img src={user.avatar_url} />
      <span className={styles.userLogin}>{user.login}</span>
      <div className={styles.linksRow}>
        <a href={user.url} target="_blank">API Data</a>
        <a href={user.html_url} target="_blank">Profile</a>
      </div>
      {(!loading && !additionalDetails) && (
        <div className={styles.additionalDetails}>
          <button
            type="button"
            onClick={fetchAdditionalDetails}
          >
            Load Additional Details
          </button>
        </div>
      )}
      {loading && <DotLoader color="#FFFFFF" />}
      {additionalDetails && (
        <AdditionalUserDetails
          user={user}
          additionalDetails={additionalDetails}
        />
      )}
    </div>
  )
}

export default UserCard;