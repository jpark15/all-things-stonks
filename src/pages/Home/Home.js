import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import CurrentPosition from './CurrentPosition/CurrentPosition';
import CostBasis from './CostBasis/CostBasis';

const API = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&apikey=2KKJKFRTU1O89LPT&symbol=';

class Home extends Component {
  state = {
    position: {
      ticker: '',
      lastClose: '',
      numberOfShares: '',
      averageCost: '',
    },
    newCostBasis: {
      sharesToAdd: '',
      sharePrice: '',
    },
    desiredCostBasis: {
      desiredCostBasis: '',
      sharesToAdd: '',
    },
  };

  fetchStockData = (ticker) => {
    const url = API + ticker;
    fetch(url).then(response => response.json())
      .then(data => {
        if (data['Time Series (5min)'] !== undefined) {
          let tempState = { ...this.state }
          let tempSection = { ...tempState['position'] }

          const lastTimestamp = Object.keys(data['Time Series (5min)'])[0];
          const stockData = data['Time Series (5min)'][lastTimestamp];
          const stockClose = Number(stockData['4. close']);

          tempSection['lastClose'] = stockClose;
          tempState['position'] = tempSection;
          this.setState(tempState);
        } else {
          let tempState = { ...this.state }
          let tempSection = { ...tempState['position'] }
          tempSection['lastClose'] = '';
          tempState['position'] = tempSection;
          this.setState(tempState);
        };
      });
  }

  inputHandler = (event, section) => {
    let tempState = { ...this.state }
    let tempSection = { ...tempState[section] }

    const inputFieldName = event.target.name;
    const value = event.target.value.trim();

    if (inputFieldName === 'ticker') {
      let ticker = value.replace(/[^a-z0-9]/gi, '')
      tempSection[inputFieldName] = ticker.toUpperCase();
      this.fetchStockData(tempSection[inputFieldName]);
    } else if (!isNaN(Number(value))) {
      tempSection[inputFieldName] = value;
    }

    tempState[section] = tempSection;
    this.setState(tempState);
  }

  clearInputHandler = (event, section) => {
    let tempState = { ...this.state }
    const allSections = Object.keys(this.state)
    allSections.map(currentSection => {
      if (currentSection === section || section === 'position') {
        let tempSection = { ...this.state[currentSection] }
        Object.keys(tempSection).map(k => tempSection[k] = '' );
        tempState[currentSection] = tempSection;
      }
      return null;
    })
    this.setState(tempState);
  }

  render () {
    return (
      <Aux>
        <CurrentPosition
          position={this.state.position}
          changeHandler={this.inputHandler}
          clearHandler={this.clearInputHandler} />
        <CostBasis
          position={this.state.position}
          newCostBasis={this.state.newCostBasis}
          desiredCostBasis={this.state.desiredCostBasis}
          changeHandler={this.inputHandler}
          clearHandler={this.clearInputHandler} />
      </Aux>
    );
  }
}

export default Home;
