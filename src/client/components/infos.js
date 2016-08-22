import React from 'react';
import Info from './info';
import Informations from './informations'

const Infos = ({ id, urls }) => {
  const data = _.map(urls, (url, id) =>
    <Info
      key={ Number(id) }
      link={ url.url }
      type={ url.type }
    />
  );

  return (
    <div className='infos'>
      { data }
    </div>
  );
};

Infos.propTypes = {
  urls: React.PropTypes.array.isRequired,
};

export default Infos;
