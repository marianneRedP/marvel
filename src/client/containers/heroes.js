import React from 'react';
import { connect } from 'react-redux';
import Hero from '../components/hero';
import HeroID from './hero_id';
import { fetchHero, fetchHeroes } from '../actions/heroes';

class Heroes extends React.Component {

    componentWillMount () {
      this.props.fetchHeroes();
    };

    render() {
      const data = _.map(this.props.heroes, (hero, id) => 
        <Hero
          key={ Number(id) }
          extension={ hero.thumbnail.extension }
          id={ hero.id }
          name= { hero.name }
          onHeroClick= { this.props.onHeroClick }
          path={ hero.thumbnail.path }
          urls={ hero.urls }
        />);
      return (
        <div className='heroes'>
          { data }
      </div>
      );
    };
};

Heroes.propTypes = {
  heroes: React.PropTypes.object.isRequired,
  onHeroClick: React.PropTypes.func.isRequired,
};

export default connect(state => ({ heroes: state.heroes }), { onHeroClick: fetchHero, fetchHeroes })(Heroes);
