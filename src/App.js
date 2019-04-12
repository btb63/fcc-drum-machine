import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Howl, Howler} from 'howler';
import ReactHowler from 'react-howler';
import sound from './media/scratchy-bells.mp3'


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      clicked : false,
    }

    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(event) {
    alert('clicked');
    this.setState({clicked: true});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={this.handleClick}>
          Drum Machine
        </header>
        <PlayBells wasClicked={this.state.clicked}/>
      </div>
    );
  }
}

function PlayBells(props) {
  const wasClicked = props.wasClicked;

  if(wasClicked) {
    return <ReactHowler src={sound} playing={true}/>;
  } else {
    return <h1>No.</h1>;
  }
}
export default App;
