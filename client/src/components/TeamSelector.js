import React, { Component } from 'react';

class TeamSelector extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    var response = this.callApi()
    this.setState({ response: response })
  }

  callApi = async () => {
    const response = await fetch('/api');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body
    // this.setState({ response: body })
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
