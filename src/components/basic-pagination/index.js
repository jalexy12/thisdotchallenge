import React from 'react';
import styles from './styles.module.css';

const BasicPagination = ({
  currentPage,
  totalPages,
  nextPage,
  previousPage
}) => (
  <div className={styles.pagination}>
    {currentPage > 1 && (
      <button onClick={previousPage}><i className="fas fa-chevron-left"></i></button>
    )}
    &nbsp;<span>{currentPage} of {totalPages}</span>&nbsp;
    {currentPage < totalPages && (
      <button onClick={nextPage}><i className="fas fa-chevron-right"></i></button>
    )}
  </div>
);

export default BasicPagination;
