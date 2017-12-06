
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';

const Add = () => <h1>add me</h1>;

const Feed = () => <h1>feed</h1>;

const CheckIn = () =>
  // <form>
    <h1>check in </h1>;
  //   <div>
  //     <input type="text" name="username" placeholder="Username" />
  //     <label htmlFor="alias">alias: </label>
  //   </div>
  //   <div>
  //     <input type="password" name="password" placeholder="Password" />
  //     <label htmlFor="password">Password</label>
  //   </div>
  //   <input type="submit" value="Login" />
  // </form>;
//
const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" render={CheckIn} />
        <Route exact path="/feed" render={Feed} />
        <Route exact path="/add" render={Add} />
      </div>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
