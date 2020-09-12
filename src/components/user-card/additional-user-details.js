import React from 'react';
import styles from './styles.module.css';

const AdditionalUserDetails = ({
  additionalDetails: {
    followersData,
    followingData,
    reposData,
    starredData
  }
}) => (
  <div className={styles.additionalUserDetails}>
    <div>
      <span>
        <i className="far fa-file"></i>&nbsp;
        <strong>Repos</strong>&nbsp;
      </span>
      {reposData.length}
    </div>
    <div>
      <span>
        <i className="fas fa-star"></i>&nbsp;
        <strong>Stars</strong>&nbsp;
      </span>
      {starredData.length}
    </div>
    <div>
      <span>
        <i className="fas fa-user"></i>&nbsp;
        <strong>Following</strong>&nbsp;
      </span>
      {followingData.length}
    </div>
    <div>
      <span>
        <i className="fas fa-users"></i>&nbsp;
        <strong>Followers</strong>&nbsp;
      </span>
      {followersData.length}
    </div>
  </div>
);

export default AdditionalUserDetails;
