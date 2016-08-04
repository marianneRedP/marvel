import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/title';
import Heroes from '../components/heroes';
import { fetchHeroes, fetchHeroesID } from '../actions/heroes';

class App extends React.Component {

  onHeroClick = (id) => {
    this.props.dispatch(fetchHeroesID(id)); 
  };

  render() {
    return (
      <div className='app'>
        <Title />
        <Heroes heroes={ this.props.heroes } onHeroClick={ this.onHeroClick } view={ this.props.view } />
      </div>
    );
  }
}

App.propTypes = {
  heroes: React.PropTypes.object.isRequired,
  view: React.PropTypes.bool.isRequired,
};

export default connect(state => ({ heroes: state.heroes, view: state.view }))(App);
