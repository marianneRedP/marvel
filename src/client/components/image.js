import React from 'react';

const Image = ({ extension, id, onHeroClick, path }) => {

  const thumb = `${ path }.${ extension }`;

  const handleClick = () => {
    onHeroClick(id);
  };
  
  return (
    <div className='image' onClick={ handleClick } >
      <img src={ thumb } height="200" width="200" />
    </div>
  );
};

Image.propTypes = {
  extension: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired,
};

export default Image;
