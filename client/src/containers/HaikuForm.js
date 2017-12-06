import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateHaikuFormData } from '../actions/haikuForm';
import { createHaiku } from '../actions/haikus';

class HaikuForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentHaikuFormData = Object.assign({}, this.props.haikuFormData, {
      [alias]: value
    })
    this.props.updateHaikuFormData(currentHaikuFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createHaiku(this.props.haikuFormData)
  }

  render() {
    const { alias, noun_one, noun_two, noun_three, noun_four, noun_five } = this.props.haikuFormData;

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="alias">Alias:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              alias="alias"
              value={alias}
            />
          </div>
          <div>
            <input
              type="string"
              onChange={this.handleOnChange}
              name="noun_one"
              value={noun_one}
            />
          </div>
          <div>
            <input
              type="string"
              onChange={this.handleOnChange}
              name="noun_two"
              value={noun_two}
            />
          </div>
          <div>
            <input
              type="string"
              onChange={this.handleOnChange}
              name="noun_three"
              value={noun_three}
            />
          </div>
          <div>
            <input
              type="string"
              onChange={this.handleOnChange}
              name="noun_four"
              value={noun_four}
            />
          </div>
          <div>
            <input
              type="string"
              onChange={this.handleOnChange}
              name="noun_five"
              value={noun_five}
            />
          </div>

          <button type="submit">share</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    haikuFormData: state.haikuFormData
  }
}

export default connect(mapStateToProps, {
  updateHaikuFormData,
  createHaiku
})(HaikuForm);
