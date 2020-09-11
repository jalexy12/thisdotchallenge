import React, { useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import SearchForm from '../../components/search-form';

function GithubSearch() {
  const [loading, setLoading] = useState(false);

  function onSubmit(searchTerm) {
    console.log('Submitted', searchTerm);
  }

  if (loading) { return <PacmanLoader />; }

  return (
    <SearchForm onSubmit={onSubmit} />
  );
}

export default GithubSearch;
