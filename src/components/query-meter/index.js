import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

const WrappedProgress = ({ remaining, limit }) => {
  const remainingPct = remaining / limit;

  return (
    <div className={styles.wrappedProgress}>
      <progress
        className={classNames({
          [styles.red]: remainingPct > 0.85,
          [styles.yellow]: remainingPct >= 0.6 && remainingPct <= 0.85,
          [styles.green]: remainingPct < 0.6
        })}
        value={remaining}
        max={limit}
      />
      <span
        className={classNames({
          [styles.red]: remainingPct > 0.85,
          [styles.yellow]: remainingPct >= 0.6 && remainingPct <= 0.85,
          [styles.green]: remainingPct < 0.6
        })}
      >
        {remaining} / {limit}
      </span>
    </div>
  );
};


function QueryMeter({ rateLimitData: { search, core } }) {
  if (!search || !core) { return null; }

  const searchRemaining = search.limit - search.remaining;
  const coreRemaining = core.limit - core.remaining;

  const now = new Date();
  const searchTime = Math.abs(search.actualReset.getMinutes() - now.getMinutes());
  const coreTime = 60 - Math.abs((core.actualReset.getMinutes() - now.getMinutes()));

  return (
    <div className={styles.queryMeter}>
      <div>
        <span>Searches Used</span>
        <small>Resets in {searchTime} minutes.</small>
        <WrappedProgress remaining={searchRemaining} limit={search.limit} />
      </div>
      <div>
        <span>Detail Requests Used</span>
        <small>Reset in {coreTime} minutes</small>
        <WrappedProgress remaining={coreRemaining} limit={core.limit} />
      </div>
    </div>
  );
  return <div>Hello</div>;
}

export default QueryMeter;
