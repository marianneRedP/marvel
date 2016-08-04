import React from 'react';

const Info = ({ link, type }) => {
  return (
    <div className='info'>
      <p><a href={ link }>{ type }</a></p>
    </div>
  );
};

Info.propTypes = {
  link: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
};

export default Info;
