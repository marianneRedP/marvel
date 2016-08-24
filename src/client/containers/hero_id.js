import { fetchHero, fetchHeroes } from '../actions/heroes';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import React from 'react';
import Name from '../components/name';
import Image from '../components/image';
import _ from 'lodash';

class HeroID extends React.Component {
    constructor(props) {
      super(props);
    };

     componentWillMount () {
      this.props.fetchHero(this.props.params.id);
    };


    render() {
      const hero = this.props.heroes[this.props.params.id];
      console.log('--------', hero);

      if (!hero) {
        console.log('NO HERO');
        return (
          <HeroID/> || <div className='heroid'></div>
        )
      };

      if (hero) {
      console.log('HERO');
      const comics = _.map(hero.comics.items, (comic, id) => <span key={ id }>{ comic.name }<br/></span>);
      const series = _.map(hero.series.items, (series, id) => <span key={ id }>{ series.name }<br/></span>);
      const stories = _.map(hero.stories.items, (stories, id) => <span key={ id }>{ stories.name }<br/></span>);
    
      return (
        <div className='heroid' >
          <Image extension={ hero.thumbnail.extension } path={ hero.thumbnail.path } />
          <Name name={ hero.name } />
          <div>Comics</div>
            { comics }
          <br/><br/>
          <div>Series</div>
            { series }
          <br/><br/>
          <div>Stories</div>
            { stories }
          <br/><br/>
          <Link to='/'>Back</Link>
        </div>
      );
    };
  }
};

HeroID.propTypes = {
  heroes: React.PropTypes.array,
};

export default connect(state => ({ heroes: state.heroes }), { fetchHero, fetchHeroes })(HeroID);

