import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getPerson, resetPerson } from '../actions';

class PersonDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: null,
    };
  }

  componentWillMount() {
    this.props.resetPerson();
    this.props.getPerson(this.props.match.params.id);
  }

  render() {
    const person = this.props.person;
    return (
      <div className="PersonDetail">
        <div>{person.name}</div>
        <div>Eye color: {person.eye_color}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    person: state.person,
  };
};

const mapDispatchToProps = (disptach) => {
  return {
    getPerson: (id) => {
      disptach(getPerson(id));
    },
    resetPerson: () => {
      disptach(resetPerson());
    },
  };
};

const personDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonDetail);

export default personDetailContainer;
