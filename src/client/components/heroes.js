import React from 'react';
import Hero from './hero';
import HeroID from './hero_id';

const Heroes = ({ heroes, onHeroClick, view }) => {
  if (view) {
    const data = _.map(heroes, (hero, id) => 
      <Hero
        key={ Number(id) }
        extension={ hero.thumbnail.extension }
        id={ hero.id }
        name= { hero.name }
        onHeroClick= { onHeroClick }
        path={ hero.thumbnail.path }
        urls={ hero.urls }
      />);
    
    return (
      <div className='heroes'>
        { data }
     </div>
    );
  };

  return (
    <HeroID heroes={ heroes[0] } />
  );

};

Heroes.propTypes = {
  heroes: React.PropTypes.object.isRequired,
  view: React.PropTypes.bool.isRequired,
  onHeroClick: React.PropTypes.func.isRequired,
};

export default Heroes;
