import React from 'react';

const Name = ({ name }) => <div className='name'><h2>{ name }</h2></div>;

Name.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Name;
