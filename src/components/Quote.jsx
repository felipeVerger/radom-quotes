import React, {useState, useEffect} from 'react'
import { useQuery } from 'react-query'
import Divider from '../assets/images/pattern-divider-desktop.svg'
import IconDice from '../assets/images/icon-dice.svg';

import './Quote.css'
import { getRandomQuotes } from '../service/service';
import Loading from './Loading';

const Quote = () => {
  const [randomNumber, setRandomNumber] = useState(1);

  const { data, isLoading, isError, isSuccess } = useQuery(['getQuote', randomNumber], () => getRandomQuotes(randomNumber));

  const handleQuote = () => {
     const random = Math.floor(Math.random() * (225 - 1) * 1)
     setRandomNumber(random);
  }

  return (
    <div className="quote-container">
      {isLoading ? <Loading/> : 
      isError ? <span>Theres been an error</span> :
      isSuccess ?
      <div className="quote-content">
        <span className="advice-id">{'advice #' + data?.id}</span>
        <p className="quote">{'"' + data?.advice + '"'}</p>
        <img src={Divider} alt="divider" />
        <button onClick={handleQuote}>
          <img src={IconDice} alt="change" />
        </button>
      </div>
      : null}
    </div>
  );
}

export default Quote