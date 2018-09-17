import React, { Component } from 'react';
// import logo from './logo.svg';
import FighterCard from './components/FighterCard';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import fighters from './fighters.json';
import './App.css';

class App extends Component {

  state = {
    fighters
  }

  render() {
    return (
      <Wrapper>
        <Navbar>World Warriors</Navbar>
        <div className="container">
          <div className="wwCard row">
            {this.state.fighters.map(fighter => (
              <FighterCard
                id={fighter.id}
                key={fighter.id}
                name={fighter.name}
                image={fighter.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
