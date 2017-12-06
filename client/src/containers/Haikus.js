import React, { Component } from 'react';
import { connect } from 'react-redux';

import Add from '../components/Add';
import CheckIn from '../components/CheckIn';
import Feed from '../components/Feed';

import HaikuDisplay from '../components/HaikuDisplay';
import HaikuForm from './HaikuForm';
import { getHaikus } from '../actions/haikus';
import './Haikus.css';

class Haikus extends Component {

  componentDidMount() {
    this.props.getHaikus()
  }

  render() {
    return (
      <div className="HaikusContainer">
        <Route exact path="/feed" render={Feed} () => (
          <h1>Haikus</h1>
          {this.props.haikus.map(haiku => <HaikuDisplay key={haiku.id} haiku={haiku} />)}
        )}/>

      </div>;
    );
  }
}

// <Route exact path="/" render={CheckIn} />

// <Route exact path="/add" render={Add} />
const mapStateToProps = (state) => {
  return ({
    haikus: state.haikus
  })
}

 export default connect(mapStateToProps, { getHaikus })(Haikus);
 //  render() {
 //    let haikuList =
 //    this.props.haiku.map(haiku =>
 //      <section key={haiku.id} className="HaikuDisplay">
 //        <h3>{haiku.alias}</h3>
 //        <p>{haiku.noun_one}</p>
 //        <p>{haiku.noun_two}</p>
 //        <p>{haiku.noun_three}</p>
 //        <p>{haiku.noun_four}</p>
 //        <p>{haiku.noun_five}</p>
 //      </section>);
 //    return (
 //      <div className="HaikusContainer">
 //        <h1>Haikus</h1>
 //        {haikuList}
 //      </div>
 //      );
 //    }
