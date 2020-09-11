import React from 'react';

const BasicPagination = ({
  currentPage,
  totalPages,
  nextPage,
  previousPage
}) => (
  <div>
    {currentPage > 1 && (
      <button onClick={previousPage}>&lt;</button>
    )}
    <span>{currentPage}..{totalPages}</span>&nbsp;
    {currentPage < totalPages && (
      <button onClick={nextPage}>&gt;</button>
    )}
  </div>
);

export default BasicPagination;
