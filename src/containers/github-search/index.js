import React, { useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import ResultsList from '../../components/results-list';
import SearchForm from '../../components/search-form';
import ApiQuery from '../../api-query';

const DEFAULT_PER_PAGE = 20;
const githubQuery = new ApiQuery();

function GithubSearch() {
  const [loading, setLoading]             = useState(false);
  const [resultError, setResultError]     = useState(null);
  const [results, setResults]             = useState(null);
  const [perPage, setPerPage]             = useState(DEFAULT_PER_PAGE);
  const [currentQuery, setCurrentQuery]   = useState("")

  function onSubmit(searchTerm) {
    setLoading(true);
    setResults(null);
    setCurrentQuery(searchTerm);
    search(searchTerm, 1, perPage);
  }

  function fetchPage(page) {
    setLoading(true);
    search(currentQuery, page, perPage);
  }

  function search(searchTerm, page, perPage) {
    githubQuery.search(searchTerm, page, perPage)
      .then(r => {
        setResults(r.data);
        setResultError(null);
        setLoading(false);
      })
      .catch(e => {
        setResults(null);
        setResultError(e.response.data);
        setLoading(false);
      })
  }

  return (
    <>
      <SearchForm
        onSubmit={onSubmit}
        disabled={loading}
      />
      {(!results && loading) && (
        <PacmanLoader />
      )}
      {results && (
        <ResultsList
          loading={loading}
          results={results}
          perPage={perPage}
          fetchPrevious={fetchPage}
          fetchNext={fetchPage}
        />
      )}
    </>
  )
}

export default GithubSearch;
