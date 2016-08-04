import React from 'react';
import Name from './name';
import Image from './image';

const HeroID = ({ heroes }) => {

  const comics = _.map(heroes.comics.items, (comic, id) => <span key={ id }>{ comic.name }</span>);
  const series = _.map(heroes.series.items, (series, id) => <span key={ id }>{ series.name }</span>);
  const stories = _.map(heroes.stories.items, (stories, id) => <span key={ id }>{ stories.name }</span>);

  console.log('-------',heroes);

  return (
    <div className='heroid' >
      <Image extension={ heroes.thumbnail.extension } path={ heroes.thumbnail.path } />
      <Name name={ heroes.name } />
      <div>Comics</div>
         { comics } 
      <div>Series</div>
           { series } 
      <div>Stories</div>
         { stories } 
    </div>
  );
};

HeroID.propTypes = {
  heroes: React.PropTypes.object.isRequired,
};

export default HeroID;
