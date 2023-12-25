import { useState } from 'react';
import Button from './Button';
import Input from './Input';
// import Card from "./Card";

import './Guess.css';

function Guess() {

    // Set main variable
    const [guess, setGuess] = useState('');

    // The Guess outcome
    const [outcome, setOutcome] = useState('');

    // Hard code number
    // const toGuessNo = 16;

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random/
    const [toGuessNo, setToGuessNo] = useState(Math.floor(Math.random() * 20 + 1));

    // Record guesses in an array.
    const [guessArray, setGuessArray] = useState([]);

    // Check if guess/input matches
    const handlerMatch = () => {
        // If Match, Wins
            setGuess((prevGuess) => {
                if (toGuessNo === +prevGuess) {
                    setOutcome('You have guessed it right!')
                } else if (toGuessNo < +prevGuess) {
                    setOutcome('Try a lower number..')
                }   else {
                        setOutcome('Try a higher number..')
                    }
                    
            // Regardless of outcome, to store the guess into array
            setGuessArray([...guessArray, prevGuess]);
            });

        // Else, Try next Number


    };

    // Reset the game / Start new game
    const handlerReset = () => {
        return (
            setGuess(''),
            setOutcome(''),
            setGuessArray([]),
            setToGuessNo(Math.floor(Math.random() * 20 + 1))
        );
    };

    // Handle Guess changes in input
    const handlerChange = (value) => {
        setGuess(value);
    };

    return (
        <>
            <h1>Number Guess Game!</h1>
            <p>Guess a number between 1 - 20.</p>
            <Input value={guess} label='Make A Guess' onChange={handlerChange} />
            <p>{outcome}</p>
            <div>
                <Button label='Guess' onClick={handlerMatch} />
                <Button label='Start New Game' onClick={handlerReset} />
            </div>
            <div>
                <>{guessArray.map(function(guess) {
                    return (
                        <span margin> {guess}</span>
                    );
                })}</>
            </div>
            <div>{toGuessNo}</div>
        </>

    );
}

export default Guess;