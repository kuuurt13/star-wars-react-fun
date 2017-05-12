import React from 'react';
import './SearchResults.css';

export default ({ results }) =>
  <section className="results-section">
    <ul>
      {results.map(res => <li key={res.name}>{res.name}</li>)}
    </ul>
  </section>
