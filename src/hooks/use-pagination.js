import { useState } from 'react';

function usePagination(totalCount, resultsPerPage, onPrev, onNext) {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage]         = useState(resultsPerPage);

  const totalPages = Math.ceil(totalCount / perPage);

  function previousPage() {
    if (currentPage > 1) {
      onPrev(currentPage - 1)
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      onNext(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  }

  return {
    currentPage,
    totalPages,
    nextPage,
    previousPage
  };
}

export default usePagination;
