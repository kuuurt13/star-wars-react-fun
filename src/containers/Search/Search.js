import React from 'react'
import PropTypes from 'prop-types'
import './Search.css'
import { SearchInput, SearchResults } from '../../components'
import { useCharacterSearch } from '../../effects'

const Search = ({ onSelect, placeholder, debounce }) => {
  const [{ results, isLoading }, searchCharacters] = useCharacterSearch()

  return (
    <div className="search">
      <SearchInput
        placeholder={placeholder}
        debounce={debounce}
        onChange={searchCharacters}
      />
      <SearchResults
        results={results}
        isLoading={isLoading}
        onSelect={onSelect}
      />
    </div>
  )
}

Search.propTypes = {
  debounce: PropTypes.number,
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
}

Search.defaultProps = {
  placeholder: 'Search',
  debounce: 500,
}

export default Search
