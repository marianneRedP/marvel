import React from 'react';

const Image = ({ extension, id, path }) => {

  const thumb = `${ path }.${ extension }`;

  
  return (
    <div className='image' >
      <img src={ thumb } height="200" width="200" />
    </div>
  );
};

Image.propTypes = {
  extension: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired,
};

export default Image;
