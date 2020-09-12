import React from 'react';
import { PacmanLoader } from 'react-spinners';
import usePagination from '../../hooks/use-pagination';
import BasicPagination from '../basic-pagination';
import UserCard from '../user-card';
import styles from './styles.module.css';

function ResultsList({
  loading,
  results,
  perPage,
  fetchPrevious,
  fetchNext
}) {
  const {
    currentPage,
    totalPages,
    previousPage,
    nextPage
  } = usePagination(results.total_count, perPage, fetchPrevious, fetchNext)

  if (results.items && results.items.length === 0) {
    return <div>Sorry, it looks like there's no results with that term. Try another term!</div>
  }

  return (
    <div className={styles.resultsContainer}>
      <h3>{results.total_count} results</h3>
      <BasicPagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        previousPage={previousPage}
      />
      <div className={styles.resultsList}>
        {loading ?
          <PacmanLoader color="#FFFF00" /> :
          results.items.map(user => <UserCard key={user.id} user={user} />)
        }
      </div>
    </div>
  );
}

export default ResultsList;
