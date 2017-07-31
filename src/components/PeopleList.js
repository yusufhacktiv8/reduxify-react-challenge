import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getPeople } from '../actions';

class PeopleList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    return (
      <div className="PeopleList">
        <ol>
          {
            this.props.people.map((person) => {
              const url = person.url;
              const personId = url.match(/\d+/)[0];
              return (
                <li key={person.name}><Link to={`/people/${personId}`}>{person.name}</Link></li>
              );
            })
          }
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people,
  };
};

const mapDispatchToProps = (disptach) => {
  return {
    getPeople: () => {
      disptach(getPeople());
    },
  };
};

const peopleListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleList);

export default peopleListContainer;
