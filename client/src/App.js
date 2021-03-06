import React, { Component } from 'react';
import TeamSelector from './components/TeamSelector'

class App extends Component {
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
  };

  render() {
    return (
      <div className="App">
        <TeamSelector />
        <p>{this.state.response.fixture_date}</p>
      </div>
    );
  }
}

export default App;
