import React from 'react';
import './styles.css';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';

export default ({
  results,
  placeholder,
  debounce,
  onInput,
  onClick
}) =>
  <div className="search-container">
    <SearchInput
      placeholder={placeholder}
      debounce={debounce}
      onInput={onInput}
    />
    <SearchResults
      results={results}
      onClick={onClick}
    />
  </div>
