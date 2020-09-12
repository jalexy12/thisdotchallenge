import React, { useState } from 'react';
import styles from './styles.module.css';

function SearchForm({ onSubmit, disabled }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchError, setSearchError] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setSearchError("");

    if (!searchTerm) {
      setSearchError("It looks like your search was empty.");
      return;
    }

    onSubmit(searchTerm);
  }

  return (
    <div className={styles.formContainer}>
      <h1>Github search</h1>
      <span className={styles.madeFor}>
        Made for&nbsp;
        <img src="https://uploads-ssl.webflow.com/5a9e6c4d3dd0520001f5b761/5e84f7055154236d4531a86e_td_media.svg" />
      </span>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Seach for a user"
        />
        <button
          disabled={disabled}
          type="submit"
        >
          Search!
        </button>
      </form>
      {searchError && (
        <p className={styles.searchError}>{searchError}</p>
      )}
    </div>
  );
}

export default SearchForm;
