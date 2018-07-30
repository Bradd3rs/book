import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('http://www.mocky.io/v2/5b5f8bee2e00009b0a694984')
  .then((response) => {
    console.log(response.data);
    this.setState(() => ({ data: response.data }))
  })
  .catch((error) => {
    console.log(error);
  });
  }
  render() {
    return (
      <div>
        {
          this.state.data.map((feature, i) => <p key={i}>{feature.Name}</p> )
        }
      </div>
    );
  }
}

export default App;
