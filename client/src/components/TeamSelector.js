import React, { Component } from 'react';

class TeamSelector extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
  }

  callApi = async () => {
    const response = await fetch('/api');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    this.setState({ response: body })
    // return body;
  };

  render() {
    return (
      <div className="App">
        <button>Heck</button>
      </div>
    );
  }
}

export default TeamSelector;
