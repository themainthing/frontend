import React, { Component } from 'react';

class Apifetching extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const apiUrl = 'http://localhost:8080/tracker';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          data: data,
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        this.setState({
          data: null,
          isLoading: false,
          error: error.message,
        });
      });
  }

  render() {
    const { data, isLoading, error } = this.state;

    return (
      <div>
        <h2>From API </h2>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <div>
            <h3>Data from API:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
}

export default Apifetching;
