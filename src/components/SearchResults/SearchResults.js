import React from 'react'
import PropTypes from 'prop-types'
import './SearchResults.css'
import { Loader } from '../'

const SearchResult = ({ results, isLoading, onSelect }) => (
  <section className="results-section">
    <Loader isLoading={isLoading}>
      <ul>
        {results.map(res => (
          <li key={res.name} onClick={() => onSelect(res.id)}>
            {res.name}
          </li>
        ))}
      </ul>
    </Loader>
  </section>
)

SearchResult.propTypes = {
  isLoading: PropTypes.bool,
  onSelect: PropTypes.func,
  results: PropTypes.array,
}

export default SearchResult
