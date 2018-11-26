import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const SearchResult = ({ results, onSelect }) => (
  <section className="results-section">
    <ul>
      {results.map(res => (
        <li key={res.name} onClick={() => onSelect(res.id)}>
          {res.name}
        </li>
      ))}
    </ul>
  </section>
)

SearchResult.propTypes = {
  results: PropTypes.array,
  onSelect: PropTypes.func,
}

export default SearchResult
