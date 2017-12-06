import React, { Component } from 'react';
import { connect } from 'react-redux';

import HaikuCard from '../components/HaikuCard';
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
        <h1>Haikus</h1>
        {this.props.haikus.map(haiku => <HaikuCard key={haiku.id} haiku={haiku} />)}
        <HaikuForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    haikus: state.haikus
  })
}

 export default connect(mapStateToProps, { getHaikus })(Haikus);
