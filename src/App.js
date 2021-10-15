import React, { Component } from "react";
import Header from './Header'
import data from './data.js'
import DinoItem from "./DinoItem";
import {Helmet} from "react-helmet";



class App extends Component {
  constructor() {
    super()

    this.state = {
      dinos: data,
      highScore: 0,
      currentScore: 0,
      Clicked: false,
      gameOver: false,
    }
  }



  handleClick = id => {
    this.shuffleArray();
    this.handleScore(id);
    console.log(this.state.timesClicked);
  };


  handleScore = id => {
    this.state.dinos.forEach(element => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true;
        this.setState({ Clicked: false });
        this.handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        if (this.state.currentScore > this.state.highScore) {
          this.setState({ highScore: this.state.currentScore });
          this.setState({gameOver: true })
        }
        this.setState({ currentScore: 0 });
        this.setState({ Clicked: true });
        this.state.dinos.forEach(element => (element.clicked = false));
        console.log(this.state.dinos);
      }
    });
  };


  shuffleArray = () => {
    // Shuffle array of objects
    const shuffledArr = this.shuffle(this.state.dinos);
    // Setting 'shuffledArr' as the new state
    this.setState({ shuffledArr });
  };

   // handleIncrement increments this.state.currentScore by 1
   handleIncrement = () => {
    // Using setState method to update component's state
    this.setState({ currentScore: this.state.currentScore + 1 });
  };


  shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };


  handleRestart = () => {
    this.setState({ currentScore: 0 });
    this.setState({ gameOver: false });
    this.setState({ Clicked: false });
  }




  render() {

    const dinoItems = this.state.dinos.map(item => <DinoItem key={item.id} item={item} gameOver={this.state.gameOver} handleClick={this.handleClick} Clicked={this.state.Clicked}
      />)
    return (
      <div>
       <Helmet>
        <title>Dino Memory Game</title>
        <meta name="description" content="memory game" />
      </Helmet>
        <Header currentScore={this.state.currentScore} highScore={this.state.highScore} handleRestart={this.handleRestart} />
        <div className={"wrapper " + (this.state.gameOver ? "hide" : "")}>{dinoItems}</div>

      </div>
    )
  }
}

export default App