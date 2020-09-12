import React from 'react';
import styles from './styles.module.css';

function AdditionalUserDetails({
  additionalDetails: {
    followersData,
    followingData,
    reposData,
    starredData
  }
}) {
  console.log(
    followersData,
    followingData,
    reposData,
    starredData
  );
  return (
    <div className={styles.additionalUserDetails}>
      Hello
    </div>
  );
};

export default AdditionalUserDetails;
