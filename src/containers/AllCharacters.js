import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import Loading from '../components/Loading';
import { getCharacters } from '../services/RickMortyApi';
import Paging from '../components/Paging/Paging';

export default class AllCharacters extends PureComponent {
  state = {
    characters: [],
    loading: true,
    totalPages: 1,
    currentPage: 1
  }

  fetchCharacters = () => {
    this.setState({ loading: true });
    getCharacters(this.state.currentPage)
      .then(({ totalPages, characters }) => this.setState({ 
        characters, 
        loading: false,
        totalPages
      }));
  }

  nextPage = page => {
    this.setState({ currentPage: page });
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentPage !== this.state.currentPage) {
      this.fetchCharacters();
    }
  }

  render() {
    const { 
      characters, 
      loading,
      totalPages,
      currentPage
    } = this.state;
    if(loading) return <Loading />;

    return (
      <Paging currentPage = {currentPage} totalPages={totalPages} nextPage={this.nextPage}>
        <Characters characters={characters}/>;
      </Paging>
    );
  }
}
