import "./App.css";
import React, { Component } from "react";
import { SearchBar } from "./Components/search-component/search-bar.Component";
import { CardList } from "./Components/card-component/cardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
      search: "",
    };
  }
  componentDidMount(previousState, previousPros) {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((e) => e.json())
      .then((ev) => {
        return this.setState({
          info: ev,
        });
      });
  }
  SearchR = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { info, search } = this.state;
    const filterhero = info.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <h2>Your Favorite</h2>
        <h1>Super Heros</h1>
        <SearchBar Search={this.SearchR} />
        <CardList ii={filterhero} />
      </div>
    );
  }
}

export default App;
