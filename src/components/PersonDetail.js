import React, { Component } from 'react';

import axios from 'axios';

const SWAPI_URL = 'https://swapi.co/api/people';
class PersonDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: null,
    };
  }

  componentDidMount() {
    axios.get(`${SWAPI_URL}/${this.props.match.params.id}/`)
    .then((response) => {
      this.setState({
        person: response.data,
      });
    });
  }

  render() {
    const person = this.state.person || {};
    return (
      <div className="PersonDetail">
        <div>{person.name}</div>
        <div>Eye color: {person.eye_color}</div>
      </div>
    );
  }
}

export default PersonDetail;
