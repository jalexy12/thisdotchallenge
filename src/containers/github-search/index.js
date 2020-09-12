import React, { useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import ResultsList from '../../components/results-list';
import SearchForm from '../../components/search-form';
import ApiQuery from '../../api-query';
import styles from './styles.module.css';

const DEFAULT_PER_PAGE = 20;
const githubQuery = new ApiQuery();

function GithubSearch({ cache }) {
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
    const query = githubQuery.formulateQuery(searchTerm, page, perPage);
    const cached = cache.get(query);

    if (cached) {
      setResults(cached);
      setResultError(null);
      setLoading(false);
    } else {
      githubQuery.search(query)
        .then(r => {
          setResults(r.data);
          setResultError(null);
          setLoading(false);
          cache.set(query, r.data)
        })
        .catch(e => {
          setResults(null);
          setResultError(e.response.data);
          setLoading(false);
        })
    }
  }

  return (
    <section className={styles.mainContainer}>
      <SearchForm
        onSubmit={onSubmit}
        disabled={loading}
      />
      {(!results && loading) && (
        <div className={styles.loaderContainer}>
          <PacmanLoader color="#FFFF00" />
        </div>
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
    </section>
  )
}

export default GithubSearch;
