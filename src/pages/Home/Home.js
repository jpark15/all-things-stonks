import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import CurrentPosition from './CurrentPosition/CurrentPosition';
import CostBasis from './CostBasis/CostBasis';

class Home extends Component {
  state = {
    position: {
      ticker: '',
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

  inputHandler = (event, section) => {
    let tempState = { ...this.state }
    let tempSection = { ...tempState[section] }

    const inputFieldName = event.target.name;
    const value = event.target.value.trim();

    if (inputFieldName === 'ticker') {
      let ticker = value.replace(/[^a-z0-9]/gi, '')
      tempSection[inputFieldName] = ticker.toUpperCase();
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
