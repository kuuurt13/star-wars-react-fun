import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import SearchInput from '../../components/SearchInput'
import SearchResults from '../../components/SearchResults'

const Search = ({ results, onSearch, onSelect, placeholder, debounce }) => {
  return (
    <div className="search-container">
      <SearchInput
        placeholder={placeholder}
        debounce={debounce}
        onChange={onSearch}
      />
      <SearchResults results={results} onSelect={onSelect} />
    </div>
  )
}

Search.propTypes = {
  debounce: PropTypes.number,
  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
  results: PropTypes.array,
  placeholder: PropTypes.string,
}

Search.defaultProps = {
  placeholder: 'Search',
  debounce: 500,
}

export default Search
