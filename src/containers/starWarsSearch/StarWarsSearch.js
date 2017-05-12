import React, { Component } from 'react';
import { connect } from 'react-redux';
import './StarWarsSearch.css';
import { searchCharacters } from '../../actions/searchActions';
import SearchInput from '../../components/searchInput/SearchInput';
import SearchResults from '../../components/searchResults/SearchResults';

class StarWarsSearch extends Component {
  constructor(props) {
    super(props);

    this.placeholder = 'Star Wars Character Search';
  }

  searchCharacters = ({ target }) => {
    const { searchCharacters } = this.props;
    const { value } = target;

    searchCharacters(value);
  };

  render() {
    const { results } = this.props;

    return (
      <div className="search-container">
        <SearchInput
          placeholder={this.placeholder}
          debounce={250}
          onInput={this.searchCharacters}
        />
        <SearchResults results={results} />
      </div>
    );
  }
}

const mapStateToProps = ({ results }) => {
  return {
    results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchCharacters: term => dispatch(searchCharacters(term))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsSearch);
