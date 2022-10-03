import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import Aux from '../../hoc/Aux/Aux';
import CurrentPosition from './CurrentPosition/CurrentPosition';
import CostBasis from './CostBasis/CostBasis';

const API = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&apikey=2KKJKFRTU1O89LPT&symbol=';

const fetchStockData = async (ticker: string) => {
  if (!ticker && ticker === '') { return ''; }
  
  const url = API + ticker;
  return await fetch(url).then(response => response.json())
    .then(data => {
      if (data['Time Series (5min)']) {
        const lastTimestamp = Object.keys(data['Time Series (5min)'])[0];
        const stockData = data['Time Series (5min)'][lastTimestamp];
        const stockClose = Number(stockData['4. close']);
        return stockClose.toString();
      } else {
        return '';
      };
    })
}

const Home = () => {
  const [ticker, setTicker] = useState('');
  const [lastClose, setLastClose] = useState('');
  const [numberOfShares, setNumberOfShares] = useState('');
  const [averageCost, setAverageCost] = useState('');
  const [newSharesToAdd, setNewSharesToAdd] = useState('');
  const [newSharePrice, setNewSharePrice] = useState('');
  const [desiredCostBasis, setDesiredCostBasis] = useState('');
  const [desiredSharesToAdd, setDesiredSharesToAdd] = useState('');

  const { data, status } = useQuery(["stockData", ticker], async () => {
    return fetchStockData(ticker);
  }, {});

  useEffect(() => {
    setLastClose(data || '' );
  }, [data])
  
  const inputHandler = (event: any, section: string) => {
    const inputFieldName = event.target.name;
    const inputValue = event.target.value.trim();
    
    if (inputFieldName === 'ticker') {
      let value = inputValue.replace(/[^a-z0-9]/gi, '').toUpperCase();
      setTicker(value);
    } else if (!isNaN(Number(inputValue))) {
      if (inputFieldName === 'numberOfShares') { 
        setNumberOfShares(inputValue);
      } else if (inputFieldName === 'averageCost') { 
        setAverageCost(inputValue);
      } else if (inputFieldName === 'newSharesToAdd') { 
        setNewSharesToAdd(inputValue);
      } else if (inputFieldName === 'newSharePrice') { 
        setNewSharePrice(inputValue);
      } else if (inputFieldName === 'desiredCostBasis') { 
        setDesiredCostBasis(inputValue);
      } else if (inputFieldName === 'desiredSharesToAdd') { 
        setDesiredSharesToAdd(inputValue);
      } 
    }
  }

  const clearInputHandler = (event: any, section: string) => {
    if (section === 'position') {
      setTicker('');
      setLastClose('');
      setNumberOfShares('');
      setAverageCost('');
    } else if (section === 'newCostBasis') {
      setNewSharesToAdd('');
      setNewSharePrice('');
    } else if (section === 'desiredCostBasis') {
      setDesiredCostBasis('');
      setDesiredSharesToAdd('');
    }
  }

  const currentPositionSectionData = () => {
    return { ticker: ticker, lastClose: lastClose, numberOfShares: numberOfShares, averageCost: averageCost };
  }

  const newCostBasisSectionData = () => {
    return { sharesToAdd: newSharesToAdd, sharePrice: newSharePrice };
  }

  const desiredCostBasisSectionData = () => {
    return { desiredCostBasis: desiredCostBasis, sharesToAdd: desiredSharesToAdd };
  }

  return (
    <Aux>
      <CurrentPosition
        position={currentPositionSectionData()}
        changeHandler={inputHandler}
        clearHandler={clearInputHandler} />
      <CostBasis
        position={currentPositionSectionData()}
        newCostBasis={newCostBasisSectionData()}
        desiredCostBasis={desiredCostBasisSectionData()}
        changeHandler={inputHandler}
        clearHandler={clearInputHandler} />
    </Aux>
  );
}

export default Home;
