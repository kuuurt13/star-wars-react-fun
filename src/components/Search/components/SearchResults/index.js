import React from 'react';
import './styles.css';

export default ({ results, onClick }) =>
  <section className="results-section">
    <ul>
      {results.map(res => <li key={res.name} onClick={() => onClick(res.id)}>{res.name}</li>)}
    </ul>
  </section>
