import React, { useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import SearchForm from '../../components/search-form';
import ApiQuery from '../../api-query';

const githubQuery = new ApiQuery();

function GithubSearch() {
  const [loading, setLoading]         = useState(false);
  const [resultError, setResultError] = useState(null);
  const [results, setResults]         = useState(null);

  function onSubmit(searchTerm) {
    setLoading(true);

    githubQuery.search(searchTerm)
      .then(r => {
        setResults(r.data);
        setLoading(false);
      })
      .catch(e => {
        setResultError(e.response.data);
        setLoading(false);
      })
  }

  if (loading) { return <PacmanLoader />; }

  return (
    <SearchForm
      onSubmit={onSubmit}
      disabled={loading}
    />
  )
}

export default GithubSearch;
