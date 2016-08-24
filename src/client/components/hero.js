import React from 'react';
import Name from './name';
import Image from './image';
import Infos from './infos';
import { Link } from 'react-router';

const Hero = ({ extension, id, name, path, urls }) => {
  return (
    <div className='hero'>
     <Name name={ name } />
     <Link to={`/hero/${id}`}>
        <Image extension={ extension } id={ id } path={ path } />
      </Link>
      <Infos urls={ urls } />
    </div>
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
