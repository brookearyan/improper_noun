import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import haiku from '../reducers/haikus';
import haikus from '../actions/haikus';


import HaikuDisplay from '../containers/HaikuDisplay';
import store from '../store.js';
import App from '../containers/App';

const Feed = () => {
  return(
    <section>
      <HaikuDisplay />
    </section>
  );
}

export default Feed;
