import React from 'react';
import Name from './name';
import Image from './image';
import Infos from './infos';

const Hero = ({ extension, id, name, onHeroClick, path, urls }) => {
  return (
    <div className='hero'>
      <Name name={ name } />
      <Image extension={ extension } id={ id } onHeroClick={ onHeroClick } path={ path } />
      <Infos urls={ urls } />  </div>
  );
  
};

Hero.propTypes = {
  extension: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired,
  urls: React.PropTypes.array.isRequired,
};

export default Hero;