import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCharacters } from '../../actions/searchActions';
import { getCharacterDetails, clearCharacterDetails } from '../../actions/characterDetailsActions';
import Search from '../../components/Search';
import CharacterDetails from '../../components/CharacterDetails';

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
    const {
      results,
      character,
      getCharacterDetails,
      clearCharacterDetails
    } = this.props;

    if (!character) {
      return (
        <Search
          placeholder={this.placeholder}
          searchCharacters={this.searchCharacters}
          onInput={this.searchCharacters}
          results={results}
          onClick={getCharacterDetails}
        />
      );
    }

    return (
      <CharacterDetails
        character={character}
        clearCharacterDetails={clearCharacterDetails}
      />
    );
  }
}

const mapStateToProps = ({ results, character }) => {
  return {
    results,
    character
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchCharacters: term => dispatch(searchCharacters(term)),
    getCharacterDetails: id => dispatch(getCharacterDetails(id)),
    clearCharacterDetails: () => dispatch(clearCharacterDetails())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsSearch);
