import React, { useState } from 'react';

function SearchForm({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchError, setSearchError] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchTerm) {
      setSearchError("It looks like your search was empty. Please make sure your search contains at least one character");
      return;
    }

    onSubmit(searchTerm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Seach for a user (or more)"
      />
      <button type="submit">Search!</button>
      {searchError && (
        <p>{searchError}</p>
      )}
    </form>
  );
}

export default SearchForm;
