import React, { Component } from 'react';
import logo from './logo.svg';
import FighterCard from './components/FighterCard';
import Title from './components/Title';
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
        <Title>World Warriors</Title>
        {this.state.fighters.map(fighter => (
          <FighterCard
            id={fighter.id}
            key={fighter.id}
            name={fighter.name}
            image={fighter.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
