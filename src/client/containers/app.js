import React from 'react';
import Title from '../components/title';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Title/>
        { this.props.children }
      </div>
    );
  }
}

