import React, { Component } from 'react';
import './App.css';
import socketIOClinet from 'socket.io-client';

class App extends Component {
  constructor() {
    super();

    this.state = {
      endpoint: "http://localhost:4000"
    }
  }

  send = () => {
      const socket = socketIOClinet(this.state.endpoint);

      socket.emit('change color', 'red');
  }

  render() {
    const socket = socketIOClinet(this.state.endpoint);
    socket.on('change color', (color) => {
      document.body.style.backgroundColor = color;
    });

    return (<div style={{textAlign: "center"}}>
              <button onClick={() => this.send()}>Change Color</button>
            </div>)
  }
}

export default App;
