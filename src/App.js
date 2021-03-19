import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://api.sportsdata.io/v3/soccer/scores/json/PlayersByTeam/511?key=9dc12189625c4019a5f4ce6b040647d9')
      .then(res => res.json())
      .then(plays => {
        console.log('players: ', plays);
        this.setState({
          players: plays
        });
      });
  }

  search = (event) => {
    this.setState({
      searchField: event.target.value
    });
  }

  render() {
    const {players, searchField} = this.state;
    const filteredPlayers = players.filter(player => 
      player.CommonName.toLowerCase().includes(searchField.toLocaleLowerCase())  
    )
    return(
      <div className="main">
        <div className="header">
          <h1 className="title">Chelsea Players</h1>
          <SearchBox 
            label="Player to Search"
            placeholder="Type here to search a player"
            handleChange={e => this.search(e)}
          />
        </div>
        <CardList players={filteredPlayers} />
      </div>
    );
  }

}

export default App;
